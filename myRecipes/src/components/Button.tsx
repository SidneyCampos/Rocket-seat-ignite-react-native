import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps, // É uma interface que pega todas as propriedades do TouchableOpacity
    Text,
    StyleSheet
} from 'react-native';

// type ButtonProps = TouchableOpacityProps;
interface ButtonProps extends TouchableOpacityProps {
    title: string
}


export function Button({ title, ...rest }: ButtonProps) {

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.8}
            {...rest} // Pega todas as propriedades
        //onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6E14EF',
        alignItems: "center",
        borderRadius: 5,
        marginTop: 10,
        padding: 15
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: "bold"
    }
});