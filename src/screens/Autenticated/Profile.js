import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/headers/CustomHeader'

const Profile = ({navigation}) => {
  return (
    <View>
      <CustomHeader navigation={navigation} goBack rightPress={() => navigation.openDrawer()}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})