import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Questions} from '../../constants/Question';

const Happen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#253334',
        paddingVertical: 15,
        paddingHorizontal: 20,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Questions.map((item, id) => (
          <View key={id}>
            {item.categories &&
              item.categories.map((cat, index) => (
                <View key={index} style={{gap: 20}}>
                  {cat.infos &&
                    cat.infos.map((content, num) => (
                      <TouchableOpacity
                        key={num}
                        style={{
                          backgroundColor: '#fff',
                          width: '100%',
                          borderRadius: 20,
                          paddingHorizontal: 20,
                          paddingVertical: 15,
                          paddingBottom: 20,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 5,
                            }}>
                            <Image
                              source={require('../../../assets/icons/reader-answering.png')}
                              style={{height: 35, width: 35}}
                            />
                            <View>
                              <Text
                                style={{
                                  fontSize: 15,
                                  color: '#253334',
                                  fontWeight: 'bold',
                                }}>
                                {content.name}
                              </Text>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  gap: 3,
                                }}>
                                <Text>{content.level}</Text>
                                <Image
                                  source={content.star}
                                  style={{height: 10, width: 10}}
                                />
                              </View>
                            </View>
                          </View>
                          <View
                            style={{
                              backgroundColor: '#7d9992',
                              padding: 5,
                              borderRadius: 30,
                            }}>
                            <Text style={{color: '#fff'}}>{content.fee}</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: 10,
                            position: 'relative',
                            top: 10,
                            gap: 7,
                          }}>
                          <Image
                            source={content.imgChat}
                            style={{height: 30, width: 30}}
                          />
                          <Text style={{letterSpacing: 1, color: '#253334'}}>
                            {content.state}
                          </Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                          {content.base === 0 && (
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 3,
                                backgroundColor: '#253334',
                                padding: 5,
                                borderRadius: 30,
                                paddingHorizontal: 15,
                                position: 'relative',
                                top: 10,
                                left: 10,
                              }}>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontSize: 15,
                                  fontWeight: 'bold',
                                }}>
                                {content.textBtnClick}
                              </Text>
                              <Image
                                source={content.iconBtnClick}
                                style={{
                                  height: 17,
                                  width: 17,
                                  tintColor: '#fff',
                                }}
                              />
                            </View>
                          )}
                          {num === 1 && (
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 7,
                                paddingHorizontal: 10,
                                position: 'relative',
                                top: 10,
                                left: 20,
                              }}>
                              <Text
                                style={{
                                  textAlign: 'center',
                                  color: '#253334',
                                  fontSize: 17,
                                  fontWeight: 'bold',
                                }}>
                                {content.replyPeople}
                              </Text>
                              <Image
                                source={content.imgQues}
                                style={{height: 30, width: 30}}
                              />
                            </View>
                          )}
                          {num === 2 && (
                            <View
                              style={{position: 'relative', top: 10, left: 10}}>
                              <Image
                                source={content.imgQues}
                                style={{height: 30, width: 30}}
                              />
                            </View>
                          )}
                          {num === 3 && (
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                backgroundColor: '#7d9992',
                                padding: 5,
                                borderRadius: 30,
                                paddingHorizontal: 10,
                                position: 'relative',
                                top: 10,
                                left: 10,
                              }}>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontSize: 15,
                                  fontWeight: 'bold',
                                }}>
                                {content.responding}
                              </Text>
                              <ActivityIndicator size="small" color="#fff" />
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>
                    ))}
                </View>
              ))}
          </View>
        ))}
      </ScrollView>
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
          gap: 5
        }}>
        <Image
          source={require('../../../assets/icons/info-2.png')}
          style={{height: 20, width: 20, tintColor: '#fff'}}
        />
        <Text style={{textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: '600'}}>Hướng dẫn</Text>
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
          gap: 7
        }}>
        <Image
          source={require('../../../assets/icons/create-room.png')}
          style={{height: 20, width: 20, tintColor: '#fff'}}
        />
        <Text style={{textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: '600'}}>Tạo phòng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Happen;

const styles = StyleSheet.create({});
