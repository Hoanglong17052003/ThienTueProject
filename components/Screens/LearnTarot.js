import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import ScrollLearn from '../DetailComponents/ScrollLearn';
import Header from '../DetailComponents/Header';

const LearnTarot = () => {
  return (
    <View
      style={{
        backgroundColor: '#253334',
        height: '100%',
        paddingHorizontal: 20,
      }}>
      <SafeAreaView style={{height: '100%'}}>
        <View style={{height: '25%'}}>
          <Header />
          {/* Title */}
          <View style={{paddingVertical: 20}}>
            <Text style={{fontSize: 27, color: '#fff'}}>Tự học Tarot!</Text>
            <Text style={{fontSize: 18, color: '#fff', opacity: 0.6}}>
              Những tài nguyên phong phú dưới đây sẽ giúp bạn làm chủ được bộ
              môn huyền học này.
            </Text>
          </View>
        </View>
        {/* ScrollView */}
        <View style={{height: '75%', paddingBottom: 20}}>
          <ScrollLearn />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LearnTarot;

const styles = StyleSheet.create({});
