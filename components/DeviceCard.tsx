import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Text } from './Themed';
import { Device  } from 'react-native-ble-plx';
import { MaterialIcons } from '@expo/vector-icons';

type DeviceCardProps = {
    device: Device;
};

export default function DeviceCard({ device }: DeviceCardProps){
    const [isConnected, setIsConnected] = useState(false);
  
    useEffect(() => {
          // is the device connected?
      device.isConnected().then(setIsConnected);
    }, [device]);
  
    return (
      <TouchableOpacity style={styles.container}>
          <MaterialIcons name="bluetooth-connected" size={25} color="#e6e6e6" style={{ marginLeft: 8 }}/>
          
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceName}>
              { device.name === null ? device.id : device.name }
            </Text>

            <Text style={styles.connectedInfo}>
              { isConnected ? 'Connected' : 'Not connected' }
            </Text>
            
          </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 8,
      padding: 12,
      elevation: 4,
      backgroundColor: '#1A1A1A',
      shadowColor: '#1A1A1A',
      shadowOpacity: 0.2,
      borderRadius: 6
    },
    deviceInfo: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 18,
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