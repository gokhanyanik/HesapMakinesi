import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';



function App(): React.JSX.Element {

  const [total, setTotal] = useState("")

  return (
    <LinearGradient
      colors={['white', '#ADD8FF']}
      start={{ x: -0.1, y: 0 }}
      end={{ x: 1.1, y: 0 }}
      style={styles.gradient}
    >

      

      <View style={{ flex: 1, alignItems: "stretch", left: 15 }}>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tuse} onPress={() => console.log("merhaba")} >
            <Text style={styles.buttontext2}>e</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusµ} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext2}>µ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tussin} onPress={() => console.log("merhaba")} >
            <Text style={styles.buttontext2}>sin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusdeg} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext2}>deg</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tusac} onPress={() => console.log("merhaba")} >
            <Text style={[styles.buttontext, { color: "blue" }]}>Ac</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusbackspace} onPress={() => console.log("merhaba")}>
            <Icon name='backspace' size={30} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusbölme} onPress={() => console.log("merhaba")}>
            <Text style={[styles.buttontext, { color: "blue" }]}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tuscarpma} onPress={() => console.log("merhaba")}>
            <Text style={[styles.buttontext, { color: "blue" }]}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus7} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus8} onPress={() => console.log("merhaba")} >
            <Text style={styles.buttontext}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus9} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tuscikarma} onPress={() => console.log("merhaba")}>
            <Text style={[styles.buttontext, { color: "blue" }]}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }} >
          <TouchableOpacity style={styles.tus4} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus5} onPress={() => console.log("merhaba")} >
            <Text style={styles.buttontext}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus6} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tustopla} onPress={() => console.log("merhaba")}>
            <Text style={[styles.buttontext, { color: "blue" }]}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus1} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus2} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus3} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext}>3</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus0} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusnokta} onPress={() => console.log("merhaba")}>
            <Text style={styles.buttontext}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusesittir} onPress={() => console.log("merhaba")}>
            <Text style={[styles.buttontext, { color: "white" }]}>=</Text>
          </TouchableOpacity>

        </View>

      </View>


    </LinearGradient>
  );
}
const styles = StyleSheet.create({

  gradient: {
    flex: 1,
    //justifyContent:"space-between"
  },
  buttontext: {
    width: 25,
    height: 48,
    fontFamily: 'Poppins', // Poppins fontunu kullanmak için eklenmiş olmalı
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 45,
    textAlign: 'center',
    color: "white",
    // background-blend-mode: overlay,
    textShadowRadius: 10

  },
  buttontext2: {
    width: 17,
    height: 48,
    fontFamily: 'Poppins', // Poppins fontunu kullanmak için eklenmiş olmalı
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 45,
    textAlign: 'left',
    color: "white",
    textShadowRadius: 10
  },
  tuse: {
    
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 40,
    top: 320,
    left: 34,
    gap: 10,
    //borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusµ: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 40,
    top: 320,
    left: 40,
    gap: 10,
    //  borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tussin: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 40,
    top: 320,
    left: 46,
    gap: 10,
    //  borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusdeg: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 40,
    top: 320,
    left: 52,
    gap: 10,
    // borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusac: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 62,
    top: 326,
    left: 34,
    gap: 10,
    //borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusbackspace: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 62,
    top: 326,
    left: 40,
    gap: 10,
    // borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
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
    //borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
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
    // borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus7: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 338,
    left: 34,
    gap: 10,
    //  borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus8: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 338,
    left: 40,
    gap: 10,
    //  borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus9: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 338,
    left: 44,
    gap: 10,
    //   borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
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
    // borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus4: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 344,
    left: 34,
    gap: 10,
    //    borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus5: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 344,
    left: 40,
    gap: 10,
    // borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus6: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 344,
    left: 46,
    gap: 10,
    //   borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
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
    // borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus1: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 315,
    left: 34,
    gap: 10,
    // borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus2: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 315,
    left: 40,
    gap: 10,
    // borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus3: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 315,
    left: 46,
    gap: 10,
    // borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tus0: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 142,
    height: 60,
    top: 336,
    left: 34,
    gap: 10,
    //  borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },
  tusnokta: {
    backgroundColor: "#E6F8FF",
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 60,
    top: 336,
    left: 38,
    gap: 10,
    //  borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
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
    //  borderTopWidth: 1,   // Üst kenara 1 px kalınlığında sınır
    borderRadius: 16,
    paddingTop: 6,   // üst kenar boşluğu,içeri doğru
    paddingBottom: 6,// alt kenar boşluğu,içeri doğru
    paddingLeft: 4,  // sol kenar boşluğu,içeri doğru
    paddingRight: 4, //sağ kenar boşluğu,içeri doğru
    margin: 5
  },

});

export default App;
