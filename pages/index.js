import React from 'react';
import { Hero } from '@containers/hero';
import { Header } from '@containers/header';
import { Page } from '@containers/page';

const leftItems = [{ label: "What's a Dapp?" }, { label: 'Who we are' }];
const rightItems = [{ label: 'Add your Dapp', type: 'button/primary' }];

const sections = {
  left: leftItems,
  right: rightItems,
};

export default () => (
  <Page>
    <Header data={sections} />
    <Hero title="Decentralized Apps and You" />
    <Page.Section wrap>
      <Page.Section.Content>content</Page.Section.Content>
      <Page.Sidebar>Sidebar</Page.Sidebar>
    </Page.Section>
  </Page>
);
