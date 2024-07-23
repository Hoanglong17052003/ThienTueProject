import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Notification from '../TopTabScreens/Notification';
import Introduce from '../TopTabScreens/Introduce';
import Level from '../TopTabScreens/Level';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{title: 'Thông báo'}}
      />
      <Tab.Screen
        name="Introduce"
        component={Introduce}
        options={{title: 'Giới thiệu'}}
      />
      <Tab.Screen
        name="Level"
        component={Level}
        options={{title: 'Cấp bậc'}}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({});
