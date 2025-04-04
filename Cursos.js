import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Cursos({ route }) {
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

    return (

        <View style={styles.container}>
            <ScrollView>

          
            <Image
                source={require('../estagio/assets/cursos.jpg')}
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
                                <Text style={styles.descricaoCurso}>
                                    Este curso oferece uma formação completa na área, com foco em prática e teoria. Ideal para quem quer crescer profissionalmente!
                                </Text>
                            </View>
                    )}
                </View>
            ))}

            <StatusBar style="dark" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
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
        color: '#0077A3',
        textAlign: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 6,
    },
    linha: {
        width: 100,
        height: 3,
        backgroundColor: '#0077A3',
        marginVertical: 15,
        borderRadius: 2,
        marginLeft: 130
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
        backgroundColor: '#FFF',
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
        backgroundColor: '#FFF8DC',
        padding: 12,
        borderRadius: 10,
        borderColor: '#FF8C00',
        borderWidth: 1,
        marginTop: -8,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold'
    },
    img: {
        height: 160,
        width: 100
    },
    descricaoCurso: {
        fontSize: 14,
        color: '#555',
        lineHeight: 18,
    },
});
