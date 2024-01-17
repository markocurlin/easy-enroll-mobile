import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
      <Image
        source={require('../../assets/images/profile.png')}
        style={styles.profile}
        />
      </View>

      <View style={styles.profileInfoContainer}>
        <Text style={styles.profileTitle}>William Kurir</Text>
        <Text style={styles.usernameTitle}>@wkurir69</Text>
        <Text style={styles.emailTitle}>wkurir69@gmai.com</Text>
        
        <TouchableOpacity style={styles.editButton} onPress={() => {}}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity >
      
        <Image
          source={require('../../assets/images/logo-black.png')}
          style={styles.logo}
        />
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
  profileContainer: {
    height: 230,
    position: 'relative',
    alignItems: 'center',
    zIndex: 2,
  },
  profile: {
    width: 190,
    resizeMode: 'contain',
    position: 'absolute',
    top: -24
  },
  profileInfoContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'white',
    zIndex: 1
  },

  profileTitle: {
    alignItems: 'center',
    marginTop: 50,
    color: 'black',
    fontSize: 38,
    fontWeight: 'bold',
  },

  usernameTitle: {
    alignItems: 'center',
    color: 'grey',
    fontSize: 18,
    marginBottom: 2,
  },

  emailTitle: {
    alignItems: 'center',
    color: 'grey',
    fontSize: 18,
    marginBottom: 20,
  },


  editButton: {
    width: '65%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'black',
    borderRadius: 6,
  },
  editButtonText: {
    fontSize: 17,
    lineHeight: 21,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  logoutButton: {
    width: '65%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'black'
},
  logoutButtonText: {
    fontSize: 17,
    lineHeight: 21,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  logo: {
    height: 100,
    resizeMode: 'contain',
  },
});
