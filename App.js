import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cursos from './Cursos';

const cursos = [
  { id: '1', nome: 'Tecnologia da Informação', imagem: require('./assets/ti.png'), cor: '#2F4F4F' },
  { id: '2', nome: 'Beleza e Estética', imagem: require('./assets/estetica.jpg'), cor: 'pink' },
  { id: '3', nome: 'Administração', imagem: require('./assets/adm.png'), cor: 'darkblue' },
  { id: '4', nome: 'Gestão e Negócios', imagem: require('./assets/gestao.png'), cor: 'khaki' },
  { id: '5', nome: 'Moda', imagem: require('./assets/moda.png'), cor: 'mediumpurple' },
  { id: '6', nome: 'Educação', imagem: require('./assets/educacao.jpg'), cor: 'darkorange' },
  { id: '7', nome: 'Desing Artes & Arquitetura', imagem: require('./assets/artes.png'), cor: 'gold' },
];

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.curso}>Cursos por área</Text>
      <FlatList
        data={cursos}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: item.cor }]} 
            onPress={() => navigation.navigate('Cursos', { curso: item })}>
            <Image source={item.imagem} style={styles.imagem} />
            <Text style={styles.texto}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Cursos' }} />
        <Stack.Screen name="Cursos" component={Cursos} options={{ title: 'Detalhes do Curso' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingVertical: 20,
  },
  row: {
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  card: {
    width: 160,
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  imagem: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  texto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 5,
  },
  curso: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    padding: 10
  }
});
