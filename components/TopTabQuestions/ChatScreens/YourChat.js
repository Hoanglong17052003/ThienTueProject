import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const YourChat = () => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#253334',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#7d9992',
          paddingHorizontal: 20,
          paddingVertical: 4,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 50,
          right: 21,
          borderRadius: 30,
          gap: 5,
        }}>
        <Image
          source={require('../../../assets/icons/info-2.png')}
          style={{height: 20, width: 20, tintColor: '#fff'}}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#fff',
            fontWeight: '600',
          }}>
          Hướng dẫn
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#7d9992',
          paddingHorizontal: 20,
          paddingVertical: 4,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          right: 21,
          borderRadius: 30,
          gap: 7,
        }}>
        <Image
          source={require('../../../assets/icons/create-room.png')}
          style={{height: 20, width: 20, tintColor: '#fff'}}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#fff',
            fontWeight: '600',
          }}>
          Tạo phòng
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default YourChat;

const styles = StyleSheet.create({});
