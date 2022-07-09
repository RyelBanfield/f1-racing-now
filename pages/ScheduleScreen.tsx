import React from 'react';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';

import Error from '../components/Error';
import LoadingCircle from '../components/LoadingCircle';
import Schedule from '../components/Schedule';
import { fetchCurrentSeason } from '../lib/apiCalls';

export default function ScheduleScreen() {
  const currentSeasonQuery = useQuery('currentSeason', fetchCurrentSeason);

  if (currentSeasonQuery.isLoading) return <LoadingCircle />;
  if (currentSeasonQuery.isError) return <Error />;

  return (
    <ScrollView>
      <Schedule currentSeason={currentSeasonQuery.data!} />
    </ScrollView>
  );
}
