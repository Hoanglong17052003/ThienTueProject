import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const DetailCategories = ({item}) => {
  const [click, setClick] = useState(item.insideCates[0]);
  const [color, setColor]= useState('1');

  const handleCLick = num => {
    if (num === 1) {
      setClick(item.insideCates[0]);
    } else if (num === 2) {
      setClick(item.insideCates[1]);
    } else if (num === 3) {
      setClick(item.insideCates[2]);
    } else if (num === 4) {
      setClick(item.insideCates[3]);
    }
  };

  return (
    <View style={{flex: 1, height: '100%', paddingBottom: 35}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 20}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            color: '#000',
            fontWeight: 'bold',
            opacity: 0.8,
          }}>
          Những lưu ý để tăng độ ứng nghiệm cho trải bài
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            flexDirection: 'row',
            gap: 20,
          }}>
          {item.insideCates.map((cat, num) => {
            const isActive = cat.num == color;
            const bgActive = isActive? 'lightgray': 'white';
            return (
              <TouchableOpacity
                onPress={() => {handleCLick(cat.num), setColor(cat.num)}}
                key={num}
                style={{
                  padding: 10,
                  paddingHorizontal: 15,
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 30,
                  backgroundColor: bgActive
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 17,
                    fontWeight: '500',
                  }}>
                  {cat.num}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {click && (
          <>
            <Text
              style={{
                textAlign: 'center',
                paddingBottom: 15,
                fontSize: 22,
                color: '#000',
                fontWeight: '500',
                opacity: 0.5,
              }}>
              {click.title}
            </Text>
            <View style={{gap: 15}}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: '400',
                  opacity: 0.7,
                }}>
                {click.description1}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: '400',
                  opacity: 0.7,
                }}>
                {click.description2}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: '400',
                  opacity: 0.7,
                }}>
                {click.description3}
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailCategories;
