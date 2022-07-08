import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import PreferencesContext from '../context/Preferences';

export default function ThemeSwitch() {
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

  return (
    <View style={{ paddingRight: 20 }}>
      <TouchableOpacity onPress={toggleTheme}>
        {isThemeDark && <Entypo name="moon" size={24} color="#C70039" />}
        {!isThemeDark && <Entypo name="light-down" size={24} color="#C70039" />}
      </TouchableOpacity>
    </View>
  );
}
