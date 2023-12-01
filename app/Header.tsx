'use client';

import { useState, Suspense, lazy } from 'react';
import { Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import classes from './Header.module.css';

const BookNowModal = lazy(() => import('../components/Layout/Modal/BookNowModal'));
const CallModal = lazy(() => import('../components/Layout/Modal/CallModal'));
const ContactModal = lazy(() => import('../components/Layout/Modal/ContactModal'));
const CustomerLoginModal = lazy(() => import('../components/Layout/Modal/CustomerLoginModal'));

const buttons = [
  { modal: 'BookNow', label: 'BookNow' },
  { model: 'Call', label: 'Call' },
  { modal: 'Contact', label: 'Contact' },
  { modal: 'CustomerLogIn', label: 'LogIn' },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active, setActive] = useState<string>();

  const items = buttons.map((button) => (
    <Button
      key={button.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(button.modal);
      }}
    >
      {button.label}
    </Button>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src="/23-36.jpg" alt="Logo" width={60} height={60} />

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
