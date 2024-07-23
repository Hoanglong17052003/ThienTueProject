import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import {ChargingHeader} from '../constants/Charging';
import {useNavigation} from '@react-navigation/native';

const Charging = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
        <BlurView
          style={{
            height: '100%',
            width: '100%',
            paddingHorizontal: 20,
            position: 'relative',
            top: 66,
          }}
          blurType="gray"
          blurAmount={0.2}
          reducedTransparencyFallbackColor="gray">
          <View
            style={{
              height: 240,
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: 15,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <View
              style={{alignItems: 'center', justifyContent: 'center', gap: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                }}>
                <Image
                  source={require('../../assets/icons/recharge.png')}
                  style={{height: 17, width: 17, tintColor: '#253334'}}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#253334',
                    fontSize: 17,
                    fontWeight: '700',
                  }}>
                  Nạp năng lượng
                </Text>
                {/* delete Charging */}
                <TouchableOpacity
                onPress={()=> navigation.goBack()}
                  style={{position: 'relative', left: 75, top: -5}}>
                  <Image
                    source={require('../../assets/icons/close.png')}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 100,
                      tintColor: '#253334',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 230,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 1,
                  backgroundColor: '#253334',
                  opacity: 0.7,
                }}
              />
            </View>
            {/* Categories */}
            <View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 15,
                  gap: 10,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <Text style={{color: '#253334'}}>Bạn hiện có:</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 3,
                    }}>
                    <Text style={{color: '#253334'}}>210</Text>
                    <Image
                      source={require('../../assets/icons/energy.png')}
                      style={{height: 20, width: 10, tintColor: '#253334'}}
                    />
                  </View>
                </View>
                <Text
                  style={{textAlign: 'center', fontSize: 17, color: '#253334'}}>
                  Vui lòng chọn một trong các gói nạp:
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingHorizontal: 15,
                }}>
                {ChargingHeader.map((item, index) => {
                  return (
                    <View
                    key={index}
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#253334',
                          paddingHorizontal: 15,
                          paddingVertical: 15,
                          borderRadius: 15,
                        }}>
                        <Image
                          source={require('../../assets/icons/recharge.png')}
                          style={{height: 25, width: 25}}
                        />
                      </TouchableOpacity>
                      <View style={{paddingVertical: 10}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 13,
                              color: '#253334',
                              fontWeight: '600',
                            }}>
                            {item.package}
                          </Text>
                          <Image
                            source={require('../../assets/icons/energy.png')}
                            style={{height: 16, width: 8, tintColor: '#253334'}}
                          />
                        </View>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text
                            style={{
                              fontSize: 17,
                              color: '#253334',
                              fontWeight: '500',
                            }}>
                            ₫
                          </Text>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontSize: 15,
                              color: '#253334',
                              fontWeight: '500',
                            }}>
                            {item.price}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </BlurView>

    </SafeAreaView>
  );
};

export default Charging;

const styles = StyleSheet.create({});
