import React from 'react';
import { useQuery } from 'react-query';

import Container from '../components/Container';
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
    <Container>
      <Countdown schedule={currentSeasonQuery.data!} />
    </Container>
  );
}

export default HomeScreen;
