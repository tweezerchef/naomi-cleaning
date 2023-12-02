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
        <div
          style={{
            width: 60, // Set the width of the avatar
            height: 60, // Set the height of the avatar
            borderRadius: '50%', // Make it circular
            overflow: 'hidden', // Ensure the image doesn't overflow the circular shape
            position: 'relative', // Relative position for the next/image component
          }}
        >
          <Image src={image} alt={title} fill sizes="60px, 60px" className={classes.image} />
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
