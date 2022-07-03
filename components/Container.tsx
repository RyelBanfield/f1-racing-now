import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Container({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}

export default Container;
