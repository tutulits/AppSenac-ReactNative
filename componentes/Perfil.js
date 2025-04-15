import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { createAvatar } from '@dicebear/core';
import { funEmoji } from '@dicebear/collection';
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './Tema';

export default function Perfil() {
  const [email, setEmail] = useState('');
  const [avatarSvg, setAvatarSvg] = useState('');
  const navigation = useNavigation();
  const { tema, TemaCor } = useTheme();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email);
      // Gere o avatar com base no email do usuário
      const avatar = createAvatar(funEmoji, {
        seed: user.email,
        // ... outras opções de personalização
      }).toString();
      setAvatarSvg(avatar);
    } else {
      setEmail('Usuário não autenticado');
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert('Logout', 'Você saiu com sucesso!');
        navigation.replace('Login'); // volta para a tela de login
      })
      .catch((error) => {
        Alert.alert('Erro', 'Não foi possível sair. Tente novamente.');
        console.error(error);
      });
  };

  const estiloAtual = tema === 'light' ? styles.light : styles.dark

  return (
    <View style={[styles.container, estiloAtual.container]}>
      <Text onPress={TemaCor}>{tema === 'light' ? '🌞' : '🌙'}</Text>
      {avatarSvg ? <SvgXml xml={avatarSvg} style={styles.profileImage} /> : null}
      <Text style={[styles.label, estiloAtual.texto]}>E-mail do usuário:</Text> 
      <Text style={[styles.email, estiloAtual.texto]}>{email}</Text>



      <View style={styles.buttonContainer}>
        <Button title="Sair da conta" onPress={handleLogout} color="#d9534f" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  label: { 
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '60%',
    marginTop: 20,
  },
  emojiText: {
    fontSize: 24,
    marginTop: 20,
  },
  light: {
    container: {
      backgroundColor: '#fff',
    },
    texto: {
      color: '#000',
    },
  },
  dark: {
    container: {
      backgroundColor: '#121212',
    },
    texto: {
      color: '#fff',
    },
  },
});