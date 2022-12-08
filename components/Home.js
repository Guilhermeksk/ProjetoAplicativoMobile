import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function Home({navigation}){
    return(
        <ScrollView  style={styles.bloco}>
            <Text style={styles.texto}>PREVISÃO DO TEMPO BONNER </Text>
            <Image
            style={styles.img}
            source={{
                uri: 'https://midias.correiobraziliense.com.br/_midias/jpg/2022/10/28/675x450/1_whatsapp_image_2022_10_28_at_22_21_59__1_-26743021.jpeg?20221028222520?20221028222520',
            }}
            />
            <Text style={styles.texto}>Escolha a cidade que deseja ver a previsão do tempo</Text>
            
            <View>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Mongagua")}>
                    <Text style={styles.textBtn}>MONGAGUÁ</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("SP")}>
                    <Text style={styles.textBtn}>SÃO PAULO</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Santos")}>
                    <Text style={styles.textBtn}>SANTOS</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Osasco")}>
                    <Text style={styles.textBtn}>OSASCO</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Itanhaem")}>
                    <Text style={styles.textBtn}>ITANHAÉM</Text>
                </TouchableOpacity>
                <Text style={styles.textoEnd}>PROGRAMAÇÃO MOBILE</Text>
            </View>
           
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bloco: {
        marginTop:30,
        
    },
    texto:{
        fontSize: 30,
        textAlign: 'center',
        color: '#546EF0'
    },
    textoEnd:{
        fontSize: 20,
        margin: 30,
        textAlign: 'center',
        color: '#546EF0'
    },
    btn: {
        backgroundColor: '#0294E8',
        marginTop: 20,
        width: '80%',
        height: 30,
        marginLeft: '10%',
        borderRadius: 5
    },
    textBtn: {
        fontSize:20,
        color: '#FFF',
        textAlign: 'center'
    },
    img: {
        width: 400,
        height: 230,
        margin: 5,
        textAlign: 'center',
        borderRadius: 20,
        alignSelf: 'center'
},
});