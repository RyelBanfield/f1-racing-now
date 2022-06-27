import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';

import Container from '../components/Container';
import { fetchCurrentSeason, fetchLastRaceResults } from '../lib/apiCalls';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});

function HomeScreen() {
  const currentSeasonQuery = useQuery('currentSeason', fetchCurrentSeason);
  const lastRaceResultsQuery = useQuery('lastRaceResults', fetchLastRaceResults);

  if (currentSeasonQuery.isLoading || lastRaceResultsQuery.isLoading) {
    return (
      <Container>
        <Text style={styles.text}>Loading...</Text>
      </Container>
    );
  }

  if (currentSeasonQuery.isError || lastRaceResultsQuery.isLoading) {
    return (
      <Container>
        <Text style={styles.text}>There was an error.</Text>
      </Container>
    );
  }

  const nextRace = currentSeasonQuery.data!.races.find(
    (race) => new Date(race!.date) > new Date(),
  );

  return (
    <Container>
      <View style={{ flex: 3 }}>
        <Text style={styles.text}>
          F1
          {' '}
          {currentSeasonQuery.data!.year}
        </Text>

        <Text style={styles.text}>
          Next Race:
          {' '}
          {nextRace?.raceName}
        </Text>

        <Text style={styles.text}>
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
