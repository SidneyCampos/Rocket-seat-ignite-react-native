import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            {...rest}
        >
            <Text
                style={styles.textSkill}
            >
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#F5F5F5',
        marginBottom: 10,
        padding: 15,
        borderRadius: 50,
        elevation: 5,
        alignItems: 'center'
    },
    textSkill: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});