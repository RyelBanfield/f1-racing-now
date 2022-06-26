import React from 'react';
import { Text } from 'react-native';
import { useQuery } from 'react-query';

import Container from '../components/Container';
import { fetchCurrentSeason } from '../lib/apiCalls';

function ScheduleScreen() {
  const currentSeasonQuery = useQuery('currentSeason', fetchCurrentSeason);

  if (currentSeasonQuery.isLoading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  if (currentSeasonQuery.isError) {
    return (
      <Container>
        <Text>There was an error.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Text>Full Schedule</Text>

      <Text>
        There are
        {' '}
        {currentSeasonQuery.data!.totalRaces}
        {' '}
        races this season.
      </Text>

    </Container>
  );
}

export default ScheduleScreen;
