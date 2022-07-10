import React from 'react';
import { Card, DataTable } from 'react-native-paper';

import { DriverStandings as driverStandingType } from '../types';

export default function DriverStandings({ standings }: {standings: driverStandingType}) {
  return (
    <Card>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{ flex: 2 }}>Driver</DataTable.Title>
          <DataTable.Title style={{ flex: 1 }}>Team</DataTable.Title>
          <DataTable.Title numeric>Wins</DataTable.Title>
          <DataTable.Title numeric>Points</DataTable.Title>
        </DataTable.Header>

        {standings.dataTable.map((result) => (
          <DataTable.Row key={result.Driver.code}>
            <DataTable.Cell style={{ flex: 2 }}>{`${result.Driver.givenName} ${result.Driver.familyName}`}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 1 }}>{result.Constructors[0].name}</DataTable.Cell>
            <DataTable.Cell numeric>{result.wins}</DataTable.Cell>
            <DataTable.Cell numeric>{result.points}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
}
