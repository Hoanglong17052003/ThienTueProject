import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './components/Navigator/TabNavigation';
import Person from './components/Screens/Person';
import InfoPerson from './components/Screens/InfoPerson';
import DetailsComponent from './components/Screens/DetailsComponent';
import Send from './components/Screens/Send';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Person"
          component={Person}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InfoPerson"
          component={InfoPerson}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsComponent}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
