import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Api from './Api';


export default function Mongagua() {
  const [dados, setDados] = useState("");

  const [cidade, setCidade] = useState('Mongagua')
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,description,time,wind_speedy,forecast,max,min,date&key=c6186edf&city_name=${cidade},SP`)
    setDados(response.data.forecast);
  
  }

  function limpar(){
    setDados("");
  } 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoTitulo}>PREVISÃO DO TEMPO MONGAGUÁ</Text>
        <View style={styles.imgs}>
        <Image
      style={styles.imgg}
      source={{
        uri: 'https://naturam.com.br/wp-content/uploads/2022/01/Praia-Agenor-de-Campos.jpg',
      }}
      />
      </View>


      <View style={styles.blocos}>
        <TouchableOpacity
        style={styles.btn}
        onPress={carregaDados}
        >
          <Text style={styles.btnTexto}>BUSCAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.btn}
        onPress={limpar}
        >
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>

      </View>
      
        {/**
         * <Tempo  data={dados}/>
         */}
        <FlatList
          data={dados}
          renderItem={({item}) => {
            return (
              <View style={styles.tempo}>
                <Text>Data: {item.date}</Text>
                <Text>Max: {item.max}</Text>
                <Text>Min: {item.min}</Text>
                <Text>Min: {item.description}</Text>
              </View>
            );
          }}
        
        />
              </View>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  tempo:{
    marginLeft: '10%',
    marginBottom: 10
  },
  textoTitulo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#0073FA',
  },
  header: {
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgg:{
    width: 320,
    height: 190,
    margin: 5,
    borderRadius: 20,
  },
  imgs: {
    alignItems: 'center',
  },
  blocos: {
    fontSize: 20,
  },
  texto: {
    color: '#4281F5',
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    width: 265,
    height: 35,
    fontSize: 20,
    borderColor: '#4281F5'
  },
  btn: {
    width: 265,
    height: 45,
    backgroundColor: '#0073FA',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  btnTexto: {
    fontSize: 30,
    color: '#FFF'
  }
});