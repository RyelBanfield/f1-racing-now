import React, { useState } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';

import TabBarIcon from './components/TabIcon';
import ThemeSwitch from './components/ThemeSwitch';
import HomeScreen from './pages/HomeScreen';
import ScheduleScreen from './pages/ScheduleScreen';

const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

function App() {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(useColorScheme());
  const themeBackgroundColor = colorScheme === 'light' ? '#FAFAFA' : '#000';
  const themeTextColor = colorScheme === 'light' ? '#444' : '#FAFAFA';

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            backBehavior="initialRoute"
            sceneContainerStyle={{ backgroundColor: themeBackgroundColor }}
            screenOptions={{
              headerStyle: {
                backgroundColor: themeBackgroundColor,
              },
              headerTintColor: themeTextColor,
              tabBarStyle: {
                backgroundColor: themeBackgroundColor,
                height: 70,
              },
              tabBarShowLabel: false,
            }}
          >
            <Tab.Screen
              name="F1 Racing Now"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => (<TabBarIcon name="home" focused={focused} colorScheme={colorScheme} />),
                headerRight: () => (
                  <ThemeSwitch colorScheme={colorScheme} setColorScheme={setColorScheme} />
                ),
              }}
              listeners={() => ({
                tabPress: () => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                },
              })}
            />
            <Tab.Screen
              name="Schedule"
              component={ScheduleScreen}
              options={{ tabBarIcon: ({ focused }) => (<TabBarIcon name="calendar" focused={focused} colorScheme={colorScheme} />) }}
              listeners={() => ({
                tabPress: () => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                },
              })}
            />
            <Tab.Screen
              name="Drivers Championship"
              component={ScheduleScreen}
              options={{ tabBarIcon: ({ focused }) => (<TabBarIcon name="user" focused={focused} colorScheme={colorScheme} />) }}
              listeners={() => ({
                tabPress: () => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                },
              })}
            />
            <Tab.Screen
              name="Constructors Championship"
              component={ScheduleScreen}
              options={{ tabBarIcon: ({ focused }) => (<TabBarIcon name="users" focused={focused} colorScheme={colorScheme} />) }}
              listeners={() => ({
                tabPress: () => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                },
              })}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
