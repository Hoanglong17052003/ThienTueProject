import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Learns } from '../constants/Learn'

const ScrollLearn = () => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingVertical: 20}}
    style={{height: '100%'}}>
    {Learns.map((item, index) => (
        <TouchableOpacity key={index} style={{paddingBottom: 20}}>
          <View
            style={{
              backgroundColor: '#fff',
              height: 180,
              borderRadius: 20,
              position: 'relative'
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
                      {item.name}
                    </Text>
                  </View>
                  <Text
                    style={{
                      paddingTop:5,
                      fontSize: 14,
                      fontWeight: '400',
                    }}
                    numberOfLines={3}>
                    {item.title}
                  </Text>
                </View>
                <View style={{width: 150, position: 'absolute',top: 40}}>
                  <TouchableOpacity
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
                        source={require('../../assets/icons/see-more.png')}
                        style={{height: 15, width: 30, tintColor: '#fff', resizeMode: 'contain'}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Right */}
              <View>
                <View>
                  <Image
                    source={item.image}
                    style={{height: 130, width: 170, resizeMode: 'contain'}}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
  </ScrollView>
  )
}

export default ScrollLearn

const styles = StyleSheet.create({})