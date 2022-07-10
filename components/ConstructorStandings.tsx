import React from 'react';
import { Card, DataTable } from 'react-native-paper';

import { ConstructorStandings as constructorStandingType } from '../types';

export default function ConstructorStandings({ standings }: {standings: constructorStandingType}) {
  return (
    <Card>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{ flex: 2 }}>Team</DataTable.Title>
          <DataTable.Title numeric>Wins</DataTable.Title>
          <DataTable.Title numeric>Points</DataTable.Title>
        </DataTable.Header>

        {standings.dataTable.map((result) => (
          <DataTable.Row key={result.Constructor.constructorId}>
            <DataTable.Cell style={{ flex: 2 }}>{`${result.Constructor.name}`}</DataTable.Cell>
            <DataTable.Cell numeric>{result.wins}</DataTable.Cell>
            <DataTable.Cell numeric>{result.points}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
}
