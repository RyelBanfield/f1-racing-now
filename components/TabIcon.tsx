import React from 'react';
import { Entypo } from '@expo/vector-icons';

type Props = {
  name: keyof typeof Entypo.glyphMap;
  focused: boolean;
}

function TabBarIcon({ name, focused }: Props) {
  return (
    <Entypo
      name={name}
      size={25}
      color={focused ? 'red' : '#fff'}
      style={{ marginBottom: -10 }}
    />
  );
}

export default TabBarIcon;
