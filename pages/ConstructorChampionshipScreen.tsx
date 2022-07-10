import React from 'react';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';

import ConstructorStandings from '../components/ConstructorStandings';
import Error from '../components/Error';
import LoadingCircle from '../components/LoadingCircle';
import { fetchConstructorStandings } from '../lib/apiCalls';

export default function ConstructorChampionshipScreen() {
  const ConstructorStandingsQuery = useQuery('ConstructorStandings', fetchConstructorStandings);

  if (ConstructorStandingsQuery.isLoading) return <LoadingCircle />;
  if (ConstructorStandingsQuery.isError) return <Error />;

  return (
    <ScrollView>
      <ConstructorStandings standings={ConstructorStandingsQuery.data!} />
    </ScrollView>
  );
}
