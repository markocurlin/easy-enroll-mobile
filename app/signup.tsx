import React, { useState } from "react";
import { router } from 'expo-router';
import { StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Text, View } from '../components/Themed';
import apiService from "../services/Api";

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const addUser = () => {
    if (isSignupValid()) {
      let user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        role: 'student'
      }

      apiService.addUser(user).then(() => {
        Alert.alert('Success', 'User added!', [
          { 
            text: 'Close',
            onPress: () => {
              router.push('/');
            }
          }
        ]);
      }).catch((error) => {
        alertMessage(`Sign up error: ${error.response.status}`);
      });
    }
  }

  const isSignupValid = () => {
    if (firstName === "") {
      alertMessage("First name is empty!");
      return false;
    }

    if (lastName === "") {
      alertMessage("Last name is empty!");
      return false;
    }

    if (email === "") {
      alertMessage("Email is empty!");
      return false;
    }

    if (username === "") {
      alertMessage("Username is empty!");
      return false;
    }

    if (password === "") {
      alertMessage("Password is empty!");
      return false;
    }

    if (repeatPassword === "") {
      alertMessage("Repeated password is empty!");
      return false;
    }

    if (password !== repeatPassword) {
      alertMessage("Passwords don't match!");
      return false;
    }

    return true;
  }

  const alertMessage = (message: string) => {
    Alert.alert('Sign up error', message, [
        { text: 'Close'}
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo-gray.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input} 
          onChangeText={(firstName) => setFirstName(firstName)}
          value={firstName}
          placeholder="First name"
          placeholderTextColor="#262626"
        />

        <TextInput
          style={styles.input} 
          onChangeText={(lastName) => setLastName(lastName)}
          value={lastName}
          placeholder="Last name"
          placeholderTextColor="#262626"
        />

        <TextInput
          style={styles.input} 
          onChangeText={(email) => setEmail(email)}
          value={email}
          placeholder="Email"
          placeholderTextColor="#262626"
        />

        <TextInput
          style={styles.input} 
          onChangeText={(username) => setUsername(username)}
          value={username}
          placeholder="Username"
          placeholderTextColor="#262626"
        />

        <TextInput style={styles.input}
          onChangeText={(password) => setPassword(password)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#262626"
        />

        <TextInput style={styles.input}
          onChangeText={(repeatPassword) => setRepeatPassword(repeatPassword)}
          value={repeatPassword}
          secureTextEntry={true}
          placeholder="Repeat password"
          placeholderTextColor="#262626"
        />

        <TouchableOpacity style={styles.signUpButton} onPress={addUser}>
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
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '65%',
    height: 50,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#262626',
    color: '#262626',
  },
  signUpButton: {
    width: '65%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#262626',
    borderRadius: 6,
  },
  signUpButtonText: {
    fontSize: 17,
    lineHeight: 21,
    color: '#e6e6e6',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});