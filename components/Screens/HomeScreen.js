import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Header from '../DetailComponents/Header';
import Categories from '../DetailComponents/Categories';

const HomeScreen = () => {
  const [activeCate, setActiveCate] = useState('Tổng quan');
  return (
    <View
      style={{
        backgroundColor: '#253334',
        height: '100%',
        paddingHorizontal: 20,
      }}>
      <SafeAreaView style={{height: '100%'}}>
        <View style={{height: '22%'}}>
          <Header />
          {/* Title */}
          <View style={{paddingVertical: 20}}>
            <Text style={{fontSize: 27, color: '#fff'}}>
              Chào bạn, Hoàng Long
            </Text>
            <Text style={{fontSize: 18, color: '#fff', opacity: 0.6}}>
              Hôm nay bạn muốn xem trải bài gì?
            </Text>
          </View>
        </View>
        {/* Categories */}
        <View style={{height: '78%', paddingBottom: 20}}>
          <Categories activeCate={activeCate} setActiveCate={setActiveCate} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
