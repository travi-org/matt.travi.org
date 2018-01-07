import React from 'react';
import {node} from 'prop-types';
import Helmet from 'react-helmet';
import {Layout} from '@travi/matt.travi.org-components';
import {siteMetadata} from '../../gatsby-config';

export default function SiteLayout({children}) {
  return (
    <div>
      <Layout>
        <Helmet titleTemplate={`%s | ${siteMetadata.title}`} defaultTitle={siteMetadata.title} />
        {children()}
      </Layout>
    </div>
  );
}

SiteLayout.propTypes = {
  children: node
};
