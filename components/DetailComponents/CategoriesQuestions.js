import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import {Questions} from '../constants/Question';
import {QuestionScreens, ChatScreens} from '../Navigator/TopTabQuestion';
import Rank from '../TopTabQuestions/RankScreen/Rank';

const CategoriesQuestions = ({setActiveCate}) => {
  const [activeCategory, setActiveCategory] = useState('Câu hỏi');

  const handleClick = catName => {
    setActiveCategory(catName);
    setActiveCate(catName);
  };

  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        {Questions.map((cat, id) => {
          return (
            <View
              key={id}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity
                onPress={() => handleClick(cat.name)}
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                }}>
                <Image source={cat.image} style={{height: 37, width: 37}} />
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 10,
                  color:
                    cat.name === 'Câu hỏi'
                      ? '#fff'
                      : activeCategory === cat.name
                      ? 'pink'
                      : '#fff',
                  fontWeight: '500',
                  fontSize: 15,
                }}>
                {cat.name}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={{flex: 1}}>
        {activeCategory === 'Câu hỏi' ? (
          <QuestionScreens />
        ) : activeCategory === 'Trò chuyện' ? (
          <ChatScreens />
        ) : activeCategory === 'BXH Reader' ? (
          <Rank />
        ) : null}
      </View>
      
    </View>
  );
};

export default CategoriesQuestions;
