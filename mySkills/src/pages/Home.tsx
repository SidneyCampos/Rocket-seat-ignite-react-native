import React, { Fragment, useState, useEffect } from 'react'; // React serve para poder usar a sintax do JSX pra criar interfaces
// Fragment - Elemento como uma caixa, empacotar vários elementos
// Use state - Para mudar o objeto, conceito de imutabilidade
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList
} from 'react-native' // Trazer tudo que é específico do contexto mobile, {Componentes}
// SafeAreaView -> Para escapar do frame do ios
// View -> Como se fosse uma caixa para agrupar e organizar os elementos
// Text -> Um componente para colocar texto em tela
// Platform -> para estilizar referente a uma plataforma, iOS ou Android
// FlatList -> desempenho para trabalhar com listas
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

// Interfaces, representação de dados - TYPESCRIPT
interface SkillData {
    id: string;
    name: string;
    //date?: Date; // ? tornando opcional
}

export /*default*/ function Home() { // Não eportar por Default para poder exportar várias coisas
    const [newSkill, setNewSkill] = useState(''); // (valor inicial para o state)
    const [mySkills, setMySkills] = useState<SkillData[]>([]); // armazenar as skills, valor inicial aqui vetor //TSX o vetor virou um array de SkillData
    const [greeting, setGretting] = useState('');
    // newSkill é o estado em si
    // setNewSkill é a função que atualiza o estado
    function handleAddNewSkill() { // handle, convenção, quando a função é disparada através de uma interação do usuário - "Lidar"
        const data = { // OBJETO
            id: String(new Date().getTime()), // no TYPESCRIPT sempre é usado id String para a key dos elementos
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]); // ... Spread Operator pra pegar o que já tinha no newSkill. Vai criar um novo array.
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id // filtra as ids, recupera apenas as que forem diferentes do id do parâmetro
        ));
    }
    // Indicar a função que ele deve executar
    // Indicar quais são as dependências
    useEffect(() => { // Exemplo de hook
        const currentHour = new Date().getHours();

        if(currentHour < 12){
            setGretting('Good morning');
        }else if(currentHour >= 12 && currentHour < 18){
            setGretting('Good Afternoon')
        }else{
            setGretting('Good Night')
        }
    }, [mySkills])


    return ( // Nesse return deve ser retornado apenas um elemento, envolver tudo em uma tag
        // Aqui vai uma estrutura JSX
        <Fragment>

            <View style={styles.container}>

                

                <Text style={styles.title}>
                    Welcome, Sidney Campos!
                </Text>

                <Text style={styles.greetings}>
                    { greeting }
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="New skill"
                    placeholderTextColor="#999"
                    onChangeText={setNewSkill}
                />

                <Button title="Add" onPress={handleAddNewSkill} />

                <Text style={[styles.title, { marginVertical: 50 }]}>
                    My skills
                </Text>

                <FlatList
                    data={mySkills} // atributo obrigatório na FlatList
                    keyExtractor={item => item.id} // Deixar cada filho único, obrigatório
                    renderItem={({ item }) => (
                        <SkillCard 
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)}
                        />
                    )}
                />

                {
                // MODO DE FAZER PERCORRENDO O VETOR SEM USAR FLATLIST

                /* { // Está em chaves para misturar JSX com JS
                    // key = {skill} -> serve para criar um identificador único para cada filho
                    // {skill} -> Pegando o estado atual do mySkills
                    mySkills.map(skill => (
                        <SkillCard key={skill} skill={skill}/>
                    ))
                } */}


            </View>

        </Fragment>
    )
}

export const Nome = 'Sidney';

// CRIAR A PASTA SRC PARA SEPARAR OS AQUIVOS CRIADOS POR NÓS DOS ARQUIVOS IMPORTANTES PARA O APP

const styles = StyleSheet.create({ // Para não usar estilos inline
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
        //justifyContent: 'center',
        //alignItems: 'center',

    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: '#FFF'
    }
});