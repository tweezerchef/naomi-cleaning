'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { testimonialData } from './testimonialData';
import { Card } from './components/Card';
import classes from './Testimonials.module.css';

export function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = testimonialData.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  const carouselClass = mobile ? classes.containerMobile : classes.containerDesktop;

  return (
    <Carousel
      withControls
      height={mobile ? 150 : 210}
      // plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
      slideSize={mobile ? '100%' : '70%'}
      slideGap={mobile ? 'xs' : 'sm'}
      align="start"
      loop
      classNames={{ container: carouselClass }}
    >
      {slides}
    </Carousel>
  );
}
