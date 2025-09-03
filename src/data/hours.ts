export interface OpeningHours {
  day: string;
  lunch?: {
    start: string;
    end: string;
  };
  dinner?: {
    start: string;
    end: string;
  };
  closed: boolean;
}

export const hoursData: OpeningHours[] = [
  {
    day: 'Lundi',
    closed: true,
  },
  {
    day: 'Mardi',
    lunch: { start: '12:00', end: '14:00' },
    dinner: { start: '19:00', end: '23:00' },
    closed: false,
  },
  {
    day: 'Mercredi',
    lunch: { start: '12:00', end: '14:00' },
    dinner: { start: '19:00', end: '23:00' },
    closed: false,
  },
  {
    day: 'Jeudi',
    lunch: { start: '12:00', end: '14:00' },
    dinner: { start: '19:00', end: '23:00' },
    closed: false,
  },
  {
    day: 'Vendredi',
    lunch: { start: '12:00', end: '14:00' },
    dinner: { start: '19:00', end: '23:00' },
    closed: false,
  },
  {
    day: 'Samedi',
    lunch: { start: '12:00', end: '14:00' },
    dinner: { start: '19:00', end: '23:00' },
    closed: false,
  },
  {
    day: 'Dimanche',
    closed: true,
  },
];

export const formatOpeningHours = (hours: OpeningHours): string => {
  if (hours.closed) return 'Fermé';
  
  const periods = [];
  if (hours.lunch) {
    periods.push(`${hours.lunch.start}–${hours.lunch.end}`);
  }
  if (hours.dinner) {
    periods.push(`${hours.dinner.start}–${hours.dinner.end}`);
  }
  
  return periods.join(' • ');
};
