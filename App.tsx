import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

import TabBarIcon from './components/TabIcon';
import HomeScreen from './pages/HomeScreen';
import ScheduleScreen from './pages/ScheduleScreen';

const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          backBehavior="initialRoute"
          sceneContainerStyle={{ backgroundColor: '#000' }}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            tabBarStyle: {
              backgroundColor: '#000',
              height: 70,
            },
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="F1 Racing Now"
            component={HomeScreen}
            options={{ tabBarIcon: ({ focused }) => (<TabBarIcon name="home" focused={focused} />) }}
            listeners={() => ({
              tabPress: () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              },
            })}
          />
          <Tab.Screen
            name="Schedule"
            component={ScheduleScreen}
            options={{ tabBarIcon: ({ focused }) => (<TabBarIcon name="calendar" focused={focused} />) }}
            listeners={() => ({
              tabPress: () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              },
            })}
          />
          <Tab.Screen
            name="Drivers Championship"
            component={ScheduleScreen}
            options={{ tabBarIcon: ({ focused }) => (<TabBarIcon name="user" focused={focused} />) }}
            listeners={() => ({
              tabPress: () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              },
            })}
          />
          <Tab.Screen
            name="Constructors Championship"
            component={ScheduleScreen}
            options={{ tabBarIcon: ({ focused }) => (<TabBarIcon name="users" focused={focused} />) }}
            listeners={() => ({
              tabPress: () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              },
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
