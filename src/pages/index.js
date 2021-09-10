import React from 'react';
import {Profile} from '@travi/matt.travi.org-components';
import SiteLayout from '../components/layout';

export default function WrappedProfile() {
  return (
    <SiteLayout>
      <Profile />
    </SiteLayout>
  );
}
