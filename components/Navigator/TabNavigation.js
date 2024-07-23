import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SpreadTarot from '../Screens/SpreadTarot';
import LearnTarot from '../Screens/LearnTarot';
import QuestionsTarot from '../Screens/QuestionsTarot';
import StackNavigation from './StackNavigation';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const [activeColor, setActiveColor] = useState('Home');
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#58ceb2',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#253334',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: -10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/spreads.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                position: 'absolute',
                top: 13,
                tintColor: focused ? '#fff' : 'gray',
              }}
            />
          ),
        }}
        listeners={{
          tabPress: () => setActiveColor('Home')
        }} 
      />
      <Tab.Screen
        name="Spread"
        component={SpreadTarot}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/tu-trai-bai.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                position: 'absolute',
                top: 10,
                tintColor: focused ? '#fff' : 'gray',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Learn"
        component={LearnTarot}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/learn.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                position: 'absolute',
                top: 13,
                tintColor: focused ? '#fff' : 'gray',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Questions"
        component={QuestionsTarot}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/info.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                position: 'absolute',
                top: 13,
                tintColor: focused ? '#fff' : 'gray'
              }}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
