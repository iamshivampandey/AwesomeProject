import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {nmGrey, whiteColor} from '../utils/colors';
const Screen1 = () =>{
    return (
        <View
          style={[
            styles.container
          ]}>
           <Text>This is screen 1</Text>
        </View>
      );
}


export default Screen1;
const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 1,
    backgroundColor: whiteColor,
  },
});
