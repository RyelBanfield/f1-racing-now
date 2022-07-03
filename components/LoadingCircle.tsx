import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';

import Container from './Container';

function LoadingCircle() {
  return (
    <Container>
      <ActivityIndicator animating color="#FF0000" size="large" />
    </Container>
  );
}

export default LoadingCircle;
