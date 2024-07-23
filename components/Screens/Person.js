import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import TopTabNavigation from '../Navigator/TopTabNavigation';

const Person = () => {
  const [showCoin, setShowCoin] = useState(true);
  const [momoAccount, setMomoAccount] = useState('');
  const navigation = useNavigation();

  const handleInputChange = text => {
    setMomoAccount(text);
  };
  const noTextInput = () => {
    if (momoAccount.trim() === '') {
      Alert.alert(
        'Thông báo',
        'Số xu của bạn chưa đủ mức tối thiểu là 100 xu!',
        [{text: 'OK'}],
      );
      return;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        paddingTop: 60,
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'center',
            position: 'relative',
            left: 20,
          }}>
          <View
            style={{
              paddingHorizontal: 25,
              paddingVertical: 25,
              backgroundColor: '#253334',
              borderRadius: 1000,
            }}>
            <Image
              source={require('../../assets/icons/avatar-ranking.png')}
              style={{height: 100, width: 100, tintColor: '#fff'}}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('InfoPerson')}>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 100,
                backgroundColor: '#7e9790',
              }}>
              <Image
                source={require('../../assets/icons/edit-icon.png')}
                style={{height: 20, width: 20, tintColor: '#fff'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', top: -5, right: -70}}>
            <Image
              source={require('../../assets/icons/close.png')}
              style={{height: 30, width: 30, tintColor: '#253334'}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 30, color: '#253334', fontWeight: 'bold'}}>
            Hoàng Long
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <Text style={{fontSize: 20}}>0</Text>
              <Image
                source={require('../../assets/icons/avatar-ranking.png')}
                style={{height: 20, width: 20, tintColor: '#253334'}}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <Text style={{fontSize: 20}}>0</Text>
              <Image
                source={require('../../assets/icons/heart.png')}
                style={{height: 20, width: 20, tintColor: '#253334'}}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <Text style={{fontSize: 20}}>0/0</Text>
              <Image
                source={require('../../assets/icons/coin.png')}
                style={{height: 20, width: 20, tintColor: '#253334'}}
              />
            </View>
            <TouchableOpacity
              onPress={() => setShowCoin(false)}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 15,
                backgroundColor: '#7e9790',
              }}>
              <Text style={{textAlign: 'center', fontSize: 15, color: '#fff'}}>
                Rút xu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {!showCoin && (
          <View
            style={{
              height: 225,
              width: '100%',
              backgroundColor: '#7e9790',
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 17, color: '#fff'}}>
              Bạn hiện có 0 xu tương ứng với 0 đồng. Bạn cần ít nhất 100 xu để
              có thể rút về ví MoMo của mình.
            </Text>
            <Text style={{paddingVertical: 10, fontSize: 17, color: '#fff'}}>
              Nhập số ví MoMo của bạn:{' '}
            </Text>
            <View
              style={{
                width: '100%',
                paddingHorizontal: 15,
                paddingVertical: 15,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <TextInput
                placeholder="Nhập ví MoMo của bạn ở đây..."
                style={{fontSize: 17, textAlign: 'left'}}
                placeholderTextColor={'#253334'}
                keyboardType="default"
                value={momoAccount}
                onChangeText={handleInputChange}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 15,
                paddingVertical: 10,
              }}>
              <TouchableOpacity
                onPress={noTextInput}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  backgroundColor: '#253334',
                  borderRadius: 30,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    color: '#fff',
                    fontWeight: '500',
                  }}>
                  Rút xu
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowCoin(!showCoin)}
                style={{
                  paddingHorizontal: 23,
                  paddingVertical: 10,
                  backgroundColor: '#253334',
                  borderRadius: 30,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    color: '#fff',
                    fontWeight: '500',
                  }}>
                  Hủy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View style={{paddingHorizontal: 18, paddingVertical: 10}}>
          <Text style={{fontSize: 15}}>
            Bạn có thể kiếm thêm xu bằng cách trả lời trong các trải bài có phí,
            bạn sẽ được 5 xu nếu người hỏi chọn xem câu trả lời của bạn.
          </Text>
        </View>
      </View>
      {/* Categories */}
      <View style={{flex: 1}}>
        <TopTabNavigation />
      </View>
    </View>
  );
  z;
};

export default Person;

const styles = StyleSheet.create({});
