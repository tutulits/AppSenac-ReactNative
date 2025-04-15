import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Cursos from './Cursos';
import { useTheme } from './Tema';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const carrosel = [
  {id: 1, imagem: require('../assets/m.png')},
  {id: 2, imagem: require('../assets/m.png')},
]

const cursos = [
  { id: '1', nome: 'Tecnologia da Informação', imagem: require('../assets/ti.png'), cor: '#2F4F4F' },
  { id: '2', nome: 'Beleza e Estética', imagem: require('../assets/estetica.jpg'), cor: 'pink' },
  { id: '3', nome: 'Administração', imagem: require('../assets/adm.png'), cor: 'darkblue' },
  { id: '4', nome: 'Gestão e Negócios', imagem: require('../assets/gestao.png'), cor: 'khaki' },
  { id: '5', nome: 'Moda', imagem: require('../assets/moda.png'), cor: 'mediumpurple' },
  { id: '6', nome: 'Educação', imagem: require('../assets/educacao.jpg'), cor: 'darkorange' },
  { id: '7', nome: 'Desing Artes & Arquitetura', imagem: require('../assets/artes.png'), cor: 'gold' },
];

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const { tema } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema === 'dark' ? '#121212' : '#F2F2F2',
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
      padding: 10,
      color: tema === 'dark' ? '#FFFFFF' : '#000000',
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.curso}>Cursos por área</Text>
      <Carousel 
      data={carrosel}
      renderItem={({ item }) => (
        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
        <Image source={item.imagem} style={{ width: width * 0.9, height: 180, borderRadius: 10 }} />
      </View>
      )}
      sliderWidth={width}
    itemWidth={width * 0.9}
    loop={true}
    autoplay={true}
    autoplayInterval={4000}
      /> 
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
      <StatusBar style={tema === 'dark' ? 'light' : 'dark'} />
    </View>
  );
};

export default function Home() {
  const { tema } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Cursos' }} />
      <Stack.Screen name="Cursos" component={Cursos} options={{ title: 'Detalhes do Curso' }} />
    </Stack.Navigator>
  );
}
