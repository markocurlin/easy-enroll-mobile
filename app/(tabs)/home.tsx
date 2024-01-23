import React, { useState, useReducer, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, BackHandler } from 'react-native';
import { Text, View } from '../../components/Themed';
import { BleManager, Device  } from 'react-native-ble-plx';
import DeviceCard from '../../components/DeviceCard';
import storeService from '../../services/Store';

const reducer = (
  state: Device[],
  action: { type: 'ADD_DEVICE'; payload: Device } | { type: 'CLEAR' },
): Device[] => {
  switch (action.type) {
    case 'ADD_DEVICE':
      const { payload: device } = action;

      if (device && !state.find((dev) => dev.id === device.id)) {
        return [...state, device];
      }
      return state;
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

export default function HomeScreen() {
  const [scannedDevices, dispatch] = useReducer(reducer, []);
  const bleManager = new BleManager();
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    role: '',
    present: ''
  });
  
  useEffect(() => {
    let currentUser = storeService.getUser();

    setUser(currentUser);

    scanDevices();

    const disableBackButton = () => {
      return true;
    }

    BackHandler.addEventListener('hardwareBackPress', disableBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
    };
  }, []);

  const scanDevices = () => {
    dispatch({ type: 'CLEAR' })
    
    bleManager.startDeviceScan(null, null, (error, scannedDevice) => {
      if (error) {
        console.warn(error);
      }

      if (scannedDevice) {
        dispatch({ type: 'ADD_DEVICE', payload: scannedDevice });
      }
    });

    setTimeout(() => {
      bleManager.stopDeviceScan();
    }, 10000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`${user.firstName} ${user.lastName}`}</Text>
        <Text style={styles.subTitle}>Scan for lecture halls</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={scanDevices}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'CLEAR' })}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity >
      </View>

      <View style={styles.list}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={scannedDevices}
          renderItem={({ item }) => <DeviceCard device={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  titleContainer: {
    width: '85%',
    marginTop: 20,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e6e6e6'
  },
  subTitle: {
    fontSize: 15,
    color: '#e6e6e6'
  },
  buttonContainer: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 16,
  },
  button: {
    width: '47.5%',
    height: 50,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    color: '#e6e6e6',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  list: {
    height: '70%',
    width: '85%',
  }
});