import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MessageInputScreen from '../screens/MessageInputScreen';
import ResultsScreen from '../screens/ResultsScreen';

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator initialRouteName="MessageInput">
      <Stack.Screen name="MessageInput" component={MessageInputScreen} options={{ title: 'Ingresar Mensaje' }} />
      <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Resultados del Análisis' }} />
    </Stack.Navigator>
  );
}