import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../DetailComponents/Header';
import CategoriesQuestions from '../DetailComponents/CategoriesQuestions';

const QuestionsTarot = () => {
  const [activeCate, setActiveCate] = useState('Câu hỏi');
  return (
    <View
      style={{
        backgroundColor: '#253334',
        height: '100%',
      }}>
      <SafeAreaView style={{height: '100%'}}>
        <View style={{paddingHorizontal: 20}}>
          <Header />
        </View>
        {/* Categories */}
        <View style={{height: '95%', paddingBottom: 55}}>
          <CategoriesQuestions
            activeCate={activeCate}
            setActiveCate={setActiveCate}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default QuestionsTarot;

const styles = StyleSheet.create({});
