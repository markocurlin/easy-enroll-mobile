import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '../../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import storeService from '../../services/Store';

export default function ProfileScreen() {
  const [id, setId] = useState(0);
  const [role, setRole] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    role: '',
    present: ''
  });

  const changeProfilePhoto = () => {
    Alert.alert('Comming soon!', 'We are still working on it...', [
      { text: 'Close'}
    ]);
  }

  const editProfile = () => {
    setIsDisabled(!isDisabled);
  }

  const saveProfile = () => {

  }

  useEffect(() => {
    let currentUser = storeService.getUser();

    setUser(currentUser);
    setId(currentUser.id);
    setFirstName(currentUser.firstName);
    setLastName(currentUser.lastName);
    setUsername(currentUser.username);
    setEmail(currentUser.email);
    setRole(currentUser.role);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileIconContainer}>
        <FontAwesome name='user-circle' size={150} color='#e6e6e6'/>
        <View style={styles.editIconContainer}>
          <FontAwesome name='image' size={20} color='#e6e6e6' onPress={changeProfilePhoto}/>
        </View>
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`${user.firstName} ${user.lastName}`}</Text>
          <TouchableOpacity onPress={editProfile}>
            <FontAwesome name='edit' size={24} color='#e6e6e6' />
          </TouchableOpacity >
        </View>
        <Text style={styles.roleTitle}>Student</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { color: isDisabled ? '#e6e6e6' : 'gray', borderColor: isDisabled ? '#e6e6e6' : 'gray' }]}
            onChangeText={(firstName) => setFirstName(firstName)}
            value={firstName}
            placeholder='First name'
            placeholderTextColor={ isDisabled ? '#e6e6e6' : 'gray' }
            editable={isDisabled}
          />
          <TextInput
            style={[styles.input, { color: isDisabled ? '#e6e6e6' : 'gray', borderColor: isDisabled ? '#e6e6e6' : 'gray' }]}
            onChangeText={(lastName) => setLastName(lastName)}
            value={lastName}
            placeholder='Last name'
            placeholderTextColor={ isDisabled ? '#e6e6e6' : 'gray' }
            editable={isDisabled}
          />
          <TextInput
            style={[styles.input, { color: isDisabled ? '#e6e6e6' : 'gray', borderColor: isDisabled ? '#e6e6e6' : 'gray' }]}
            onChangeText={(email) => setEmail(email)}
            value={email}
            placeholder='Email'
            placeholderTextColor={ isDisabled ? '#e6e6e6' : 'gray' }
            editable={isDisabled}
          />
          <TextInput
            style={[styles.input, { color: isDisabled ? '#e6e6e6' : 'gray', borderColor: isDisabled ? '#e6e6e6' : 'gray' }]}
            onChangeText={(username) => setUsername(username)}
            value={username}
            placeholder="Username"
            placeholderTextColor={ isDisabled ? '#e6e6e6' : 'gray' }
            editable={isDisabled}
          />
          <TextInput 
            style={[styles.input, { color: isDisabled ? '#e6e6e6' : 'gray', borderColor: isDisabled ? '#e6e6e6' : 'gray' }]}
            onChangeText={(password) => setPassword(password)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={ isDisabled ? '#e6e6e6' : 'gray' }
            editable={isDisabled}
          />
          <TextInput 
            style={[styles.input, { color: isDisabled ? '#e6e6e6' : 'gray', borderColor: isDisabled ? '#e6e6e6' : 'gray' }]}
            onChangeText={(repeatPassword) => setRepeatPassword(repeatPassword)}
            value={repeatPassword}
            secureTextEntry={true}
            placeholder="Repeat password"
            placeholderTextColor={ isDisabled ? '#e6e6e6' : 'gray' }
            editable={isDisabled}
          />
        </View>
        <TouchableOpacity style={[styles.button, { opacity: isDisabled ? 1 : 0.5 }]} onPress={saveProfile} disabled={!isDisabled}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity >
      </View>
      <View style={styles.lecturesContainer}>
        <Text style={styles.lecturesHistoryTitle}>Lectures history</Text>
        <View style={styles.horizontalLine}/>
        <Text style={styles.lectureTitle}>Comming soon...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  profileIconContainer: {
    marginTop: 30,
  },
  editIconContainer: {
    width: 45,
    height: 45,
    position: 'absolute',
    right: '0%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 50,
    borderColor: '#262626',
    borderWidth: 4,
  },
  profileInfoContainer: {
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 11,
    color: '#e6e6e6'
  },
  roleTitle: {
    fontSize: 18,
    color: '#e6e6e6'
  },
  inputContainer: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 43,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
  button: {
    width: '85%',
    height: 50,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#1A1A1A',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    color: '#e6e6e6',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  lecturesContainer: {
    width: '71%',
    marginBottom: 20,
  },
  lecturesHistoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e6e6e6'
  },
  horizontalLine: {
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
  lectureTitle: {
    fontSize: 15,
    color: '#e6e6e6'
  },
});