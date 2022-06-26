import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from 'react-query';

import Container from '../components/Container';
import { fetchCurrentSeason, fetchLastRaceResults } from '../lib/apiCalls';

function HomeScreen() {
  const currentSeasonQuery = useQuery('currentSeason', fetchCurrentSeason);
  const lastRaceResultsQuery = useQuery('lastRaceResults', fetchLastRaceResults);

  if (currentSeasonQuery.isLoading || lastRaceResultsQuery.isLoading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  if (currentSeasonQuery.isError || lastRaceResultsQuery.isLoading) {
    return (
      <Container>
        <Text>There was an error.</Text>
      </Container>
    );
  }

  const nextRace = currentSeasonQuery.data!.races.find(
    (race) => new Date(race!.date) > new Date(),
  );

  return (
    <Container>
      <View style={{ flex: 0 }}>
        <Text>F1RacingNow</Text>
      </View>

      <View style={{ flex: 3 }}>
        <Text>
          F1
          {' '}
          {currentSeasonQuery.data!.year}
        </Text>

        <Text>
          Next Race:
          {' '}
          {nextRace?.raceName}
        </Text>

        <Text>
          Last Race Winner:
          {' '}
          {lastRaceResultsQuery.data!.results[0].Driver.givenName}
          {' '}
          {lastRaceResultsQuery.data!.results[0].Driver.familyName}
        </Text>
      </View>
    </Container>
  );
}

export default HomeScreen;
