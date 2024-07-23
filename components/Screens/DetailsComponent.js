import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../DetailComponents/Header';
import DetailCategories from '../DetailComponents/DetailCategories';

const DetailsComponent = (props) => {
  const item = props.route.params;
  // console.log('long ngu nhu bo ', item)
  return (
    <View
      style={{
        backgroundColor: '#253334',
        height: '100%',
        flex: 1,
      }}>
      <SafeAreaView style={{height: '100%'}}>
        <View style={{height: '50%', flex: 1}}>
          <View style={{paddingHorizontal: 20}}>
            <Header icon={true} />
          </View>
          {/* Title  */}
          <View
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/icons/back-2.png')}
              style={{height: 230, width: 120, resizeMode: 'contain'}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
                paddingBottom: 15,
              }}>
              <Image
                source={require('../../assets/icons/info-icon.png')}
                style={{height: 17, width: 17, tintColor: '#fff'}}
              />
              <Text style={{color: '#fff', fontSize: 15}}>
                Nhấp vào bộ bài để xào bài
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#7d9992',
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 30,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Bốc bài
                </Text>
                <Image
                  source={require('../../assets/icons/pick-a-card.png')}
                  style={{height: 15, width: 15, tintColor: '#fff'}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
          {/* Noi dung ben duoi */}
        <View
          style={{
            height: '100%',
            backgroundColor: '#fff',
            flex: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <DetailCategories item={item}/>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DetailsComponent;

const styles = StyleSheet.create({});
