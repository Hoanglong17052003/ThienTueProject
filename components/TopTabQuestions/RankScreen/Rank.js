import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Questions} from '../../constants/Question';

const Rank = () => {
  const categories = Questions.find(item => item.id === 3)?.categories;

  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <RenderItems item={item} />}
        keyExtractor={item => item.num.toString()}
        contentContainerStyle={{paddingTop: 10}}
      />
    </View>
  );
};

const RenderItems = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
          {item.num}
        </Text>
        <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10}}>
          <Image
            source={item.image}
            style={{height: 35, width: 35, tintColor: '#253334'}}
          />
        </View>
        <Text style={{fontSize: 17, color: '#fff', fontWeight: 'bold'}}>{item.name}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
        <Text style={{color: '#fff', fontSize: 17, fontWeight: '500'}}>{item.likes}</Text>
        <Image
          source={require('../../../assets/icons/heart.png')}
          style={{height: 17, width: 17, tintColor: '#fff'}}
        />
      </View>
    </View>
  );
};

export default Rank;

const styles = StyleSheet.create({});
