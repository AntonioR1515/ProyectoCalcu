import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default function App() {
  const [input, setInput] = useState(0)
  const [total, setTotal] = useState(null)
  const [signo, setSigno] = useState(null)
  const [prevInput, setPrevInput] = useState(0)
  const botones = [1, 2, 3, '+',
    4, 5, 6, '-',
    7, 8, 9, 'x',
    'C', 0, '=', '/']

//onst tecla= evento.target.innerText


  const handlePress = (evento) => {
    const valortecla =evento.target.innerText
    // Solo aceptar números
    console.log('tecla', valortecla)
    console.log('input', input) 
    if (!isNaN(valortecla)) {
      setInput(Number(input + "" + valortecla))
      console.log('input', input)
    } else {
      let resultado = calcular(signo, prevInput, input)
      setTotal(resultado)
      setPrevInput(total)
      if (valortecla === '=') {
        setSigno(null)
      } else {
        setSigno(valortecla)
        // Permite seguir realizando operaciones después de obtener el resultado
        setPrevInput(total || input)
        setInput(0)
        console.log('input2', input)
      }
    }
  }

  const resetCalculadora = () => {
    setSigno(null)
    setInput(0)
    setTotal(null)
    setPrevInput(0)
  }


  const calcular = (operacion, a, b) => {
    switch (operacion) {
      case "+": return suma(a, b);
      case "-": return resta(a, b);
      case "x": return multiplicacion(a, b);
      case "/": return division(a, b);
      case "C":
        resetCalculadora()
        break;
    }
  }

  const suma = (a, b) => a + b
  const resta = (a, b) => a - b
  const multiplicacion = (a, b) => a * b
  const division = (a, b) => {
    if (a === 0 || b === 0) {
      return 0
    }
    return a / b
  }

  return (
    <View style={styles.container}>
      <Text>Applicacion de Calculadora</Text>

      <View style={styles.contenedor}>
        <View>
          <TextInput style={styles.textInput} value={total || input} readOnly />
        </View>
        <View style={styles.fila}>
          {botones.slice(0, 3).map((boton, i) => <Button key={i} title={boton} onPress={handlePress} style={styles.botonC} />)}
          {botones.slice(3, 4).map((boton, i) => <Button key={i} title={boton} onPress={handlePress} style={styles.buttonop} />)}
        </View>
        <View style={styles.fila}>
          {botones.slice(4, 7).map((boton, i) => <Button key={i} title={boton} onPress={handlePress} style={styles.botonC} />)}
          {botones.slice(7, 8).map((boton, i) => <Button key={i} title={boton} onPress={handlePress} style={styles.buttonop} />)}
        </View>
        <View style={styles.fila}>
          {botones.slice(8, 12).map((boton, i) => <Button key={i} title={boton} onPress={handlePress} style={styles.botonC} />)}
        </View>
        <View style={styles.fila}>
          {botones.slice(12, 16).map((boton, i) => <Button key={i} title={boton} onPress={handlePress}
            style={{ ...styles.botonOperacion, ...styles.botonResultado, ...styles.botonC }}
          />)}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    gap: 10,
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
   // justifyContent: 'center'
  },
  fila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  columna: {
    display: 'grid',

  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textInput: {
   // backgroundColor: '#613434',
   backgroundColor: '#222020',
   color: '#FFECEC',
   //textAlign: "center"
   textAlign: "end"
  },
  botonNumero2: {
    backgroundColor: '#D9D9D9',
    color: '#000',
    fontSize: 20
  },
  buttonop: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15       
 },
  botonOperacion2: {
   // backgroundColor: '#90C0F8',
    backgroundColor: '#613434 !important' ,
    color:'#fff'
   // color: '#FFECEC'
  // color: '#613434 !important'
  },
  // botonC: {
  //  // backgroundColor: '#F9F4F4',
  //  backgroundColor: '#613434',
  //   color: '#F9F4F4',
  // },
  botonResultado2: {
    backgroundColor: '#9500CA',
    padding: 12,
    color: '#FFFBFB',
  }
});
