import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function Button({ onPress }) { // Está pegando a propriedade onPress

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={ onPress } // Está chamando o onPress do parâmetro
            >
            <Text style={styles.buttonText}>
                Add
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