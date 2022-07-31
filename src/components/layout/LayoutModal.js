import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const LayoutModal = ({ children }) => {
  return (
    <View style={[styles.container]}>
      {children}
    </View>
  );
};

export default LayoutModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    paddingHorizontal:wp('7%'),
    paddingTop:hp('1%'),
    maxHeight:hp('35%'),
  },

});
