'use client';

import { useState, Suspense, lazy } from 'react';
import { Container, Group, Burger, Button, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import classes from './Header.module.css';

const BookNowModal = lazy(() => import('../components/Layout/Modal/BookNowModal'));
const CallModal = lazy(() => import('../components/Layout/Modal/CallModal'));
const ContactModal = lazy(() => import('../components/Layout/Modal/ContactModal'));
const CustomerLoginModal = lazy(() => import('../components/Layout/Modal/CustomerLoginModal'));

const buttons = [
  { modal: 'BookNow', label: 'BookNow' },
  { modal: 'Call', label: 'Call' },
  { modal: 'Contact', label: 'Contact' },
  { modal: 'CustomerLogIn', label: 'LogIn' },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setActive(modalName);
  };

  const closeModal = () => {
    setActive(null);
  };

  const items = buttons.map((button) => (
    <Button
      color="myColor.4"
      radius="xl"
      key={button.label}
      onClick={() => openModal(button.modal)}
    >
      {button.label}
    </Button>
  ));

  const renderModal = () => {
    switch (active) {
      case 'BookNow':
        return <BookNowModal onClose={closeModal} />;
      case 'Call':
        return <CallModal onClose={closeModal} />;
      case 'Contact':
        return <ContactModal onClose={closeModal} />;
      case 'CustomerLogIn':
        return <CustomerLoginModal onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src="/23-36.jpg" alt="Logo" width={60} height={60} />
        <Text
          size="xl"
          fw={700}
          variant="gradient"
          gradient={{ from: 'rgba(214,8,103,1)', to: '#f66eab', deg: 83 }}
        >
          Naomi Cleans!
        </Text>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
      <Suspense fallback={<div />}>{renderModal()}</Suspense>
    </header>
  );
}
