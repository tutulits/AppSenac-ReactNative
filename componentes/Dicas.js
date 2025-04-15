import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useTheme } from '../componentes/Tema';

const cursos = [
    {
        id: '1',
        nome: 'Qual o melhor momento para um estudante buscar um estágio?',
        descricao: 'Para o primeiro estágio, o ideal é buscar a partir do primeiro ou segundo ano da graduação, quando já há uma base teórica para aplicar.'
    },
    {
        id: '2',
        nome: 'Como posso melhorar meu currículo para me destacar?',
        descricao: 'Invista em experiências extracurriculares, como estágios, cursos complementares e voluntariado...'
    },
    {
        id: '3',
        nome: 'Como se preparar para uma entrevista de estágio?',
        cor: '#FFF',
        descricao: 'Pesquise sobre a empresa, revise seu currículo e prepare-se para responder perguntas comuns em entrevistas. Pratique suas respostas em voz alta e esteja pronto para falar sobre suas experiências e habilidades.'
    },
    {
        id: '4',
        nome: 'Como se comportar no ambiente de trabalho?',
        cor: '#FFF',
        descricao: 'No ambiente de trabalho, é importante ser pontual, respeitar os colegas, manter uma postura profissional e estar aberto a feedbacks. Além disso, demonstre interesse e proatividade nas atividades.'
    },
    {
        id: '5',
        nome: 'Qual o melhor momento para um estudante buscar um estágio?',
        cor: '#FFF',
        descricao: 'Para o primeiro estágio, o ideal é buscar a partir do primeiro ou segundo ano da graduação, quando já há uma base teórica para aplicar.'
    },
    {
        id: '6',
        nome: 'Como posso melhorar meu currículo para me destacar?',
        cor: '#FFF',
        descricao: 'Para melhorar seu currículo e se destacar, invista em experiências extracurriculares, como estágios, cursos complementares e voluntariado. Além disso, destacar habilidades interpessoais, idiomas e o uso de ferramentas específicas da área de interesse também é essencial.'
    },
    {
        id: '7',
        nome: 'Como se preparar para uma entrevista de estágio?',
        cor: '#FFF',
        descricao: 'Pesquise sobre a empresa, revise seu currículo e prepare-se para responder perguntas comuns em entrevistas. Pratique suas respostas em voz alta e esteja pronto para falar sobre suas experiências e habilidades.'
    },
];


const CursoCard = ({ curso, tema }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const styles = StyleSheet.create({
        card: {
            alignSelf: 'center',
            width: 300,
            borderRadius: 10,
            padding: 15,
            backgroundColor: tema === 'dark' ? '#333' : '#DCDCDC',
            borderColor: '#0b4a76',
            borderWidth: 5,
            marginBottom: 15,
        },
        texto: {
            fontSize: 14,
            fontWeight: 'bold',
            color: tema === 'dark' ? '#fff' : '#000',
            textAlign: 'center',
        },
        descricao: {
            marginTop: 10,
            fontSize: 12,
            color: tema === 'dark' ? '#ccc' : '#333',
            textAlign: 'center',
            paddingHorizontal: 5,
        },
    });

    return (
        <TouchableOpacity style={styles.card} onPress={toggleDescription}>
            <Text style={styles.texto}>{curso.nome}</Text>
            {isExpanded && (
                <Text style={styles.descricao}>{curso.descricao}</Text>
            )}
        </TouchableOpacity>
    );
};

export default function Dicas() {
    const { tema } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: tema === 'dark' ? '#000' : '#FFF',
            paddingTop: 20,
        },
        curso2: {
            marginTop: 10,
            marginBottom: 20,
            textAlign: 'center',
            fontSize: 15,
            color: tema === 'dark' ? '#fff' : '#000',
        },
        banner: {
            marginTop: -20,
            width: '100%',
            height: 220,
            marginBottom: 20,
            alignSelf: 'stretch',
        },
    });

    return (
        <ScrollView style={{ backgroundColor: tema === 'dark' ? '#000' : '#fff' }}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/estagio.png')}
                    style={styles.banner}
                    resizeMode="cover"
                />
                <Text style={styles.curso2}>
                    Fique por dentro de muitas notícias e dicas que permeiam o universo dos estudantes, estagiários e empresários
                </Text>
                <FlatList
                    data={cursos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <CursoCard curso={item} tema={tema} />}
                />
            </View>
        </ScrollView>
    );
}

