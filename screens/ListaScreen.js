import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, Pressable } from 'react-native';

export default function ListaScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Lista de Contatos</Text>

      <View style={{ marginBottom: 20 }}>
        <Button
          title="Criar Contato"
          color="#2a6fdb"
          onPress={() => navigation.navigate('CriarContato')}
        />
      </View>

      <Pressable
        style={styles.contato}
        onPress={() => navigation.navigate('EditarContato')}
      >
        <Image
          source={{ uri: 'https://simplescontrole.com.br/wp-content/uploads/2024/05/usuario.png' }}
          style={styles.imagem}
        />
        <View>
          <Text>Marco Andrade</Text>
          <Text>81 988553424</Text>
        </View>
      </Pressable>

      <Pressable
        style={styles.contato}
        onPress={() => navigation.navigate('EditarContato')}
      >
        <Image
          source={{ uri: 'https://simplescontrole.com.br/wp-content/uploads/2024/05/usuario.png' }}
          style={styles.imagem}
        />
        <View>
          <Text>Patrícia Tavares</Text>
          <Text>81 998765332</Text>
        </View>
      </Pressable>

      <Pressable
        style={styles.contato}
        onPress={() => navigation.navigate('EditarContato')}
      >
        <Image
          source={{ uri: 'https://simplescontrole.com.br/wp-content/uploads/2024/05/usuario.png' }}
          style={styles.imagem}
        />
        <View>
          <Text>Rodrigo Antunes</Text>
          <Text>81 987765525</Text>
        </View>
      </Pressable>

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
    marginBottom: 15,
  },
  contato: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
});