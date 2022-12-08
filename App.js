import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "/components/Home"
import Mongagua from '/components/Mongagua';
import SP from '/components/SP';
import Santos from '/components/Santos';
import Osasco from '/components/Osasco';
import Itanhaem from '/components/Itanhaem';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

        
    
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Guilherme" component={Home} />
        <Stack.Screen name="Mongagua" component={Mongagua} />
        <Stack.Screen name="SP" component={SP} />
        <Stack.Screen name="Santos" component={Santos} />
        <Stack.Screen name="Osasco" component={Osasco} />
        <Stack.Screen name="Itanhaem" component={Itanhaem} />
      </Stack.Navigator>
    </NavigationContainer>
 

  );
  


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
