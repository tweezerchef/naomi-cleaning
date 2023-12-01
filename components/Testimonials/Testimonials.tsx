'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Center, Group } from '@mantine/core';
import classes from './Testimonials.module.css';

export function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Center>
      <Carousel
        withIndicators
        height={200}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize="100%"
        classNames={{ container: classes.container }}
      >
        <Group justify="center">
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
        </Group>
      </Carousel>
    </Center>
  );
}
