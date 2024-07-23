import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Questions} from '../../constants/Question';
import { useNavigation } from '@react-navigation/native';

const Free = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#253334',
        paddingVertical: 15,
        paddingHorizontal: 20,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Questions.map((item, id) => {
          return (
            <View key={id}>
              {item.categories &&
                item.categories.map((cat, index) => {
                  return (
                    <View key={index} style={{gap: 20}}>
                      {cat.infosFree &&
                        cat.infosFree.map((content, num) => {
                          return (
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
                              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                                {content.title}
                              </Text>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  position: 'relative',
                                  top: 5,
                                }}>
                                <Text style={{fontSize: 15}}>
                                  {content.timeActive} -{' '}
                                </Text>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 2,
                                  }}>
                                  <Text style={{fontSize: 15}}>
                                    {content.comment}
                                  </Text>
                                  <Image
                                    source={require('../../../assets/icons/comment.png')}
                                    style={{height: 15, width: 15}}
                                  />
                                </View>
                              </View>
                              <View
                                style={{
                                  justifyContent: 'center',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  gap: 10,
                                  position: 'relative',
                                  top: 10,
                                }}>
                                {content.images &&
                                  content.images.map(img => {
                                    return (
                                      <Image
                                        source={img}
                                        style={{
                                          height: 70,
                                          width: 40,
                                          borderRadius: 5,
                                        }}
                                      />
                                    );
                                  })}
                              </View>
                            </TouchableOpacity>
                          );
                        })}
                    </View>
                  );
                })}
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Send')}
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
          gap: 5
        }}>
        <Image
          source={require('../../../assets/icons/send-question.png')}
          style={{height: 20, width: 20, tintColor: '#fff'}}
        />
        <Text style={{textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: '600'}}>Gửi câu hỏi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Free;

const styles = StyleSheet.create({});
