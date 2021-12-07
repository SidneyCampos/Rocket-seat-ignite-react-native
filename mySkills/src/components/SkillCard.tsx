import React from "react";

import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {

    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text 
            style={styles.textSkill}
            {...rest}
            >
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ // Para não usar estilos inline
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        margin: 5
    },
    textSkill: {
        color: '#fff',
        fontSize: 18,
    }
});