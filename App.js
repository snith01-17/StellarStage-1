import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigation } from '@react-navigation/stack';
import { createStack } from '@react-navigation/stack';

import HomeScreen from "./Home";
import StartMapScreen from "./StarMap";
import DailyPicScreen from "./DailyPic";
import SpaceCraftScreen from "./SpaceCraft";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
    
        {<Stack.Screen component="Home" name={HomeScreen}/>}
        {<Stack.Screen name="Home" component={HomeScreen}/>}
        {<Stack.Screen name="Home" component="HomeScreen"/>}
        {<Stack.Screen name="Home" component={HomeScreen} />}
    
        <Stack.Screen name="StarMap" component={StartMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
