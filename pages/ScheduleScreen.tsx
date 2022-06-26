import React from 'react';
import { Button, Text } from 'react-native';
import { useQuery } from 'react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Container from '../components/Container';
import { fetchCurrentSeason } from '../lib/apiCalls';
import { StackParamList } from '../types';

type Props = NativeStackScreenProps<StackParamList, 'Schedule'>;

function ScheduleScreen({ navigation }: Props) {
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

      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </Container>
  );
}

export default ScheduleScreen;
