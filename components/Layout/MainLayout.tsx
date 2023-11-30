import React from 'react';
import { AppShell } from '@mantine/core';
import { Header } from './Header';

interface ClientSideComponentProps {
  children: React.ReactNode;
}

const ClientSideComponent: React.FC<ClientSideComponentProps> = ({ children }) => (
  // Wrapper function to match MouseEventHandler type

  <AppShell header={{ height: 60 }} padding="md">
    <AppShell.Header>
      <Header />
    </AppShell.Header>
    <AppShell.Main>{children}</AppShell.Main>
  </AppShell>
);
export default ClientSideComponent;
