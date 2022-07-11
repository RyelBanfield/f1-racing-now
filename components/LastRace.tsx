import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, DataTable, Text } from 'react-native-paper';

import { LastRace } from '../types';

const styles = StyleSheet.create({
  card: {
    margin: 15,
    borderRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateTime: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default function Countdown({ lastRace }: { lastRace: LastRace }) {
  return (
    <>
      <Card.Content>
        <Text style={styles.cardTitle}>
          Round
          {' '}
          {lastRace.round}
        </Text>
        <Text style={styles.cardTitle}>{lastRace.raceData.raceName}</Text>
      </Card.Content>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{ flex: 2 }}>Driver</DataTable.Title>
          <DataTable.Title>Team</DataTable.Title>
          <DataTable.Title numeric>Points</DataTable.Title>
        </DataTable.Header>

        {lastRace.raceData.Results.map((result) => (
          <DataTable.Row key={result.Driver.code}>
            <DataTable.Cell style={{ flex: 2 }}>{`${result.Driver.givenName} ${result.Driver.familyName} ${result.FastestLap?.rank === '1' ? '⚡️' : ''}`}</DataTable.Cell>
            <DataTable.Cell>{result.Constructor.name}</DataTable.Cell>
            <DataTable.Cell numeric>{result.points}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </>
  );
}
