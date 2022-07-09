import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, DataTable, Text } from 'react-native-paper';

import { LastRace } from '../types';

const styles = StyleSheet.create({
  card: {
    margin: 15,
    borderRadius: 10,
    elevation: 5,
    minHeight: 160,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default function Countdown({ lastRaceResults }: { lastRaceResults: LastRace }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.cardTitle}>{lastRaceResults.raceName}</Text>
        <Text style={styles.cardSubtitle}>Results</Text>
      </Card.Content>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{ flex: 2 }}>Driver</DataTable.Title>
          <DataTable.Title>Team</DataTable.Title>
          <DataTable.Title numeric>Points</DataTable.Title>
        </DataTable.Header>

        {lastRaceResults.results.map((result) => (
          <DataTable.Row key={result.Driver.code}>
            <DataTable.Cell style={{ flex: 2 }}>{`${result.Driver.givenName} ${result.Driver.familyName} ${result.FastestLap?.rank === '1' ? '🥇' : ''}`}</DataTable.Cell>
            <DataTable.Cell>{result.Constructor.name}</DataTable.Cell>
            <DataTable.Cell numeric>{result.points}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
}
