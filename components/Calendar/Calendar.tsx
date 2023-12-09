import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { Grid } from '@mantine/core';
import { Times } from './Times';

export function Calendar() {
  const [value, setValue] = useState<Date | null>(null);

  // Get the current date
  const currentDate = new Date();

  // Add one day to the current date
  const tomorrow = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

  const twoMonthsLater = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 2,
    currentDate.getDate()
  );

  return (
    <Grid>
      <Grid.Col span={9}>
        <DatePicker
          value={value}
          onChange={setValue}
          defaultDate={currentDate}
          minDate={tomorrow}
          maxDate={twoMonthsLater}
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <Times />
      </Grid.Col>
    </Grid>
  );
}
