import * as React from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ListaScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: 'https://simplescontrole.com.br/wp-content/uploads/2024/05/usuario.png' }}
        style={{ width: 150, height: 150 }}
      />
      <Text></Text>

      <Button
        onPress={() => navigation.navigate('Home')}
        title="Login"
        color="#0400ff"
      />
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Cadastre-se"
        color="#ff0000"
      />
    </View>
  );
}