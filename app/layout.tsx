import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import Header from '../components/Layout/Header';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorSchemeScript forceColorScheme="light" />
      <MantineProvider theme={theme} forceColorScheme="light">
        <Header />
        {children}
      </MantineProvider>
    </>
  );
}
