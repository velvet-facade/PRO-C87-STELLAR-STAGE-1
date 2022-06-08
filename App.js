import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importing local files
import HomeScreen from './screens/Home';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/SpaceCraft';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftsScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
