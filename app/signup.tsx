import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export default function SignUpScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo-black.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input} 
          onChangeText={(fullName) => setFullName(fullName)}
          value={fullName}
          placeholder="Full name"
          placeholderTextColor="black"
        />

        <TextInput
          style={styles.input} 
          onChangeText={(email) => setEmail(email)}
          value={email}
          placeholder="Email"
          placeholderTextColor="black"
        />

        <TextInput
          style={styles.input} 
          onChangeText={(username) => setUsername(username)}
          value={username}
          placeholder="Username"
          placeholderTextColor="black"
        />

        <TextInput style={styles.input}
          onChangeText={(password) => setPassword(password)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="black"
        />

        <TouchableOpacity style={styles.signUpButton} onPress={() => {}}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity >
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  logoContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
  input: {
    width: '65%',
    height: 50,
    marginBottom: 20,
    borderBottomWidth: 1,
    color: 'black',
  },
  signUpButton: {
    width: '65%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 6,
  },
  signUpButtonText: {
    fontSize: 17,
    lineHeight: 21,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});