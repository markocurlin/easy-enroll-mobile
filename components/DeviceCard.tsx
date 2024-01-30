import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { Text } from './Themed';
import { Device, ConnectionOptions} from 'react-native-ble-plx';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import storeService from '../services/Store';

type DeviceCardProps = {
    device: Device;
};
export default function DeviceCard({ device }: DeviceCardProps){
    const [isConnected, setIsConnected] = useState(false);
    const [user, setUser] = useState({
      id: '',
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      role: '',
      present: false
    });

    useEffect(() => {
      let currentUser = storeService.getUser();
      setUser(currentUser);
    }, []);

    const connect = async () => {
      await device.connect().then(() => {
        setIsConnected(true);
      }).catch(error => console.error(error));
    }

    const disconnect = async () => {
      const isDeviceConnected = await device.isConnected();

      if (isDeviceConnected) {
        await device.cancelConnection();
      }

      setIsConnected(false);
    }

    const handleDeviceCard = () => {
      if (isConnected) {
        disconnect();
      } else {
        connect();
      }
    }

    const registerForLecture = async () => {
      if (isConnected) {
        await device.writeCharacteristicWithoutResponseForService(
          "0000ABCD-0000-1000-8000-00805F9B34FB",
          "0000ABCD-0000-1000-8000-00805F9B34FC",
          `${user.id}${!user.present}`
        ).then(() => {
          Alert.alert('Success', 'You have been registered for the lecture!', [
            { text: 'Close'}
          ]);
        }).catch(() => {
          Alert.alert('Error', 'Error while registering for the lecture!', [
            { text: 'Close'}
          ]);
        })
      }
    }

    return (
        device.name !== null ?
        <TouchableOpacity style={styles.container} onPress={handleDeviceCard}>
          <View style={styles.device}>
            <MaterialIcons name="bluetooth-connected" size={25} color="#e6e6e6" style={{ marginLeft: 8 }}/>
            
            <View style={styles.deviceInfo}>
              <Text style={styles.deviceName}>
                { device.name === null ? device.id : device.name }
              </Text>
              <Text style={styles.connectedInfo}>
                { isConnected ? 'Connected' : 'Not connected' }
              </Text>
            </View>
          </View>
          { isConnected ? (
            <TouchableOpacity onPress={registerForLecture}>
              <AntDesign name="pluscircleo" size={25} color="#e6e6e6" style={{ paddingHorizontal: 10 }}/>
            </TouchableOpacity>
          ) : (<></>) }
        </TouchableOpacity>
        :
        <></>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
      padding: 12,
      elevation: 4,
      backgroundColor: '#1A1A1A',
      shadowColor: '#1A1A1A',
      shadowOpacity: 0.2,
      borderRadius: 6
    },
    device: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    deviceInfo: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 18
    },
    deviceName: {
      color: '#e6e6e6',
      fontSize: 17,
      letterSpacing: 0.25,
    },
    connectedInfo: {
      color: '#e6e6e6',
      fontSize: 14,
      letterSpacing: 0.2,
    }
  });