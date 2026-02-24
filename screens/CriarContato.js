import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CriarContatoScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Contato</Text>

      <Text>Nome</Text>
      <TextInput style={styles.input} />

      <Text>E-mail</Text>
      <TextInput style={styles.input} />

      <Text>Telefone</Text>
      <TextInput style={styles.input} />

      <View style={{ marginTop: 20 }}>
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
});