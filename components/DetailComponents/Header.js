import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Icon1 from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({icon}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: icon ? 'space-between' : 'center',
      }}>
      {icon && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/back-icon.png')}
            style={{height: 40, width: 40, tintColor: '#fff'}}
          />
        </TouchableOpacity>
      )}
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 3,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
            0
          </Text>
          <Image
            source={require('../../assets/icons/energy.png')}
            style={{height: 25, width: 15, tintColor: '#fff'}}
          />
        </View>
        {/* Pressable and Charging */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Charge')}
          style={{
            backgroundColor: '#7d9992',
            paddingHorizontal: 10,
            paddingVertical: 4,
            maxWidth: 110,
            height: 35,
            borderRadius: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
              Nạp
            </Text>
            <Image
              source={require('../../assets/icons/recharge.png')}
              style={{height: 18, width: 18, tintColor: '#fff'}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Person')}>
        <Icon1 name="feed-person" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
