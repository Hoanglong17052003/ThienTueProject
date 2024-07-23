import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{textAlign: 'center', color: 'gray', paddingTop: 20, fontSize: 15}}>Chưa có thông báo mới nào</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})