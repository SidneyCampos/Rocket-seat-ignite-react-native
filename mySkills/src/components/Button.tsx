import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

// type ButtonProps = TouchableOpacityProps;
// Aqui em baixo está adicionando propriedades ao Touchable
interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest } : ButtonProps) { // Está pegando todas propriedades do Button, inclusive onPress

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            //onPress={ onPress } // Está chamando o onPress do parâmetro
            {...rest} // Está pegando qualquer propriedade que for chamada no button do arquivo de destino (Home)
            >
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({ // Para não usar estilos inline
    button: {
        backgroundColor: '#A370F7',
        padding: 12,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});