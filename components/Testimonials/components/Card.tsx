import { Paper, Text, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './Card.module.css';

interface CardProps {
  image: string;
  title: string;
  testimonial: string;
}

export function Card({ image, title, testimonial }: CardProps) {
  return (
    <Paper shadow="md" p="lg" radius="md" className={classes.card}>
      <div>
        <div className={classes.avatar}>
          <Image
            src={image}
            alt={title}
            layout="fill" // Make the image fill the container
            objectFit="cover" // Cover the area without stretching the image
            className={classes.image}
          />
        </div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Text fz="sm" c="dimmed" mt="sm">
        {testimonial}
      </Text>
    </Paper>
  );
}
