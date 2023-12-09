import { Button } from '@mantine/core';

const appointmentTimes = [
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00pm',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm',
  '8:00pm',
];

const TimeButton = (text: string) => (
  <Button variant="filled" size="md" radius="md">
    {text}
  </Button>
);

const TimeButtons = () => <>{appointmentTimes.map((time) => TimeButton(time))}</>;

export function Times() {
  return <TimeButtons />;
}
