import { useState } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

export default function CriarConta({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');
    const [sucesso, setSucesso] = useState('');

    const criarConta = async () => {
        if (senha !== confirmarSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            setSucesso('Conta criada com sucesso!');
            setError('');
            navigation.replace('Login');
        } catch (err) {
            setError('Erro ao criar conta. Tente novamente.');
            console.error(err);
            setSucesso('');
        }
    };

    return (
        <SafeAreaView style={estilos.container}>
            <Image source={require('../assets/senac2.png')} style={estilos.logo} />
            <Text style={estilos.textoentrada}>Criar Conta</Text>

            <TextInput
                placeholderTextColor={'#000'}
                style={estilos.textoinput}
                placeholder="Nome"
                onChangeText={setNome}
                value={nome}
            />

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

            <TextInput
                placeholderTextColor={'#000'}
                style={estilos.textoinput2}
                placeholder="Confirmar Senha"
                onChangeText={setConfirmarSenha}
                value={confirmarSenha}
                secureTextEntry
            />

            {error ? <Text style={estilos.error}>{error}</Text> : null}
            {sucesso ? <Text style={estilos.sucesso}>{sucesso}</Text> : null}

            <TouchableOpacity
                style={estilos.botao}
                onPress={criarConta}
                activeOpacity={0.7}
            >
                <Text style={estilos.textobotao}>Criar Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={estilos.botao2}
                onPress={() => navigation.replace('Login')}
                activeOpacity={0.7}
            >
                <Text style={estilos.textobotao2}>
                    Já tem uma conta? Entrar
                </Text>
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
        marginTop: -50,
        marginBottom: 10,
    },
    textoentrada: {
        marginTop: -50,
        marginBottom: -50,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fca15b',
        paddingVertical: 14,
        marginBottom: 0,
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
        marginTop: 20,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        width: 200,
        backgroundColor: '#045494',
        height: 50,
        marginTop: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
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
        textAlign: 'center',
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
    sucesso: {
        color: 'green',
        fontSize: 14,
        marginTop: 10,
    },
});
