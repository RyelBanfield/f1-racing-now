import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Container({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

export default Container;
