import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from './Button';



function App(): React.JSX.Element {
  return (
    <LinearGradient
      colors={['white', '#0096FF']}
      style={styles.main}
    >

      <View style={{ height: 350 }} />

      <View style={styles.container}>
        <Button />

      </View>



    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent:"center"
  },
  container: {

    // flex: 1,
    width: "60%",
    height: 60,
    flexDirection: "row",
    left: 20,
    justifyContent: "space-between",
    alignItems: "center",

  },

});

export default App;
