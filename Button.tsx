import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


interface ButtonProps {
  tus: number | string;
  color: string;
  width: number;
  onPress: any
}

function Button({ tus, color, width, onPress }: ButtonProps): JSX.Element {
  return (
    <View>
      <TouchableOpacity style={[styles.view_button, { backgroundColor: color }, { width: width }]} onPress={onPress}>
        <Text style={styles.text_button}>{tus}</Text>
      </TouchableOpacity>
    </View>
  );

}


const styles = StyleSheet.create({

  view_button: {
    // width: 50,
    height: 50,
    // backgroundColor: "yellow",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 6,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 6,
    margin: 10
  },
  text_button: {
    color: "white",
    fontSize: 25
  }

});


export default Button;