import * as React from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import CadastroScreen from './screens/CadastroScreen.js';
import EditarContatoScreen from './screens/EditarContato.js';
import CriarContatoScreen from './screens/CriarContato.js';
import ListaScreen from './screens/ListaScreen.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="EditarContato" component={EditarContatoScreen} />
        <Stack.Screen name="CriarContato" component={CriarContatoScreen} />
        <Stack.Screen name="Lista" component={ListaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;