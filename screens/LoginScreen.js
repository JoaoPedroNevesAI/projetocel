import * as React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://simplescontrole.com.br/wp-content/uploads/2024/05/usuario.png' }}
        style={styles.image}
      />

      <Text>E-mail</Text>
      <TextInput style={styles.input} />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
      />

      <View style={styles.buttonSpacing}>
        <Button
          title="Login"
          color="#2a6fdb"
          onPress={() => navigation.navigate('Lista')}
        />
      </View>

      <Button
        title="Cadastre-se"
        color="#ff0000"
        onPress={() => navigation.navigate('Cadastrar')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6ccc2',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 8,
  },
  buttonSpacing: {
    marginBottom: 10,
  },
});