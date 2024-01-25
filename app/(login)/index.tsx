import React, { useState } from "react";
import { Link, router } from 'expo-router';
import { StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Text, View } from '../../components/Themed';
import apiService from "../../services/Api";
import storeService from "../../services/Store";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const login = () => {
        if (username !== "" && password !== "") {
            apiService.login(username, password).then((data: any) => {
                storeService.setUser(data);
                router.push('/home');
                setUsername('');
                setPassword('');
            }).catch((error) => {
                let statusCode = error.response.status;
                let message = statusCode === 401 ? "Invalid password!": "User doesn't exist!";
    
                invalidLogin(message);
            });
        } else if (username === "" && password === "") {
            let message = "Username and password are empty!";
            invalidLogin(message);
        } else if (username === "") {
            let message = "Username is empty!";
            invalidLogin(message);
        } else if (password === "") {
            let message = "Password is empty!";
            invalidLogin(message);
        }
    } 

    const forgotPassword = () => {
        Alert.alert('Comming soon!', 'We are still working on it...', [
            { text: 'Close'}
        ]);
    }

    const invalidLogin = (message: string) => {
        Alert.alert('Login error', message, [
            { text: 'Close'}
        ]);
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
                        placeholderTextColor="#262626"
                    />

                    <TextInput style={styles.input}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor="#262626"
                    />

                    <TouchableOpacity onPress={forgotPassword}>
                        <Text style={styles.forgotButtonText}>Forgot Password?</Text> 
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} onPress={login}>
                            <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity >

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
        height: '100%',
        backgroundColor: '#262626',
        display: 'flex',
        justifyContent: 'space-between'
    },
  
    logoContainer: {
        height: '36%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    logo: {
        width: 250,
        marginTop: 20,
        resizeMode: 'contain',
    },
    loginContainer: {
        width: '100%',
        paddingVertical: 30,
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
        color: '#262626',
        fontSize: 38,
        fontWeight: 'bold',
    },

    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    input: {
        width: '65%',
        height: 50,
        marginBottom: 25,
        borderBottomWidth: 1,
        color: '#262626',
    },
    forgotButtonText: {
        marginBottom: 25,
        color: '#262626',
    },

    loginButton: {
        width: '65%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#262626',
        borderRadius: 6,
    },
    loginButtonText: {
        fontSize: 17,
        lineHeight: 21,
        color: '#e6e6e6',
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
        borderColor: '#262626'
    },
    signUpButtonText: {
        fontSize: 17,
        lineHeight: 21,
        color: '#262626',
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
});