import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,  
  View,
} from 'react-native';
import ButtonInput from './src/ButtonInput';
import ButtonE from './src/ButtonE';
import ButtonPi from './src/ButtonPi';
import ButtonSin from './src/ButtonSin';
import ButtonDeg from './src/ButtonDeg';
import ButtonAc from './src/ButtonAc';
import ButtonBackSpace from './src/ButtonBackSpace';
import ButtonBöl from './src/ButtonBöl';
import ButtonCarp from './src/ButtonCarp';
import ButtonYedi from './src/ButtonYedi';
import ButtonSekiz from './src/ButtonSekiz';
import ButtonDokuz from './src/ButtonDokuz';
import ButtonCikar from './src/ButtonCikar';
import ButtonDort from './src/ButtonDort';
import ButtonBes from './src/ButtonBes';
import ButtonAlti from './src/ButtonAlti';
import ButtonTopla from './src/ButtonTopla';
import ButtonBir from './src/ButtonBir';
import ButtonIki from './src/ButtonIki';
import ButtonUc from './src/ButtonUc';
import ButtonSifir from './src/ButtonSifir';
import ButtonNokta from './src/ButtonNokta';
import ButtonEsittir from './src/ButtonEsittir';


function App(): React.JSX.Element {

  const [total, setTotal] = useState("")

  const handleButtonPress = (value: string) => {
    if (value === "Ac") {
      setTotal("")
    } else if (value === "back") {
      setTotal(total.slice(0, -1))
    } else if (value === "=") {
      try {
        const result = eval(total)
        setTotal(String(result))
      } catch (error) {
        setTotal("error")
      }
    } else if (value === "+") {
      setTotal(total + "+")
    } else if (value === "-") {
      setTotal(total + "-")
    } else if (value === "*") {
      setTotal(total + "*")
    } else if (value === "/") {
      setTotal(total + "/")
    } else {
      setTotal(total + value)
    }
  }

  return (
    <LinearGradient
      colors={['#F7F8FB', '#B0E2FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <ButtonInput total={total} setTotal={setTotal} />
        <View style={{ flexDirection: "row" }}>
          <ButtonE onPress={() => handleButtonPress("e")} />
          <ButtonPi onPress={() => handleButtonPress("3.14")} />
          <ButtonSin onPress={() => handleButtonPress("sin")} />
          <ButtonDeg onPress={() => handleButtonPress("deg")} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonAc onPress={() => handleButtonPress("Ac")} />
          <ButtonBackSpace onPress={() => handleButtonPress("back")} />
          <ButtonBöl onPress={() => handleButtonPress("/")} />
          <ButtonCarp onPress={() => handleButtonPress("*")} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonYedi onPress={() => handleButtonPress("7")} />
          <ButtonSekiz onPress={() => handleButtonPress("8")} />
          <ButtonDokuz onPress={() => handleButtonPress("9")} />
          <ButtonCikar onPress={() => handleButtonPress("-")} />
        </View>
        <View style={{ flexDirection: "row" }} >
          <ButtonDort onPress={() => handleButtonPress("4")} />
          <ButtonBes onPress={() => handleButtonPress("5")} />
          <ButtonAlti onPress={() => handleButtonPress("6")} />
          <ButtonTopla onPress={() => handleButtonPress("+")} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonBir onPress={() => handleButtonPress("1")} />
          <ButtonIki onPress={() => handleButtonPress("2")} />
          <ButtonUc onPress={() => handleButtonPress("3")} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonSifir onPress={() => handleButtonPress("0")} />
          <ButtonNokta onPress={() => handleButtonPress(".")} />
          <ButtonEsittir onPress={() => handleButtonPress("=")} />
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  gradient: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    left: 15
  }
});

export default App;
