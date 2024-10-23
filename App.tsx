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
    <LinearGradient colors={['white', '#0096FF']} style={styles.main}>
      <View style={{ height: 350, }} />

          <View style={styles.container}>
            <Button tus="e" color="#FFFFFF99" width={50} onPress={()=>console.log("e")} />
            <Button tus="µ" color="#FFFFFF99" width={50} onPress={()=>console.log("µ")} />
            <Button tus="sin" color="#FFFFFF99" width={50} onPress={()=>console.log("sin")} />
          </View>
          <View style={styles.container}>
            <Button tus="AC" color="#FFFFFF99" width={50} onPress={()=>console.log("AC")} />
            <Button tus="BACK" color="#FFFFFF99" width={50} onPress={()=>console.log("BACK")} />
            <Button tus="/" color="#FFFFFF99" width={50} onPress={()=>console.log("/")} />
          </View>
          <View style={styles.container}>
            <Button tus="7" color="#FFFFFF99" width={50} onPress={()=>console.log("7")} />
            <Button tus="8" color="#FFFFFF99" width={50} onPress={()=>console.log("8")} />
            <Button tus="9" color="#FFFFFF99" width={50} onPress={()=>console.log("9")} />
          </View>
          <View style={styles.container}>
            <Button tus="4" color="#FFFFFF99" width={50} onPress={()=>console.log("4")} />
            <Button tus="5" color="#FFFFFF99" width={50} onPress={()=>console.log("5")} />
            <Button tus="6" color="#FFFFFF99" width={50} onPress={()=>console.log("6")} />
          </View>
          <View style={styles.container}>
            <Button tus="1" color="#FFFFFF99" width={50} onPress={()=>console.log("1")} />
            <Button tus="2" color="#FFFFFF99" width={50} onPress={()=>console.log("2")} />
            <Button tus="3" color="#FFFFFF99" width={50} onPress={()=>console.log("3")} />
          </View>
          <View style={styles.container}>
            <Button tus="0" color="#FFFFFF99" width={120} onPress={()=>console.log("0")} />
            <Button tus="." color="#FFFFFF99" width={50} onPress={()=>console.log(".")} />
          </View>
        
        

   


    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,

  },
  container: {
    width: "50%",
    height: 60,
    flexDirection: "row",
    left: 20,
    justifyContent: "space-between",
    alignItems: "center",
   // marginHorizontal: 20
  },
});
export default App;
