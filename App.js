import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-elements';

export default function App() {

  const [name,setName] = useState("");

  const signIn = () => {
    // do something here
  }

  const register = () => {
    // do something here
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setName(value)}
        />
        <Text>{name}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          // onChangeText={text => setState({password:text})}
        />
      </View>
      <TouchableOpacity>
      <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
      <Button containerStyle={styles.button} onPress={register} title="Register"/>
      <View style={{height:30}}/>
      <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  text :{
    fontWeight: 'bold',
    fontSize: 50,
    color: "#000000",
    marginBottom: 40,
  },
  inputView: {
    width:"80%",
    backgroundColor:"#999999",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  forgotAndSignUpText:{
    fontSize: 20,
    fontWeight: "bold",
  },
  inputText: {
    height:50,
    color:"#000000",
    width: 270,
  },
  button: {
    width: 150,
    marginTop: 10,
    borderRadius: 25,
  },
  
});
