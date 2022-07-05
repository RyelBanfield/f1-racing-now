import React, { useEffect, useState } from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';
import { useQuery } from 'react-query';
import moment from 'moment';

import { fetchPhotoOfLocation } from '../lib/apiCalls';
import { Schedule } from '../types';

import Error from './Error';
import LoadingCircle from './LoadingCircle';

export default function Countdown({ schedule }: { schedule: Schedule }) {
  const [timeUntilRace, setTimeUntilRace] = useState < string | null >(null);

  const nextRace = schedule.races.find((race) => moment(`${race.date} ${race.time}`).isSameOrAfter(moment()));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const raceDateTime = moment(`${nextRace!.date} ${nextRace!.time}`);

      const days = raceDateTime.diff(now, 'days');
      const hours = raceDateTime.subtract(days, 'days').diff(now, 'hours');
      const minutes = raceDateTime.subtract(hours, 'hours').diff(now, 'minutes');
      const seconds = raceDateTime.subtract(minutes, 'minutes').diff(now, 'seconds');

      setTimeUntilRace(`${days}D ${hours}H ${minutes}M ${seconds}S`);
    }, 1000);

    return () => clearInterval(interval);
  }, [nextRace]);

  const raceLocation = nextRace!.Circuit.Location.locality;
  const photoOfLocationQuery = useQuery(['photoOfLocation', raceLocation], () => fetchPhotoOfLocation(raceLocation));

  if (photoOfLocationQuery.isLoading) return <LoadingCircle />;
  if (photoOfLocationQuery.isError) return <Error />;

  return (
    <Card>
      <Card.Content>
        <Title>Next Race</Title>
        <Paragraph>{nextRace!.raceName}</Paragraph>
        <Paragraph>{timeUntilRace}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: photoOfLocationQuery.data?.url }} />
    </Card>
  );
}
