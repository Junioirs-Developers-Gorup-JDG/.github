import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './components/MapScreen';
import ListScreen from './components/ListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map">
        <Stack.Screen name="RNPOINT" component={MapScreen} />
        <Stack.Screen name="Voltar" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
