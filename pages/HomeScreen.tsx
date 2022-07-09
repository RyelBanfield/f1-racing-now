import React from 'react';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';

import Countdown from '../components/Countdown';
import Error from '../components/Error';
import LastRace from '../components/LastRace';
import LoadingCircle from '../components/LoadingCircle';
import { fetchCurrentSeason, fetchLastRaceResults } from '../lib/apiCalls';

export default function HomeScreen() {
  const currentSeasonQuery = useQuery('currentSeason', fetchCurrentSeason);
  const lastRaceResultsQuery = useQuery('lastRaceResults', fetchLastRaceResults);

  if (currentSeasonQuery.isLoading || lastRaceResultsQuery.isLoading) return <LoadingCircle />;
  if (currentSeasonQuery.isError || lastRaceResultsQuery.isLoading) return <Error />;

  return (
    <ScrollView>
      <Countdown currentSeason={currentSeasonQuery.data!} />
      <LastRace lastRaceResults={lastRaceResultsQuery.data!} />
    </ScrollView>
  );
}
