import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [ valorAlcool, setValorAlcool ] = useState('');
  const [ valorGasolina, setValorGasolina ] = useState('');
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ resultadoFinal, setResultadoFinal ] = useState('');

  function Calcular(){

    if(valorAlcool == '' || valorGasolina == ''){
      alert("Preencha todos os campos!");
      return;
    }

    let valorResultado = valorAlcool / valorGasolina;
    console.log(valorResultado);

    if(valorResultado < 0.7){
      setResultadoFinal('Alcoll')
    }else{
      setResultadoFinal('Gasolina')
    }
    setModalVisible(true);
  }

  function FecharModal(){
    setModalVisible(false);
    setValorAlcool('');
    setValorGasolina('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image size={30} source={require('./assets/logo.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF', marginTop: 20 }}>Qual melhor opção?</Text>
      </View>
      <View style={{ flex: 1, marginTop: 40 }}>
        <View>
          <Text style={styles.label}>Álcool (preço por litro):</Text>
          <TextInput 
            style={styles.input}
            value={valorAlcool}
            onChangeText={ (texto) => setValorAlcool(texto)}
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={styles.label}>Gasolina (preço por litro):</Text>
          <TextInput 
            style={styles.input}
            value={valorGasolina}
            onChangeText={ (texto) => setValorGasolina(texto)}
            keyboardType='numeric'
          />
        </View>
        <TouchableOpacity style={ styles.btn } onPress={Calcular}>
          <Text style={{ color: "#FFF", fontSize: 18 }}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.areaModal}>
          <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <Image size={30} source={require('./assets/gas.png')} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#005520', marginTop: 20 }}>Compensa usar {resultadoFinal}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center'  }}>
            <Text style={{color: '#FFF', fontSize: 18, fontWeight: '500', marginBottom: 10}}>Com os Preços:</Text>
            <Text style={{color: '#FFF', marginBottom: 10}}>Álcool: R${valorAlcool}</Text>
            <Text style={{color: '#FFF', marginBottom: 10}}>Gasolina: R${valorGasolina}</Text>
            <TouchableOpacity style={styles.btnModal} onPress={FecharModal}>
              <Text style={{ color: '#ff1010' }}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    marginTop: 30,
  },
  label: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 15,
    marginBottom: 6,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 30,
    marginHorizontal: 15,
  },
  btn: {
    backgroundColor: "#ff1010",
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  areaModal:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
    width: '100%',
    height: '100%',
  },
  btnModal: {
    backgroundColor: "transparent",
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ff1010',
    width: 300,
    marginTop: 10,
  },
});
