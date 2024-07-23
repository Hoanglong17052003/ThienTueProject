import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {PersonApi} from '../constants/PersonApi';

const Level = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 50}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#253334',
            paddingTop: 20,
            fontSize: 15,
            fontWeight: 'bold',
            paddingBottom: 100,
          }}>
          Hệ thống cấp bậc Reader
        </Text>
        <View style={{backgroundColor: '#7e9790', borderRadius: 20}}>
          {PersonApi.ranks.map((item, index) => (
            <View key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>{item.level}</Text>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>{item.querent}</Text>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>{item.likes}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {item.id === 0 ? (
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>{item.armorial}</Text> // Render text "Huy hiệu" for id === 0
                  ) : (
                    [...Array(item.starCount)].map((_, starIndex) => (
                      <Image
                        key={starIndex}
                        source={require('../../assets/icons/star.png')}
                        style={{
                          height: 10,
                          width: 10,
                          tintColor: '#fff',      
                        }}
                        resizeMode="contain"
                      />
                    ))
                  )}
                </View>
              </View>

              <View
                style={{height: 1, width: '100%', backgroundColor: '#fff'}}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Level;
