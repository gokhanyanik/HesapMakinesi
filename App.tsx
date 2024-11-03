import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import ButtonInput from './src/ButtonInput';


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
      <View style={{ flex: 1, alignItems: "stretch", left: 15 }}>
       
       
       
        <ButtonInput total={total} setTotal={setTotal}/>
       
       
       
       
       
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tuse} onPress={() => handleButtonPress("e")} >
            <Text style={styles.buttontext2}>e</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusµ} onPress={() => handleButtonPress("3.14")}>
            <Text style={styles.buttontext2}>µ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tussin} onPress={() => handleButtonPress("sin")} >
            <Text style={styles.buttontext2}>sin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusdeg} onPress={() => handleButtonPress("deg")}>
            <Text style={styles.buttontext2}>deg</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tusac} onPress={() => handleButtonPress("Ac")} >
            <Text style={[styles.buttontext, { color: "#C9DFF1" }]}>Ac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusbackspace} onPress={() => handleButtonPress("back")}>
            <Image
              source={require('./assets/images/icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusbölme} onPress={() => handleButtonPress("/")}>
            <Text style={[styles.buttontext, { color: "blue" }]}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tuscarpma} onPress={() => handleButtonPress("*")}>
            <Text style={[styles.buttontext, { color: "blue" }]}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus7} onPress={() => handleButtonPress("7")}>
            <Text style={[styles.buttontext, { fontSize: 25 }]}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus8} onPress={() => handleButtonPress("8")} >
            <Text style={[styles.buttontext, { fontSize: 25 }]}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus9} onPress={() => handleButtonPress("9")}>
            <Text style={[styles.buttontext, { fontSize: 25 }]}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tuscikarma} onPress={() => handleButtonPress("-")}>
            <Text style={[styles.buttontext, { color: "blue" }]}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }} >
          <TouchableOpacity style={styles.tus4} onPress={() => handleButtonPress("4")}>
            <Text style={[styles.buttontext, { fontSize: 25 }]}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus5} onPress={() => handleButtonPress("5")} >
            <Text style={[styles.buttontext, { fontSize: 25 }]}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus6} onPress={() => handleButtonPress("6")}>
            <Text style={[styles.buttontext, { fontSize: 25 }]}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tustopla} onPress={() => handleButtonPress("+")}>
            <Text style={[styles.buttontext, { color: "blue" }]}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus1} onPress={() => handleButtonPress("1")}>
            <Text style={[styles.buttontext, { fontSize: 25 }]}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus2} onPress={() => handleButtonPress("2")}>
            <Text style={[styles.buttontext, { fontSize: 25 }]}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus3} onPress={() => handleButtonPress("3")}>
            <Text style={[styles.buttontext, { fontSize: 25 }]}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus0} onPress={() => handleButtonPress("0")}>
            <Text style={[styles.buttontext, { fontSize: 25 }]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusnokta} onPress={() => handleButtonPress(".")}>
            <Text style={[styles.buttontext, { fontSize: 25 }]}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusesittir} onPress={() => handleButtonPress("=")}>
            <Text style={[styles.buttontext, { color: "white" }]}>=</Text>
          </TouchableOpacity>

        </View>
      </View>
    </LinearGradient>
  );
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
  },
  icon: {
    width: 21.8,
    height: 18,
    color: "#C9DFF1"
  },
  gradient: {
    flex: 1
  },
  buttontext: {
    width: 25,
    height: 52,
    fontFamily: 'Poppins', // Poppins fontunu kullanmak için eklenmiş olmalı
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 45,
    textAlign: 'center',
    color: "white",
  },
  buttontext2: {
    width: 35,
    height: 48,
    fontFamily: 'Poppins', // Poppins fontunu kullanmak için eklenmiş olmalı
    fontSize: 19,
    fontWeight: '900',
    lineHeight: 45,
    textAlign: 'center',
    color: "white",
  },
  tuse: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 40,
    top: 320,
    left: 34,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusµ: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 40,
    top: 320,
    left: 40,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tussin: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 40,
    top: 320,
    left: 46,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusdeg: {
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
  tusac: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 62,
    top: 326,
    left: 34,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusbackspace: {
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
  tuscarpma: {
    backgroundColor: "#ADD8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 62,
    top: 326,
    left: 52,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus7: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 338,
    left: 34,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus8: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 338,
    left: 40,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus9: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 338,
    left: 44,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tuscikarma: {
    backgroundColor: "#ADD8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 338,
    left: 50,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus4: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 344,
    left: 34,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus5: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 344,
    left: 40,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus6: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 344,
    left: 46,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tustopla: {
    backgroundColor: "#ADD8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 96,
    top: 345,
    left: 52,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
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
  tus2: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 315,
    left: 40,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus3: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 315,
    left: 46,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus0: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 142,
    height: 60,
    top: 336,
    left: 34,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusnokta: {
    backgroundColor: "#e3ecf6",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 336,
    left: 38,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusesittir: {
    backgroundColor: "#36BCFF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 96,
    top: 300,
    left: 44,
    gap: 10,
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5,
  },

});

export default App;
