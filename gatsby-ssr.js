import React from 'react';
import {renderToString} from 'react-dom/server';
import {SheetsRegistry} from 'jss';
import {JssProvider} from 'react-jss';
import {createGenerateClassName} from '@material-ui/core/styles';
import {theme} from '@travi/matt.travi.org-components';

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

export default function getPageContext() {
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

export function replaceRenderer({bodyComponent, replaceBodyHTMLString, setHeadComponents}) {
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
