import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';

import Container from './Container';

export default function LoadingCircle() {
  return (
    <Container>
      <ActivityIndicator animating color="#FF0000" size="large" />
    </Container>
  );
}
