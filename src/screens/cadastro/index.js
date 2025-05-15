//1 Passo - Importar o React
import React from 'react';

//2 Passo - Importando os componentes do React Native
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

//3 Passo - Criar a função que cria tela de Login
export default function Cadastro() {
 return (
   <View style={styles.container}>

      <Text style={styles.titulo}>Criar uma conta</Text>

      <TextInput style={styles.input} placeholder="Digite seu Nome" />
      <TextInput style={styles.input} placeholder="Digite seu E-mail" />
      <TextInput style={styles.input} placeholder="Digite sua Senha" />

      <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Criar</Text>
      </TouchableOpacity>
   </View>
  );
}

//4 Passo - Criando o style da tela de Login
const styles = StyleSheet.create({
  titulo: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#1D1D2E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#101026',
    color: '#8A8A8A',
    fontSize: 20,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },

  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#3FFFA3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  textButton: {
    color: '#1D1D2E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  image: {
    width: 261,
    height: 58,
    marginBottom: 30,
    resizeMode: 'stretch',  
  },
});