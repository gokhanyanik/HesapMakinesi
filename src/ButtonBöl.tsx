import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native'


interface ButtonBölProps {
    onPress: () => void,
}

function ButtonBöl(props: ButtonBölProps): JSX.Element {
    return (
        <TouchableOpacity style={styles.tusbölme} onPress={() => props.onPress()}>
            <Text style={styles.buttontext}>/</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tusbölme: {
        backgroundColor: "#ADD8FF",
        justifyContent: "center",
        alignItems: "center",
        width: 62,
        height: 62,
        top: 326,
        left: 46,
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
        fontSize: 20,
        fontWeight: '900',
        lineHeight: 45,
        textAlign: 'center',
        color: "blue",
    }

})

export default ButtonBöl;