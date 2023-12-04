'use client';

import { Carousel } from '@mantine/carousel';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { testimonialData } from './testimonialData';
import { Card } from './components/Card';

export function Testimonials() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = testimonialData.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withControls
      height={mobile ? 260 : 210}
      // plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
      slideSize={mobile ? '100%' : '70%'}
      slideGap={mobile ? 'xs' : 'sm'}
      align="start"
      loop
    >
      {slides}
    </Carousel>
  );
}
