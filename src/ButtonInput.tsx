import React, { useState } from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'

interface ButtonInputProps{
    total:string;
    setTotal:(text:string)=>void;
}

function ButtonInput(props: ButtonInputProps): JSX.Element {


    return (
        <View style={{ height: 1 }}>
            <TextInput
                style={styles.input}
                placeholder='0'
                value={props.total}
                onChangeText={props.setTotal}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        height: 180,
        borderColor: 'gray',
        borderWidth: 0,
        marginBottom: 12,
        padding: 20,
        width: '100%',
        top: 90,
        textAlign: "right",
        fontSize: 30
    }

})


export default ButtonInput;