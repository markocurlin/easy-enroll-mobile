import React, { useState } from "react";
import { Link } from 'expo-router';
import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../../components/Themed';
import apiService from "../../services/Api";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const getUser = () => {
        //apiService.test();
        //console.log("test")
    } 

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo-white.png')}
                    style={styles.logo}
                />
            </View>

            <View style={styles.loginContainer}>
                <View style={styles.loginTitleContainer}>
                    <Text style={styles.loginTitle}>Login</Text>
                </View>
                <View style={styles.inputContainer}>
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

                    <TouchableOpacity>
                        <Text style={styles.forgotButtonText}>Forgot Password?</Text> 
                    </TouchableOpacity>

                    <Link href="/home" asChild>
                        <TouchableOpacity style={styles.loginButton} onPress={() => getUser()}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity >
                    </Link>

                    <Link href="/signup" asChild>
                        <TouchableOpacity style={styles.signUpButton} onPress={() => {}}>
                            <Text style={styles.signUpButtonText}>Sign up</Text>
                        </TouchableOpacity >
                    </Link>

                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 260,
        marginTop: 40,
        resizeMode: 'contain',
    },
    loginContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-evenly',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: 'white'
    },
    loginTitleContainer: {
        alignItems: 'center',
    },
    loginTitle: {
        width: '65%',
        alignItems: 'center',
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
    },

    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
    },

    input: {
        width: '65%',
        height: 50,
        marginBottom: 30,
        borderBottomWidth: 1,
        color: 'black',
    },
    forgotButtonText: {
        marginBottom: 30,
        color: 'black',
    },

    loginButton: {
        width: '65%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: 'black',
        borderRadius: 6,
    },
    loginButtonText: {
        fontSize: 17,
        lineHeight: 21,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },

    signUpButton: {
        width: '65%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'black'
    },

    signUpButtonText: {
        fontSize: 17,
        lineHeight: 21,
        color: 'black',
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
  });