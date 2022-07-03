import React from 'react';
import { useColorScheme } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type Props = {
  name: keyof typeof Entypo.glyphMap;
  focused: boolean;
}

function TabBarIcon({ name, focused }: Props) {
  const colorScheme = useColorScheme();
  const unfocusedColor = colorScheme === 'light' ? '#444' : '#FAFAFA';

  return (
    <Entypo
      name={name}
      size={25}
      // eslint-disable-next-line no-nested-ternary
      color={focused ? '#C70039' : unfocusedColor}
      style={{ marginBottom: -10 }}
    />
  );
}

export default TabBarIcon;
