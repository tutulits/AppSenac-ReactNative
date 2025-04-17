import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase';

export default function RedefinirSenha({ navigation }) {
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    if (!email) {
      Alert.alert('Erro', 'Digite seu e-mail para continuar.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'E-mail enviado',
        'Um link para redefinir sua senha foi enviado para o e-mail informado.'
      );
      navigation.goBack(); // volta para a tela de login
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível enviar o e-mail. Verifique o endereço digitado.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>

      <TextInput
        placeholder="Digite seu e-mail"
        placeholderTextColor="#000"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Enviar e-mail de recuperação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backLink} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Voltar ao login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fca15b',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    backgroundColor: '#045494',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backLink: {
    marginTop: 20,
  },
  backText: {
    color: '#045494',
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
