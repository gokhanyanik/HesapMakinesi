import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface ButtonEsittirProps {
    onPress: () => void,
}

function ButtonEsittir(props: ButtonEsittirProps): JSX.Element {
    return (
        <TouchableOpacity style={styles.tusEsittir} onPress={() => props.onPress()} >
            <Text style={styles.buttontext}>=</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tusEsittir: {
        backgroundColor: "#36BCFF",
        justifyContent: "center",
        alignItems: "center",
        width: 62,
        height: 96,
        top: 300,
        left: 44,
        gap: 10,
        borderRadius: 16,
        paddingTop: 6,   // üst kenar boşluğu,içeri doğru
        paddingBottom: 6,// alt kenar boşluğu,içeri doğru
        paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
        paddingRight: 4, //sağ kenar boşluğu,içeri doğru
        margin: 5,
    },
    buttontext: {
        width: 25,
        height: 52,
        fontFamily: 'Poppins', // Poppins fontunu kullanmak için eklenmiş olmalı
        fontSize: 25,
        fontWeight: '900',
        lineHeight: 45,
        textAlign: 'center',
        color: "white",
    }
})

export default ButtonEsittir;