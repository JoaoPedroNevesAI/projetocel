import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastrarScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Usuário</Text>

      <Text>Nome</Text>
      <TextInput style={styles.input} />

      <Text>CPF</Text>
      <TextInput style={styles.input} />

      <Text>E-mail</Text>
      <TextInput style={styles.input} />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
      />

      <View style={styles.botao}>
        <Button
          title="Salvar"
          color="#2a6fdb"
          onPress={() => navigation.goBack()}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6ccc2',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 8,
  },
  botao: {
    marginTop: 20,
  },
});