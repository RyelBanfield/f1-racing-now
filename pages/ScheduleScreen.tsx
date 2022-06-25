import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = NativeStackScreenProps<StackParamList, 'Schedule'>;

function ScheduleScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Full Schedule</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default ScheduleScreen;
