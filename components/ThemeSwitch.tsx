import React, { Dispatch, SetStateAction, useState } from 'react';
import { ColorSchemeName, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type Props = {
  colorScheme: ColorSchemeName,
  setColorScheme: Dispatch<SetStateAction<ColorSchemeName>>,
}

function ThemeSwitch({ colorScheme, setColorScheme }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(colorScheme !== 'light');

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
    setColorScheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <View style={{ paddingRight: 20 }}>
      <TouchableOpacity onPress={toggleSwitch}>
        {isDarkMode && <Entypo name="moon" size={24} color="#C70039" />}
        {!isDarkMode && <Entypo name="light-down" size={24} color="#C70039" />}
      </TouchableOpacity>
    </View>
  );
}

export default ThemeSwitch;
