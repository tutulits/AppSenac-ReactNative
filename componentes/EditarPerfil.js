import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { auth } from './Firebase';
import { updateProfile, updatePassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function EditarPerfil() {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  useEffect(() => {
    if (user) {
      setNome(user.displayName || '');
      setEmail(user.email || '');
    }
  }, []);

  const handleSalvar = async () => {
    if (!nome.trim()) {
      Alert.alert('Erro', 'O nome não pode estar vazio.');
      return;
    }

    try {
      await updateProfile(user, { displayName: nome });

      if (novaSenha) {
        if (novaSenha.length < 6) {
          Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
          return;
        }
        await updatePassword(user, novaSenha);
      }

      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      let mensagemErro = 'Não foi possível atualizar o perfil.';

      if (error.code === 'auth/requires-recent-login') {
        mensagemErro = 'Por segurança, faça login novamente para alterar a senha.';
      }

      Alert.alert('Erro', mensagemErro);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome de Exibição</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>E-mail (não editável)</Text>
      <Text style={styles.email}>{email}</Text>

      <Text style={styles.label}>Nova Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Deixe em branco para não alterar"
        value={novaSenha}
        onChangeText={setNovaSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#f78b1f',
    padding: 15,
    marginTop: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
