'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Container, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { testimonialData } from './testimonialData';
import { Card } from './components/Card';

const slides = testimonialData.map((item) => (
  <Carousel.Slide key={item.title}>
    <Card {...item} />
  </Carousel.Slide>
));

export function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Carousel
      withIndicators
      withControls
      height={mobile ? 300 : 400}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slideSize={mobile ? '100%' : '50%'}
      // slideGap={{ base: 'xl', sm: 2 }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
