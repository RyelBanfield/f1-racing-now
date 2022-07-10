import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import moment from 'moment';

import { NextRace } from '../types';

const styles = StyleSheet.create({
  card: {
    margin: 15,
    borderRadius: 10,
    elevation: 5,
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
  },
  countdown: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  dateTime: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default function Header({ nextRace }: { nextRace: NextRace }) {
  const [timeUntilRace, setTimeUntilRace] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const raceDateTime = moment(`${nextRace!.raceData.date} ${nextRace!.raceData.time}`);

      const days = raceDateTime.diff(now, 'days');
      const hours = raceDateTime.subtract(days, 'days').diff(now, 'hours');
      const minutes = raceDateTime.subtract(hours, 'hours').diff(now, 'minutes');
      const seconds = raceDateTime.subtract(minutes, 'minutes').diff(now, 'seconds');

      setTimeUntilRace(`${days}D ${hours}H ${minutes}M ${seconds}S`);
    }, 1000);

    return () => clearInterval(interval);
  }, [nextRace]);

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', minHeight: 60 }}>
          <Text style={styles.cardTitle}>
            Round
            {' '}
            {nextRace?.round}
          </Text>

          <Text style={styles.countdown}>{timeUntilRace}</Text>
        </View>

        <Text style={styles.cardTitle}>{nextRace?.raceData.raceName}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
          <View>
            <Text style={styles.cardSubtitle}>Quali</Text>
            <Text style={styles.dateTime}>{(moment(`${nextRace.raceData.Qualifying.date} ${nextRace.raceData.Qualifying.time}`).format('ddd Do h:mma'))}</Text>
          </View>

          <View>
            <Text style={styles.cardSubtitle}>Race</Text>
            <Text style={styles.dateTime}>{(moment(`${nextRace?.raceData.date} ${nextRace?.raceData.time}`).format('ddd Do h:mma'))}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
