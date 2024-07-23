import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../DetailComponents/Header';
import ScrollSpread from '../DetailComponents/ScrollSpread';

const SpreadTarot = () => {
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
            <Text style={{fontSize: 27, color: '#fff'}}>
              Bạn là một Reader?
            </Text>
            <Text style={{fontSize: 18, color: '#fff', opacity: 0.6}}>
              Tự giải bài cho mình và những người xung quanh bằng những kiểu
              trải bài dưới đây nhé!
            </Text>
          </View>
        </View>
        {/* ScrollView */}
        <View style={{height: '75%', paddingBottom: 20}}>
          <ScrollSpread />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SpreadTarot;

const styles = StyleSheet.create({});
