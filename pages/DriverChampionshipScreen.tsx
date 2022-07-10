import React from 'react';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';

import DriverStandings from '../components/DriverStandings';
import Error from '../components/Error';
import LoadingCircle from '../components/LoadingCircle';
import { fetchDriverStandings } from '../lib/apiCalls';

export default function DriverChampionshipScreen() {
  const driverStandingsQuery = useQuery('driverStandings', fetchDriverStandings);

  if (driverStandingsQuery.isLoading) return <LoadingCircle />;
  if (driverStandingsQuery.isError) return <Error />;

  return (
    <ScrollView>
      <DriverStandings standings={driverStandingsQuery.data!} />
    </ScrollView>
  );
}
