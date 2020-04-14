import React from 'react';
import {Helmet} from 'react-helmet';
import {node} from 'prop-types';
import {Layout} from '@travi/travi.org-theme-components';
import {graphql, StaticQuery} from 'gatsby';

export default function SiteLayout({children}) {
  return (
    <StaticQuery
      query={
        graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      }
      render={data => (
        <Layout>
          <Helmet
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
            htmlAttributes={{lang: 'en'}}
          >
            <meta name="theme-color" content="#c80000" />
          </Helmet>
          {children}
        </Layout>
      )}
    />
  );
}

SiteLayout.propTypes = {
  children: node
};
