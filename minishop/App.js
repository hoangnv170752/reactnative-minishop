import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Settings } from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
// import Settings from './src/screens/app/Settings';
import Profile from './src/screens/app/Profile';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import iconSet from '@expo/vector-icons/build/FontAwesome5';
import { AntDesign } from '@expo/vector-icons'; 

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   <Tab.Navigator options={{ headerShown : false}}>
//     <Tab.Screen name='Home' component={Home} />
//     <Tab.Screen name='Favorites' component={Favorites} />
//     <Tabs.Screen name='Profile' component={Profile} />
//   </Tab.Navigator>
// }
function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGray },
      tabBarInactiveBackgroundColor: colors.blue ,
      tabBarActiveBackgroundColor: colors.lightGray, 
      
    })}>
      <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name='Favorites' component={Favorites} options={{
          tabBarLabel: 'Heart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }} />
      {/* <Tabs.Screen name='Profile' component={Profile} /> */}
    </Tab.Navigator>
  )
}
export default function App() {
  // useEffect(() => {

  // }, [])
  const isSignedin = true;
  const theme = {
    colors: {
      background: colors.white,
    }
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedin ? (
            <>
              <Stack.Screen name = "Tabs" component = {Tabs} options={{ headerShown : false}} />
            </>
          ) : (
          <>
            <Stack.Screen name = "Splash" component={Splash} options = {{headerShown : false}}/>
            <Stack.Screen name = "Signup" component={Signup} options = {{headerShown : false}}/>
            <Stack.Screen name = "Signin" component={Signin} options = {{headerShown : false}}/>
          </>
        )}        
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


