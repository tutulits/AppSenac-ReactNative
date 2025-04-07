import React, { useState } from 'react'; 
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const cursos = [
    {
        id: '1',
        nome: 'Qual o melhor momento para um estudante buscar um estágio?',
        cor: '#0a4d90',
        descricao: 'Para o primeiro estágio, o ideal é buscar a partir do primeiro ou segundo ano da graduação, quando já há uma base teórica para aplicar.'
    },
    {
        id: '2',
        nome: 'Quais são os requisitos mínimos para me candidatar a um estágio?',
        cor: '#0a4d90',
        descricao: 'Estar matriculado em um curso superior, técnico ou de ensino médio. Ter uma carga horária mínima de aulas e disponibilidade para estagiar. Bom desempenho acadêmico.'
    },   
    {
        id: '3',
        nome: 'Posso fazer estágio enquanto estudo, ou é muito difícil conciliar?',
        cor: '#0a4d90',
        descricao: 'Sim, é possível conciliar estágio com os estudos, desde que haja uma boa organização do tempo. Muitas empresas oferecem horários flexíveis para estagiários, permitindo que você consiga gerenciar suas atividades acadêmicas e profissionais.'
    },   
    {
        id: '4',
        nome: 'Como posso melhorar meu currículo para me destacar?',
        cor: '#0a4d90',
        descricao: 'Para melhorar seu currículo e se destacar, invista em experiências extracurriculares, como estágios, cursos complementares e voluntariado. Além disso, destacar habilidades interpessoais, idiomas e o uso de ferramentas específicas da área de interesse também é essencial.'
    }
,
    {
        id: '5',
        nome: 'O que é necessário para fazer um bom currículo?',
        cor: '#0a4d90',
        descricao: 'Um bom currículo deve ser claro, objetivo e bem estruturado. Inclua informações pessoais, formação acadêmica, experiências profissionais, habilidades e cursos complementares relevantes. Utilize uma formatação limpa e evite erros de gramática e ortografia.'
    },
    {
        id: '6',
        nome: 'Como se preparar para uma entrevista de estágio?',
        cor: '#0a4d90',
        descricao: 'Pesquise sobre a empresa, revise seu currículo e prepare-se para responder perguntas comuns em entrevistas. Pratique suas respostas em voz alta e esteja pronto para falar sobre suas experiências e habilidades.'
    },
    {
        id: '7',
        nome: 'O que fazer se não conseguir um estágio?',
        cor: '#0a4d90',
        descricao: 'Se não conseguir um estágio, não desanime. Continue buscando oportunidades, aprimorando suas habilidades e fazendo networking. Considere fazer cursos online ou participar de projetos voluntários para ganhar experiência.'
    },
    {
        id: '8',
        nome: 'Qual a importância do estágio na formação profissional?',
        cor: '#0a4d90',
        descricao: 'O estágio é fundamental para aplicar os conhecimentos teóricos adquiridos na faculdade, desenvolver habilidades práticas e construir uma rede de contatos profissionais. Além disso, é uma oportunidade de entender melhor o mercado de trabalho e as expectativas das empresas.'
    }    
,
    {
        id: '9',
        nome: 'Como lidar com a pressão e o estresse no estágio?',
        cor: '#0a4d90',
        descricao: 'Para lidar com a pressão e o estresse no estágio, é importante manter uma boa organização do tempo, priorizar tarefas e buscar apoio quando necessário. Praticar atividades físicas e técnicas de relaxamento também pode ajudar.'
    },
    {
        id: '10',
        nome: 'O que fazer se não me adaptar ao estágio?',
        cor: '#0a4d90',
        descricao: 'Se você não se adaptar ao estágio, converse com seu supervisor sobre suas dificuldades. Se necessário, busque outra oportunidade que esteja mais alinhada com suas expectativas e objetivos profissionais.'
    }
,
    {
        id: '11',
        nome: 'Como se comportar no ambiente de trabalho?',
        cor: '#0a4d90',
        descricao: 'No ambiente de trabalho, é importante ser pontual, respeitar os colegas, manter uma postura profissional e estar aberto a feedbacks. Além disso, demonstre interesse e proatividade nas atividades.'
    },
    {
        id: '12',
        nome: 'Como fazer networking durante o estágio?',
        cor: '#0a4d90',
        descricao: 'Para fazer networking durante o estágio, participe de eventos da empresa, converse com colegas e supervisores, e mantenha contato com profissionais da área. Utilize redes sociais profissionais para ampliar sua rede de contatos.'
    }
];

const CursoCard = ({ curso }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <TouchableOpacity style={[styles.card, { backgroundColor: curso.cor }]}>
            <Image source={curso.imagem} style={styles.imagem} />
            <Text style={styles.texto}>{curso.nome}</Text>
            <Text style={styles.descricao}>
                {
                    isExpanded ? curso.descricao : curso.descricao.substring(0, 100) + '...'
                }
            </Text>
            <TouchableOpacity onPress={toggleDescription} style={styles.lerMaisButton}>
                <Text style={styles.lerMaisText}>
                    {isExpanded ? 'Ler Menos' : 'Ler Mais'} 
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default function Dicas() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../assets/estagio.png')}
                    style={{ marginTop: -20, width: 415, height: 200, alignSelf: 'center', marginBottom: 20 }}
                />
                <Text style={styles.curso2}>
                    Fique por dentro de muitas notícias e dicas que permeiam o universo dos estudantes, estagiários e empresários
                </Text>
                <FlatList
                    data={cursos} 
                    keyExtractor={item => item.id}  
                    numColumns={2} 
                    renderItem={({ item }) => <CursoCard curso={item} />}
                    columnWrapperStyle={styles.row}
                />
            </View>
        </ScrollView>
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
        height: 200, 
        borderRadius: 10, 
        overflow: 'hidden', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 15,
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
        marginTop: -120,

    },
    descricao: {
        fontSize: 12, 
        color: '#FFF', 
        textAlign: 'center',

        paddingHorizontal: 5, 
    },
    lerMaisButton: {
        marginTop: 10,
    },
    lerMaisText: {
        color: '#FFF', 
        fontWeight: 'bold', 
        textDecorationLine: 'underline', 
    },
    curso2: {
        marginTop: 10, 
        marginBottom: 20, 
        textAlign: 'center',
        fontSize: 15, 
    }
});
