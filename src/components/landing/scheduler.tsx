'use client';
import * as React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM',
  '10:30 AM', '11:00 AM', '02:00 PM',
  '02:30 PM', '03:00 PM', '03:30 PM'
];

export function Scheduler() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    // This will only run on the client, after the initial render
    setDate(new Date());
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
      />
      <div className="grid w-full grid-cols-3 gap-2">
        {timeSlots.map(time => (
          <Button
            key={time}
            variant={selectedTime === time ? 'default' : 'outline'}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </Button>
        ))}
      </div>
      <Button asChild className="w-full" size="lg" disabled={!date || !selectedTime}>
        <a href="https://calendly.com/n8nenthusiaist/30min" target="_blank" rel="noopener noreferrer">
          Confirm & Schedule
        </a>
      </Button>
    </div>
  );
}
