import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
// import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import Profile from './src/screens/app/Profile';
import Settings from './src/screens/app/Settings';
import ProductDetails from './src/screens/app/ProductDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import iconSet from '@expo/vector-icons/build/FontAwesome5';
import { AntDesign } from '@expo/vector-icons'; 
import QRcode from './src/screens/QRCode';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="CreateListing" component={CreateListing} options={{ headerShown: false }} />
      {/* <Stack.Screen name="MyListings" component={MyListings} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  )
}
function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home.png');
        } else if (route.name === 'ProfileStack') {
          icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/tabs/bookmark_active.png')
            : require('./src/assets/tabs/bookmark.png');
        } else if (route.name === 'QRcode') {
          icon = focused
            ? require('./src/assets/eye.png')
            : require('./src/assets/eye_closed.png');
        } 
        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGrey }
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
      <Tab.Screen name="QRcode" component={QRcode} />
      {/* <Tab.Screen name='Home' component={Home} options={{
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
      <Tab.Screen name='ProductDetails' component={ProductDetails} options={{
          tabBarLabel: 'Heart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }} /> */}
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
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
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


