import React, { useState, useEffect } from "react"; // Reponsável pela syntax JSX
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from "../components/SkillCard";
// TYPESCRIPT - SUPERSET DE TIPAGEM
// 1 - Inferência de dados, typescript analisa o valor inicial da variável e define qual tipo
// 2 - Interface, serve para criar nossos próprios tipos de dados

interface SkillData {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]); // Uma lista de objetos SkillData
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id // Recuperar apenas as skills que forem diferentes do parâmetro informado
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Good morning')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon')
        } else {
            setGreeting('Good Night')
        }
    }, [mySkills]) // Sempre que mySkills for atualizado, useEffect também será
    // 1 Parâmetro - A função que ele deve executar
    // 2 Parâmetro - Quais são as dependências

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Sidney</Text>

            <Text style={styles.greetings}>
                {greeting}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Receita"
                onChangeText={setNewSkill}
            />

            <Button
                title="Add"
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Recipes
            </Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)} // É chamado uma função pois handleRemoveSkill precisa de parâmetro
                    />
                )}
            >

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title: {
        color: '#1F1F1F',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#F5F5F5',
        color: 'black',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: "hidden",
        borderColor: '#1F1F1F',
        fontSize: 18,
        padding: 15,
        marginTop: 20
    },
    greetings: {

    }
});