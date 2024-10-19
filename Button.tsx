import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


function Button(): JSX.Element {
  return (
    <View>
      <TouchableOpacity style={styles.view_button}>
        <Text style={styles.text_button}>1</Text>
      </TouchableOpacity>
    </View>
  );

}


const styles = StyleSheet.create({

  view_button: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 6,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 6,
    margin: 10
  },
  view2_button: {
    width: 50,
    height: 50,
    backgroundColor: "red",
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