import * as React from 'react';
import { StyleSheet, Text, View, Image, Navigator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Marker } from 'react-native-maps';
import Svg, { Path } from "react-native-svg";
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements'

let staticData = [{
  
  coordinates: 1000,

}
]

function MapScreen() {
 
  return (
    
<View style={styles.container}>
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
}}

        showsUserLocation={true} 

>
        {staticData.map((item, index) => (
          <Marker key={index} title={item.coordinates.desc} coordinate={item.coordinates} />
        ))}

        <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        color='white'
      />
      </MapView>

    </View>


  );
}


export default function App() {
return (

<NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Discover') {
              iconName = focused
                ? 'ios-search'
                : 'ios-musical-notes-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
            else if (route.name === 'Events') {
              iconName = focused ? 'ios-map' : 'ios-map-outline';
            }
            else if (route.name === 'Hire') {
              iconName = focused ? 'ios-musical-notes' : 'ios-musical-notes-outline';
            }
             else if (route.name === 'Payments') {
              iconName = focused ? 'ios-cash' : 'ios-cash-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Discover" component={MapScreen} />
        <Tab.Screen name="Events" component={HomeScreen} />
        <Tab.Screen name="Payments" component={RequestScreen} />
        <Tab.Screen name="Hire" component={RequestScreen} />
        <Tab.Screen name="Account" component={SettingsScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>

    //<NavigationContainer>
      //<Tab.Navigator>
       // <Tab.Screen name="Requests" component={HomeScreen} />
        //<Tab.Screen name="Events" component={TwoScreen} />
        //<Tab.Screen name="Tips" component={NewScreen} />
        //<Tab.Screen name="Chats" component={SettingsScreen} />
        //<Tab.Screen name="Account" component={AccountScreen} />
      //</Tab.Navigator>







    //</NavigationContainer>
);




const users = [
 {
    name: 'Tommie Davis Live',
    avatar: 'https://pbs.twimg.com/profile_images/774477149113683969/-iekTRQA_400x400.jpg'
 },
 
]

let search ="Filter Choices"
let bayridge = {
lat: 40.6264, 
long: -74.0299
}

const staticData = [
  { 
    coordinates: { latitude: 37.76383, longitude: -122.405766, desc: '♬' } 
    },
  { 
    coordinates: { latitude: 37.77584, longitude: -122.405478, desc: '🎸' } 
    },
  { 
    coordinates: { latitude: 37.8038, longitude: -122.402839, desc: '🥁' } 
    },
     { 
    coordinates: { latitude: 38.8038, longitude: -122.39299, desc: 'tommie davis ♬'.toUpperCase() } 
    },
    { 
    coordinates: { latitude: bayridge.lat, longitude: bayridge.long, desc: '♬' } 
    },
    
];

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}


function RequestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>

    <GooglePlacesAutocomplete
        placeholder={"Type a place"}
        query={{key: apiKey}}
        fetchDetails={true}
        onPress={(data, details = null) => console.log(data, details)}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
      />



    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      
    </View>
  );
}



}

//import { HomeScreen } from '/Screens/HomeScreen.js'
//import MapScreen from './Screens/Map'
//import { WebView } from 'react-native-webview';










//const apiKey = 'AIzaSyBYW6xpoKegXO5VX8lYFeOSL_HrWmAQFE0';







const Tab = createBottomTabNavigator();






const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
