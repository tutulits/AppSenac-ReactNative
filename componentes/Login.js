import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase';
import Criar from './CriarLogin';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace('Tabs');
    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const criarlogin = () => {
    navigation.replace('CriarLogin');
  };

  const esqueciSenha = async () => {
    if (!email) {
      Alert.alert('Erro', 'Digite seu e-mail para redefinir a senha.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Sucesso', 'E-mail de redefinição de senha enviado!');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível enviar o e-mail. Verifique se o e-mail está correto.');
    }
  };

  return (
    <SafeAreaView style={estilos.container}>
      <Image source={require('../assets/senac2.png')} style={estilos.logo} />
      <Text style={estilos.textoentrada}>Senac estágios</Text>

      <TextInput
        placeholderTextColor={'#000'}
        style={estilos.textoinput}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        placeholderTextColor={'#000'}
        style={estilos.textoinput2}
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />

      {error ? <Text style={estilos.error}>{error}</Text> : null}

      <TouchableOpacity
        style={estilos.botao}
        onPress={login}
        activeOpacity={0.7}
      >
        <Text style={estilos.textobotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={estilos.link}
  onPress={() => navigation.navigate('RedefinirSenha')}
  activeOpacity={0.7}
>
  <Text style={estilos.linkTexto}>Esqueci minha senha</Text>
</TouchableOpacity>


      <TouchableOpacity
        style={estilos.botao2}
        onPress={criarlogin}
        activeOpacity={0.7}
      >
        <Text style={estilos.textobotao2}>Criar login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#fff",
    alignItems: 'center',
    padding: 8,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: -110,
  },
  textoinput: {
    width: 300,
    paddingLeft: 10,
    backgroundColor: "#D9D9D9",
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 80,
  },
  textoinput2: {
    width: 300,
    paddingLeft: 10,
    backgroundColor: "#D9D9D9",
    color: '#000',
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 10,
    marginBottom: 20,
  },
  textoentrada: {
    marginTop: -50,
    marginBottom: -50,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fca15b',
    paddingVertical: 14,
  },
  botao: {
    width: 200,
    backgroundColor: '#045494',
    height: 50,
    marginTop: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  botao2: {
    width: 200,
    height: 50,
    marginTop: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#045494',
  },
  textobotao: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: -5,
  },
  textobotao2: {
    fontSize: 20,
    color: '#045494',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
  link: {
    marginBottom: 15,
  },
  linkTexto: {
    color: '#045494',
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
