import React from 'react';
import {ContactResults} from '@travi/matt.travi.org-components';
import SiteLayout from '../components/layout';

export default function WrappedContactResults() {
  return (
    <SiteLayout>
      <ContactResults />
    </SiteLayout>
  );
}
