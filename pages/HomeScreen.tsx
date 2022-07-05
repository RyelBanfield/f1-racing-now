import React from 'react';
import { useQuery } from 'react-query';

import Countdown from '../components/Countdown';
import Error from '../components/Error';
import LoadingCircle from '../components/LoadingCircle';
import { fetchCurrentSeason, fetchLastRaceResults } from '../lib/apiCalls';

function HomeScreen() {
  const currentSeasonQuery = useQuery('currentSeason', fetchCurrentSeason);
  const lastRaceResultsQuery = useQuery('lastRaceResults', fetchLastRaceResults);

  if (currentSeasonQuery.isLoading || lastRaceResultsQuery.isLoading) return <LoadingCircle />;
  if (currentSeasonQuery.isError || lastRaceResultsQuery.isLoading) return <Error />;

  return (
    <Countdown schedule={currentSeasonQuery.data!} />
  );
}

export default HomeScreen;
