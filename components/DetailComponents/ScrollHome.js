import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ScrollHome = ({data}) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingVertical: 20}}
      style={{height: '100%'}}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={{paddingBottom: 20}}>
          <View
            style={{
              backgroundColor: '#fff',
              height: 180,
              borderRadius: 20,
              position: 'relative',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}>
              {/* Left */}
              <View
                style={{
                  width: 160,
                }}>
                <View style={{position: 'absolute', top: -60}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#253334',
                        fontWeight: 'bold',
                      }}
                      numberOfLines={2}>
                      {item.title}
                    </Text>
                  </View>
                  <Text
                    style={{
                      paddingTop: 5,
                      fontSize: 14,
                      fontWeight: '400',
                    }}
                    numberOfLines={3}>
                    {item.description}
                  </Text>
                </View>
                <View style={{width: 150, position: 'absolute', top: 40}}>
                  <TouchableOpacity
                    onPress={() => navigation.push('Details', {...item})}
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      backgroundColor: '#253334',
                      borderRadius: 30,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: '#fff',
                          fontWeight: 'bold',
                        }}>
                        Trải bài ngay
                      </Text>
                      <Image
                        source={require('../../assets/icons/pick-a-card.png')}
                        style={{height: 20, width: 20}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Right */}
              <View>
                <View>
                  <Image
                    source={require('../../assets/icons/spread-icon-3.png')}
                    style={{height: 105, width: 140}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                    top: 25,
                    left: 75,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingRight: 10,
                      gap: 5,
                    }}>
                    <Text style={{position: 'relative', left: 3, fontSize: 17}}>
                      50
                    </Text>
                    <Image
                      source={require('../../assets/icons/energy.png')}
                      style={{height: 23, width: 13, tintColor: '#253334'}}
                    />
                  </View>
                  <View>
                    <Image
                      source={require('../../assets/icons/info-2.png')}
                      style={{height: 25, width: 25}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ScrollHome;

const styles = StyleSheet.create({});
