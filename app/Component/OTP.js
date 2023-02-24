import { color } from '@rneui/themed/dist/config';
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {nmGrey, whiteColor} from '../utils/colors';
const OTP = () =>{
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()
    const [text1,setText1]= useState('')
    const [text2,setText2]= useState('')
    const [text3,setText3]= useState('')
    const [text4,setText4]= useState('')
    const [text5,setText5]= useState('')
    const [text6,setText6]= useState('')
    return (
        <View
          style={styles.container}>
           <Text style={styles.headerText}>OTP verification</Text>  
            <View
            style={styles.inputBox}>
            <TextInput style={[styles.textInput,styles.bor]} maxLength={1} ref={ref1}
               onChangeText={(text)=>{
                setText1(text)
                if(text.length >=1)
                   ref2.current.focus();
               }
            }
            />
            <TextInput style={styles.textInput} maxLength={1} ref={ref2} 
             onChangeText={(text)=>{
                setText2(text)
                if(text.length >=1){ 
                  ref3.current.focus();
                }else if(text.length < 1){
                  ref1.current.focus();
                }   
               }}
            />
            <TextInput style={styles.textInput} maxLength={1} ref={ref3} 
             onChangeText={(text)=>{
                setText3(text)
                if(text.length >=1){ 
                  ref4.current.focus();
                }else if(text.length < 1){
                  ref2.current.focus();
                }   
               }}/>
            <TextInput style={styles.textInput} maxLength={1} ref={ref4} 
             onChangeText={(text)=>{
                setText4(text)
                if(text.length >=1){ 
                  ref5.current.focus();
                }else if(text.length < 1){
                  ref3.current.focus();
                }   
               }}/>
            <TextInput style={styles.textInput} maxLength={1} ref={ref5} 
             onChangeText={(text)=>{
                setText5(text)
                if(text.length >= 1){
                  ref6.current.focus()
                }else if(text.length < 1){
                  ref4.current.focus()
                }
               }}/>
            <TextInput style={styles.textInput} maxLength={1} ref={ref6} 
             onChangeText={(text) => {
                setText6(text)
                if(text.length < 1)
                   ref5.current.focus();
                }
            }
               />
            </View>
            <TouchableOpacity  style={styles.verifyButton}>
                <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
      );
}


export default OTP;
const styles = StyleSheet.create({
    container: {
        flex:1,
    paddingTop: 10,
    backgroundColor: whiteColor,
  },
  headerText:{
    fontSize:20,
    marginTop:20,
    alignSelf:'center',
    color:'#3bb1e3'
  },
  inputBox:{
    alignSelf:"center",
    marginVertical:100,
    flexDirection:'row'
  },
  textInput:{
    textAlign:'center',
    width:30,
    height:30,
    borderRadius:5,
    borderWidth:1,
    marginHorizontal:7
  },
  verifyButton:{
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
  submitText:{
    fontSize:18,
    color:whiteColor,
    fontWeight:'600'
  }
});
