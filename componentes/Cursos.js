import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from './Tema';

export default function Cursos({ route }) {
    const { tema } = useTheme();
    const { curso } = route.params;
    const [cursoAberto, setCursoAberto] = useState(null);

    const toggleCurso = (curso) => {
        setCursoAberto(cursoAberto === curso ? null : curso);
    };

    const cursos = [
        "Livre",
        "Técnico",
        "Graduação",
        "Ensino Médio Técnico",
        "Pós-Graduação"
    ];

    const detalhesCurso = {
        "Livre": "Cursos rápidos e introdutórios, ideais para quem quer aprender algo novo em pouco tempo.",
        "Técnico": "Formações mais completas, voltadas para o mercado de trabalho. Perfeitos para capacitação profissional.",
        "Graduação": "Cursos superiores com formação acadêmica sólida, duração média de 3 a 5 anos.",
        "Ensino Médio Técnico": "Integra o ensino médio com formação técnica, preparando o aluno para o mercado e vestibulares.",
        "Pós-Graduação": "Especializações para quem já tem graduação e busca se aprofundar em determinada área."
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: tema === 'dark' ? '#000' : '#FFF',
            paddingTop: 40,
            alignItems: 'center',
        },
        image: {
            width: '100%',
            height: 230,
        },
        titulo: {
            fontSize: 20,
            fontWeight: 'bold',
            color: tema === 'dark' ? '#fff' : '#0077A3',
            textAlign: 'center',
            marginTop: 20,
            paddingHorizontal: 20,
        },
        descricao: {
            fontSize: 14,
            color: tema === 'dark' ? '#fff' : '#666',
            textAlign: 'center',
            marginTop: 6,
        },
        linha: {
            width: 100,
            height: 3,
            backgroundColor: '#0077A3',
            marginVertical: 15,
            borderRadius: 2,
            marginLeft: 160,
        },
        cursoContainer: {
            width: '100%',
            alignItems: 'center',
        },
        curso: {
            width: 320,
            paddingVertical: 14,
            paddingHorizontal: 20,
            borderRadius: 12,
            backgroundColor: tema === 'dark' ? '#1a1a1a' : '#FFF',
            borderWidth: 1,
            borderColor: '#FF8C00',
            marginBottom: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
        },
        cursoTexto: {
            fontSize: 16,
            fontWeight: '600',
            color: '#FF8C00',
        },
        icon: {
            fontSize: 18,
            color: '#FF8C00',
        },
        content: {
            width: 300,
            backgroundColor: tema === 'dark' ? '#333' : '#FFF8DC',
            padding: 12,
            borderRadius: 10,
            borderColor: '#FF8C00',
            borderWidth: 1,
            marginTop: -8,
            marginBottom: 10,
        },
        text: {
            fontSize: 16,
            color: tema === 'dark' ? '#fff' : '#333',
            fontWeight: 'bold',
        },
        img: {
            height: 160,
            width: 100,
            marginBottom: 10,
        },
        descricaoCurso: {
            fontSize: 14,
            color: tema === 'dark' ? '#ccc' : '#555',
            lineHeight: 18,
        },
    });

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={require('../assets/cursos.jpg')}
                    style={styles.image}
                />
                <Text style={styles.titulo}>
                    Chegou a sua hora! Não deixe o seu sonho pra depois!
                </Text>
                <Text style={styles.descricao}>
                    "O primeiro passo pro seu sucesso começa aqui!"
                </Text>
                <View style={styles.linha} />

                {cursos.map((curso, index) => (
                    <View key={index} style={styles.cursoContainer}>
                        <TouchableOpacity
                            style={styles.curso}
                            onPress={() => toggleCurso(curso)}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.cursoTexto}>{curso}</Text>
                            <Text style={styles.icon}>
                                {cursoAberto === curso ? '▼' : '▶'}
                            </Text>
                        </TouchableOpacity>

                        {cursoAberto === curso && (
                            <View style={styles.content}>
                                <Image source={route.params.curso.imagem} style={styles.img} />
                                <Text style={styles.text}>{route.params.curso.nome}</Text>
                                <Text style={styles.descricaoCurso}>{detalhesCurso[curso]}</Text>
                            </View>
                        )}
                    </View>
                ))}

                <StatusBar style={tema === 'dark' ? 'light' : 'dark'} />
            </ScrollView>
        </View>
    );
}
