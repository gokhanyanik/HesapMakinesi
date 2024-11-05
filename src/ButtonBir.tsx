import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface ButtonBirProps {
    onPress: () => void,
}

function ButtonBir(props: ButtonBirProps): JSX.Element {
    return (
        <TouchableOpacity style={styles.tus1} onPress={() => props.onPress()} >
            <Text style={styles.buttontext}>1</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tus1: {
        backgroundColor: "#e3ecf6",
        justifyContent: "center",
        alignItems: "center",
        width: 62,
        height: 60,
        top: 315,
        left: 34,
        gap: 10,
        borderRadius: 16,
        paddingTop: 6,   // üst kenar boşluğu,içeri doğru
        paddingBottom: 6,// alt kenar boşluğu,içeri doğru
        paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
        paddingRight: 4, //sağ kenar boşluğu,içeri doğru
        margin: 5
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

export default ButtonBir;