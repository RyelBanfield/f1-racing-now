import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import { useQuery } from 'react-query';

import Error from '../components/Error';
import Header from '../components/Header';
import LastRace from '../components/LastRace';
import LoadingCircle from '../components/LoadingCircle';
import { fetchLastRace, fetchNextRace } from '../lib/apiCalls';

export default function HomeScreen() {
  const nextRaceQuery = useQuery('nextRace', fetchNextRace);
  const lastRaceQuery = useQuery('lastRace', fetchLastRace);

  if (nextRaceQuery.isLoading || lastRaceQuery.isLoading) return <LoadingCircle />;
  if (nextRaceQuery.isError || lastRaceQuery.isLoading) return <Error />;

  return (
    <ScrollView>
      <Card>
        <Header nextRace={nextRaceQuery.data!} />
        <Divider style={{ marginBottom: 20 }} />
        <LastRace lastRace={lastRaceQuery.data!} />
      </Card>
    </ScrollView>
  );
}
