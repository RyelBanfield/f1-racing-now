import React, { useCallback, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, NavigationContainer } from '@react-navigation/native';
import merge from 'deepmerge';
import * as Haptics from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';

import TabBarIcon from './components/TabBarIcon';
import ThemeSwitch from './components/ThemeSwitch';
import PreferencesContext from './context/Preferences';
import HomeScreen from './pages/HomeScreen';
import ScheduleScreen from './pages/ScheduleScreen';

const queryClient = new QueryClient();
const Tab = createBottomTabNavigator();

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function App() {
  const [isThemeDark, setIsThemeDark] = useState(useColorScheme() === 'dark');
  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  const toggleTheme = useCallback(() => setIsThemeDark(!isThemeDark), [isThemeDark]);

  const preferences = useMemo(
    () => ({ toggleTheme, isThemeDark }),
    [toggleTheme, isThemeDark],
  );

  const tabPress = () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); };

  return (
    <QueryClientProvider client={queryClient}>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <StatusBar style={isThemeDark ? 'light' : 'dark'} />
          <NavigationContainer theme={theme}>
            <Tab.Navigator
              initialRouteName="Home"
              backBehavior="initialRoute"
              screenOptions={{
                tabBarStyle: { height: 70 },
                tabBarShowLabel: false,
              }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarIcon: ({ focused }) => (<TabBarIcon name="home" focused={focused} />),
                  headerRight: () => (<ThemeSwitch />),
                }}
                listeners={() => ({ tabPress })}
              />
              <Tab.Screen
                name="Schedule"
                component={ScheduleScreen}
                options={{
                  tabBarIcon: ({ focused }) => (<TabBarIcon name="calendar" focused={focused} />),
                  headerRight: () => (<ThemeSwitch />),
                }}
                listeners={() => ({ tabPress })}
              />
              {/* <Tab.Screen
                name="Drivers Championship"
                component={ScheduleScreen}
                options={{
                  tabBarIcon: ({ focused }) => (<TabBarIcon name="user" focused={focused} />),
                  headerRight: () => (<ThemeSwitch />),
                }}
                listeners={() => ({ tabPress })}
              />
              <Tab.Screen
                name="Constructors Championship"
                component={ScheduleScreen}
                options={{
                  tabBarIcon: ({ focused }) => (<TabBarIcon name="users" focused={focused} />),
                  headerRight: () => (<ThemeSwitch />),
                }}
                listeners={() => ({ tabPress })}
              /> */}
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </QueryClientProvider>
  );
}
