import React from "react";
import { StyleSheet,TouchableOpacity,Image } from 'react-native'

interface ButtonBackSpaceProps {
onPress:()=>void,
}

function ButtonBackSpace(props:ButtonBackSpaceProps): JSX.Element {
    return (
        <TouchableOpacity style={styles.tusbackspace} onPress={props.onPress}>
            <Image
                source={require('../assets/images/icon.png')}
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tusbackspace:{
        backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 62,
    top: 326,
    left: 40,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
    },
    icon:{
        width: 21.8,
        height: 18,
        color: "#C9DFF1"
    }
})

export default ButtonBackSpace;