import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <LinearGradient
      colors={['white', '#ADD8FF']}
      start={{ x: -0.1, y: 0 }}
      end={{ x: 1.1, y: 0 }}
      style={styles.gradient}
    >

      <View style={{flex:1,alignItems:"stretch",left:15}}>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tuse} >
            <Text style={styles.buttontext2}>e</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusµ} >
            <Text style={styles.buttontext2}>µ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tussin} >
            <Text style={styles.buttontext2}>sin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusdeg} >
            <Text style={styles.buttontext2}>deg</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tusac} >
            <Text style={styles.buttontext}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusbackspace} >
            <Icon name='backspace' size={30} color="#000" />

          </TouchableOpacity>
          <TouchableOpacity style={styles.tusbölme} >
            <Text style={styles.buttontext}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tuscarpma} >
            <Text style={styles.buttontext}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus7} >
            <Text style={styles.buttontext}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus8} >
            <Text style={styles.buttontext}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus9} >
            <Text style={styles.buttontext}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tuscikarma} >
            <Text style={styles.buttontext}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus4} >
            <Text style={styles.buttontext}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus5} >
            <Text style={styles.buttontext}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus6} >
            <Text style={styles.buttontext}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tustopla} >
            <Text style={styles.buttontext}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus1} >
            <Text style={styles.buttontext}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus2} >
            <Text style={styles.buttontext}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tus3} >
            <Text style={styles.buttontext}>3</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tus0} >
            <Text style={styles.buttontext}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusnokta} >
            <Text style={styles.buttontext}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tusesittir} >
            <Text style={styles.buttontext}>=</Text>
          </TouchableOpacity>

        </View>

      </View>


    </LinearGradient>
  );
}
const styles = StyleSheet.create({

  gradient: {
    flex: 1,
  },
  buttontext: {
    width: 25,
    height: 48,
    fontFamily: 'Poppins', // Poppins fontunu kullanmak için eklenmiş olmalı
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 45,
    textAlign: 'center',
    color: "black",
    // background-blend-mode: overlay,

  },
  buttontext2: {
    width: 17,
    height: 48,
    fontFamily: 'Poppins', // Poppins fontunu kullanmak için eklenmiş olmalı
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 45,
    textAlign: 'left',
  },
  tuse: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tussin: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tusdeg: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tusac: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tusbackspace: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
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
    margin:5
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
    margin:5
  },
  tus7: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tus8: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tus9: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
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
    margin:5
  },
  tus4: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tus5: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tus6: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
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
    margin:5
  },
  tus1: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tus2: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tus3: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tus0: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tusnokta: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    margin:5
  },
  tusesittir: {
    backgroundColor: "#ADD8FF",
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
    margin:5
  },

});

export default App;
