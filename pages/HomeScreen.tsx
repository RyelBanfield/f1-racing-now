import React from 'react';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';

import Countdown from '../components/Countdown';
import Error from '../components/Error';
import LastRace from '../components/LastRace';
import LoadingCircle from '../components/LoadingCircle';
import { fetchLastRaceResults, fetchNextRace } from '../lib/apiCalls';

export default function HomeScreen() {
  const nextRaceQuery = useQuery('nextRace', fetchNextRace);
  const lastRaceResultsQuery = useQuery('lastRaceResults', fetchLastRaceResults);

  if (nextRaceQuery.isLoading || lastRaceResultsQuery.isLoading) return <LoadingCircle />;
  if (nextRaceQuery.isError || lastRaceResultsQuery.isLoading) return <Error />;

  return (
    <ScrollView>
      <Countdown nextRace={nextRaceQuery.data!} />
      <LastRace lastRaceResults={lastRaceResultsQuery.data!} />
    </ScrollView>
  );
}
