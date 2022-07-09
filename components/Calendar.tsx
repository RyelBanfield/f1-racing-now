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
    minHeight: 240,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default function Calendar({ schedule }: { schedule: scheduleType }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.cardTitle}>
          {schedule.year}
          {' '}
          Season
        </Text>
      </Card.Content>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Race Name</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
        </DataTable.Header>

        {schedule.races.map((race) => (
          <DataTable.Row key={race.round}>
            <DataTable.Cell>{race.raceName}</DataTable.Cell>
            <DataTable.Cell numeric>{moment(race.date).format('DD-MM')}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
}
