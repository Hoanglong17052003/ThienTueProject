import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Free from '../TopTabQuestions/QuestionScreens/Free';
import Charge from '../TopTabQuestions/QuestionScreens/Charge';
import YourQuestion from '../TopTabQuestions/QuestionScreens/YourQuestion';
import Happen from '../TopTabQuestions/ChatScreens/Happen';
import YourChat from '../TopTabQuestions/ChatScreens/YourChat';

const Tab = createMaterialTopTabNavigator();

export const QuestionScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#253334'},
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: {fontSize: 15, color: '#fff'},
        tabBarIndicatorStyle: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen name="Free" component={Free} options={{title: 'Miễn phí'}} />
      <Tab.Screen
        name="Charge"
        component={Charge}
        options={{title: 'Có phí'}}
      />
      <Tab.Screen
        name="YourQuestion"
        component={YourQuestion}
        options={{title: 'Của bạn'}}
      />
    </Tab.Navigator>
  );
};

export const ChatScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#253334'},
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: {fontSize: 15, color: '#fff'},
        tabBarIndicatorStyle: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen
        name="Happen"
        component={Happen}
        options={{title: 'Đang xảy ra'}}
      />
      <Tab.Screen
        name="YourChat"
        component={YourChat}
        options={{title: 'Của bạn'}}
      />
    </Tab.Navigator>
  );
};
