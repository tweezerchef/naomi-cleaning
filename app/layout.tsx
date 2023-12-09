import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import Header from '../components/Layout/Header';
import { theme } from '../theme';

export const metadata = {
  title: 'Naomi Cleans',
  description: 'New Orleans Premier Cleaning Service',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Container
            size="lg"
            style={{
              maxWidth: '1200px',
              '@media (max-width: 768px)': {
                maxWidth: '100%',
              },
            }}
          >
            <Header />
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
