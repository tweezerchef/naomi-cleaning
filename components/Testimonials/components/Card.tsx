import { Grid, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Card.module.css';

interface CardProps {
  image: string;
  title: string;
  testimonial: string;
}

export function Card({ image, title, testimonial }: CardProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const cardClass = mobile ? classes.cardMobile : classes.cardDesktop;
  const bgColor = theme.colors.blueColors[2];

  return (
    <Paper
      shadow="md"
      p="lg"
      radius="md"
      className={cardClass}
      style={{ backgroundColor: bgColor }}
    >
      <Grid>
        <Grid.Col span={2}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              marginLeft: 15,
            }}
          >
            <Image src={image} alt={title} fill sizes="60px, 60px" className={classes.image} />
          </div>
        </Grid.Col>
        <Grid.Col span={9}>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
          <Text fz="sm" mt="sm">
            {testimonial}
          </Text>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
