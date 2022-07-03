import React, { Dispatch, SetStateAction, useState } from 'react';
import { ColorSchemeName } from 'react-native';
import { Switch } from 'react-native-paper';

type Props = {
  colorScheme: ColorSchemeName,
  setColorScheme: Dispatch<SetStateAction<ColorSchemeName>>,
}

function ThemeSwitch({ colorScheme, setColorScheme }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(colorScheme !== 'light');

  const onToggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
    setColorScheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <Switch
      color="#FF0000"
      style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
      value={isDarkMode}
      onValueChange={onToggleSwitch}
    />
  );
}

export default ThemeSwitch;
