import React from 'react';
import { Button, Text } from 'react-native';
import { useQuery } from 'react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Container from '../components/Container';
import { fetchCurrentSeason, fetchLastRaceResults } from '../lib/apiCalls';
import { StackParamList } from '../types';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
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
      <Text>Welcome to F1RacingNow</Text>

      <Text>
        Current Season:
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

      <Button title="View Schedule" onPress={() => navigation.navigate('Schedule')} />
    </Container>
  );
}

export default HomeScreen;
