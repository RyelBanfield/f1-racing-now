import React from 'react';
import { useTheme } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

type Props = {
  name: keyof typeof Entypo.glyphMap;
  focused: boolean;
}

export default function TabBarIcon({ name, focused }: Props) {
  const theme = useTheme();

  return (
    <Entypo
      name={name}
      size={25}
      color={focused ? '#C70039' : theme.colors.text}
      style={{ marginBottom: -10 }}
    />
  );
}
