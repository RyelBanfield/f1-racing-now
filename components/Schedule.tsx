import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, DataTable, Text } from 'react-native-paper';
import moment from 'moment';

import { Schedule as scheduleType } from '../types';

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

export default function Schedule({ currentSeason }: { currentSeason: scheduleType }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.cardTitle}>
          {currentSeason.year}
          {' '}
          Season
        </Text>
      </Card.Content>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Race Name</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
        </DataTable.Header>

        {currentSeason.races.map((race) => (
          <DataTable.Row key={race.round}>
            <DataTable.Cell>{race.raceName}</DataTable.Cell>
            <DataTable.Cell numeric>{moment(race.date).format('DD-MM')}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
}
