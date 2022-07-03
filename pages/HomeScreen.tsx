import React from 'react';
import {
  StyleSheet, Text, useColorScheme, View,
} from 'react-native';
import { useQuery } from 'react-query';

import Container from '../components/Container';
import Error from '../components/Error';
import LoadingCircle from '../components/LoadingCircle';
import ThemeSwitch from '../components/ThemeSwitch';
import { fetchCurrentSeason, fetchLastRaceResults } from '../lib/apiCalls';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  lightThemeText: {
    color: '#444',
  },
  darkThemeText: {
    color: '#ccc',
  },
});

function HomeScreen() {
  const colorScheme = useColorScheme();
  const themeTextColor = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;

  const currentSeasonQuery = useQuery('currentSeason', fetchCurrentSeason);
  const lastRaceResultsQuery = useQuery('lastRaceResults', fetchLastRaceResults);

  if (currentSeasonQuery.isLoading || lastRaceResultsQuery.isLoading) return <LoadingCircle />;
  if (currentSeasonQuery.isError || lastRaceResultsQuery.isLoading) return <Error />;

  const nextRace = currentSeasonQuery.data!.races.find(
    (race) => new Date(race!.date) > new Date(),
  );

  return (
    <Container>
      <View style={{ flex: 3 }} />
    </Container>
  );
}

export default HomeScreen;
