import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
*/

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const logout = () => {
    // remove user from store
    router.push('/');
  }

  return (
    <Tabs
      screenOptions={{
        //tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: '#e6e6e6',
        headerTitleStyle: { marginLeft: 10, color: '#e6e6e6' },
        headerStyle: { backgroundColor: '#1A1A1A' },
        tabBarStyle: { height: '7%', backgroundColor: '#1A1A1A', paddingTop: 5, paddingBottom: 5 },
        headerRight: () => (
          <Pressable onPress={logout}>
            {({ pressed }) => (
              <MaterialIcons 
                name="logout" 
                size={25} color="#e6e6e6"
                style={{ marginRight: 25, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        ),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}