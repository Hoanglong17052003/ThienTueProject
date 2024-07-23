import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {categoriesData} from '../constants/Home';
import ScrollHome from './ScrollHome';

const Categories = ({activeCate, setActiveCate}) => {
  const [data, setData] = useState(categoriesData[0].infos);

  const handleCates = catId => {
    if (catId === 1) {
      // console.log('1');
      setData(categoriesData[0].infos);
    } else if (catId === 2) {
      // console.log('2');
      setData(categoriesData[1].infos);
    } else if (catId === 3) {
      // console.log('3');
      setData(categoriesData[2].infos);
    } else if (catId === 4) {
      // console.log('4');
      setData(categoriesData[3].infos);
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 20,
        }}>
        {categoriesData.map((cat, index) => {
          let isActive = cat.name == activeCate;
          let activeButton = isActive ? 'white' : 'gray';
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleCates(cat.catId);
                setActiveCate(cat.name);
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: activeButton,
                  height: 70,
                  width: 70,
                  borderRadius: 20,
                }}>
                <Image
                  source={cat.image}
                  style={{height: 37, width: 37}}
                />
              </View>
              <Text
                style={{
                  color: activeButton,
                  paddingTop: 10,
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollHome data={data} />
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({});
