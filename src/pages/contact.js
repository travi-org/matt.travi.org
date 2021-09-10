import React from 'react';
import {Contact} from '@travi/matt.travi.org-components';
import SiteLayout from '../components/layout';

export default function WrappedContact() {
  return (
    <SiteLayout>
      <Contact name="contact" action="/contact-results" />
    </SiteLayout>
  );
}
