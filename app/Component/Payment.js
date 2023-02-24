import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {nmGrey, whiteColor} from '../utils/colors';
import RazorpayCheckout from 'react-native-razorpay';

const Payment = () =>{
    return (
        <View
          style={[
            styles.container
          ]}>
           <Text style={styles.titleText}>payment screen</Text>

           <TouchableOpacity style={styles.paymetButton}
           onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: '', // Your api key
              amount: '5000',
              name: 'foo',
              prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software'
              },
              theme: {color: '#F37254'}
            }
            RazorpayCheckout.open(options).then((data) => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            }).catch((error) => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
          }}
           >
                <Text style={styles.payText}>PAY</Text>
           </TouchableOpacity>
        </View>
      );
}


export default Payment;
const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 1,
    backgroundColor: whiteColor,
    flex:1,
  },
  paymetButton:{
    backgroundColor:'#3bb1e3',
    width:'80%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    position:'absolute',
    bottom:30,
    left:40
  },
  payText:{
    color:whiteColor,
    fontSize:20
  },
  titleText:{
    width:'100%',
   marginHorizontal:100,
   marginVertical:20,
   fontSize:30,
   color:'#3bb1e3'
  }
});
