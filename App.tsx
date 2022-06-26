import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

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
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: '#000',
              height: 60,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarIcon: ({ focused }) => (<TabBarIcon name="home" focused={focused} />) }}
          />
          <Tab.Screen
            name="Schedule"
            component={ScheduleScreen}
            options={{ tabBarIcon: ({ focused }) => (<TabBarIcon name="calendar" focused={focused} />) }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
