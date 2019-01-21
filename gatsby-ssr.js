const React = require('react');
const {renderToString} = require('react-dom/server');
const {SheetsRegistry} = require('jss');
const JssProvider = require('react-jss').default;
const {createGenerateClassName} = require('@material-ui/core/styles');
const theme = require('@travi/matt.travi.org-components');

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).

  // if (!process.browser) {
  return createPageContext();
  // }

  // // Reuse context on the client-side.
  // if (!global.__INIT_MATERIAL_UI__) {
  //   global.__INIT_MATERIAL_UI__ = createPageContext();
  // }
  //
  // return global.__INIT_MATERIAL_UI__;
}

function replaceRenderer({bodyComponent, replaceBodyHTMLString, setHeadComponents}) {
  // Get the context of the page to collected side effects.
  const muiPageContext = getPageContext();

  const bodyHTML = renderToString(
    <JssProvider registry={muiPageContext.sheetsRegistry}>{bodyComponent}</JssProvider>
  );

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      type="text/css"
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{__html: muiPageContext.sheetsRegistry.toString()}}
    />
  ]);
}

exports.replaceRenderer = replaceRenderer;
