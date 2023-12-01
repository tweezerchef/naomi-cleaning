'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

const pinkColors: MantineColorsTuple = [
  '#ffe9f6',
  '#ffd1e6',
  '#faa1c9',
  '#f66eab',
  '#f24391',
  '#f02881',
  '#f01879',
  '#d60867',
  '#c0005c',
  '#a9004f',
];
const blueColors: MantineColorsTuple = [
  '#ebefff',
  '#d5dafc',
  '#a9b1f1',
  '#7b87e9',
  '#5362e1',
  '#3a4bdd',
  '#2d3fdc',
  '#1f32c4',
  '#182cb0',
  '#0b259c',
];
export const theme = createTheme({
  colors: {
    pinkColors,
    blueColors,
  },
  /* Put your mantine theme override here */
});
