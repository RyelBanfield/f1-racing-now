import React from 'react';
import { ColorSchemeName } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type Props = {
  name: keyof typeof Entypo.glyphMap;
  focused: boolean;
  colorScheme: ColorSchemeName;
}

function TabBarIcon({ name, focused, colorScheme }: Props) {
  const unfocusedColor = colorScheme === 'light' ? '#444' : '#FAFAFA';

  return (
    <Entypo
      name={name}
      size={25}
      color={focused ? '#C70039' : unfocusedColor}
      style={{ marginBottom: -10 }}
    />
  );
}

export default TabBarIcon;
