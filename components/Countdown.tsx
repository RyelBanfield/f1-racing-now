import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import moment from 'moment';

import { Schedule } from '../types';

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
  countdown: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default function Countdown({ currentSeason }: { currentSeason: Schedule }) {
  const [timeUntilRace, setTimeUntilRace] = useState<string | null>(null);
  const [timeUntilQualifying, setTimeUntilQualifying] = useState<string | null>(null);
  const [hasQualifyingFinished, setHasQualifyingFinished] = useState<boolean>(false);

  const nextRace = currentSeason.races.find((race) => moment(`${race.date} ${race.time}`).isSameOrAfter(moment()));
  const qualifyingData = nextRace?.Qualifying;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const qualifyingDateTime = moment(`${qualifyingData!.date} ${qualifyingData!.time}`);

      if (qualifyingDateTime.isSameOrAfter(now)) {
        const days = qualifyingDateTime.diff(now, 'days');
        const hours = qualifyingDateTime.subtract(days, 'days').diff(now, 'hours');
        const minutes = qualifyingDateTime.subtract(hours, 'hours').diff(now, 'minutes');
        const seconds = qualifyingDateTime.subtract(minutes, 'minutes').diff(now, 'seconds');

        setTimeUntilQualifying(`${days}D ${hours}H ${minutes}M ${seconds}S`);
      } else {
        setHasQualifyingFinished(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [qualifyingData]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const raceDateTime = moment(`${nextRace!.date} ${nextRace!.time}`);

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
        <Text style={styles.cardTitle}>{nextRace?.raceName}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {!hasQualifyingFinished && (
            (timeUntilQualifying && (
              <View>
                <Text style={styles.cardSubtitle}>Quali</Text>
                <Text style={styles.countdown}>{timeUntilQualifying}</Text>
              </View>
            ))
          )}
          {timeUntilRace && (
            <View>
              <Text style={styles.cardSubtitle}>Race</Text>
              <Text style={styles.countdown}>{timeUntilRace}</Text>
            </View>
          )}
        </View>
      </Card.Content>
    </Card>
  );
}
