import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TimelineSpent from './screens/TimelineSpent';
import Addspent from './screens/AddSpent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="landing" component={TimelineSpent} />
        <Stack.Screen name="addSpent" component={Addspent} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


