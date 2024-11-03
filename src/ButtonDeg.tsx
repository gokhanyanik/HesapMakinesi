import React from "react";
import { StyleSheet,TouchableOpacity,Text } from 'react-native';


interface ButtonDegProps {
onPress:()=>void;
}

function ButtonDeg(props: ButtonDegProps): JSX.Element {
    return (
        <TouchableOpacity style={styles.tusdeg} onPress={props.onPress}>
            <Text style={styles.buttontext2}>deg</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tusdeg:{
        backgroundColor: "#e3ecf6",
        justifyContent: "center",
        alignItems: "center",
        width: 62,
        height: 40,
        top: 320,
        left: 52,
        gap: 10,
        borderRadius: 16,
        paddingTop: 6,   // üst kenar boşluğu,içeri doğru
        paddingBottom: 6,// alt kenar boşluğu,içeri doğru
        paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
        paddingRight: 4, //sağ kenar boşluğu,içeri doğru
        margin: 5
    },
    buttontext2:{
        width: 35,
        height: 48,
        fontFamily: 'Poppins', // Poppins fontunu kullanmak için eklenmiş olmalı
        fontSize: 19,
        fontWeight: '900',
        lineHeight: 45,
        textAlign: 'center',
        color: "white",
    }
})


export default ButtonDeg;