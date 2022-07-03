import React, { useState } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import { Schedule } from '../types';

export default function Countdown({ schedule }: { schedule: Schedule }) {
  const [timeUntilRace, setTimeUntilRace] = useState < string | null >(null);

  const nextRace = schedule.races.find((race) => moment(`${race.date} ${race.time}`).isSameOrAfter(moment()));

  const now = moment();
  const raceDateTime = moment(`${nextRace!.date} ${nextRace!.time}`);

  const days = raceDateTime.diff(now, 'days');
  const hours = raceDateTime.subtract(days, 'days').diff(now, 'hours');
  const minutes = raceDateTime.subtract(hours, 'hours').diff(now, 'minutes');
  const seconds = raceDateTime.subtract(minutes, 'minutes').diff(now, 'seconds');

  setTimeout(() => {
    setTimeUntilRace(`${days}D ${hours}H ${minutes}M ${seconds}S`);
  }, 1000);

  return (
    <>
      <Text>
        {nextRace?.raceName}
      </Text>
      <Text>
        {timeUntilRace}
      </Text>
    </>
  );
}
