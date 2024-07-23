import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const InfoPerson = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = selectedDate => {
    setDate(selectedDate);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{position: 'relative'}}>
      <View style={{paddingHorizontal: 20, gap: 20}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', top: -10, right: 8}}>
          <Image
            source={require('../../assets/icons/close.png')}
            style={{height: 30, width: 30, tintColor: '#253334'}}
          />
        </TouchableOpacity>
        <View style={{gap: 10}}>
          <Text style={{color: '#253334', fontSize: 20, fontWeight: 'bold'}}>
            Tên (*)
          </Text>
          <View
            style={{
              width: '100%',
              borderWidth: 0.7,
              borderColor: 'gray',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="Hoang long"
              style={{paddingHorizontal: 15, paddingVertical: 10, fontSize: 17}}
              placeholderTextColor={'#253334'}
            />
          </View>
        </View>
        <View style={{gap: 10}}>
          <Text
            style={{
              color: '#253334',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            Ngày sinh
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 0.7,
              borderColor: 'gray',
              borderRadius: 5,
              paddingHorizontal: 15,
              paddingVertical: 10,
              width: '100%',
            }}
            onPress={showDatePicker}>
            <TextInput
              editable={false}
              placeholder="17/05/2003"
              value={date.toLocaleDateString()}
              placeholderTextColor="#253334"
            />
            {/* Modal DatePicker */}
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              headerTextIOS="Chọn ngày sinh"
              cancelTextIOS="Cancel"
              confirmTextIOS="OK"
            />
          </TouchableOpacity>
        </View>
        <View style={{gap: 10}}>
          <Text style={{color: '#253334', fontSize: 20, fontWeight: 'bold'}}>
            Giới tính
          </Text>
          <View
            style={{
              width: '100%',
              borderWidth: 0.7,
              borderColor: 'gray',
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="Nam"
              style={{paddingHorizontal: 15, paddingVertical: 10, fontSize: 17}}
              placeholderTextColor={'#253334'}
            />
          </View>
        </View>
        <View style={{gap: 10}}>
          <Text style={{color: '#253334', fontSize: 20, fontWeight: 'bold'}}>
            Giới thiệu
          </Text>
          <View
            style={{
              width: '100%',
              borderWidth: 0.7,
              borderColor: 'gray',
              borderRadius: 5,
              height: 80,
            }}>
            <TextInput
              placeholder=""
              style={{paddingHorizontal: 15, paddingVertical: 10, fontSize: 17}}
              placeholderTextColor={'#253334'}
            />
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: '#253334',
              borderRadius: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              Cập nhật
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InfoPerson;

const styles = StyleSheet.create({});
