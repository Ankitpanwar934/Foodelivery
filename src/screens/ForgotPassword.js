import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import Separator from '../components/Separator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../contants/Colors'
import Display from '../utils/Display'
import Fonts from '../contants/Fonts'
import Images from '../contants/Images'
import ToggleButton from '../components/ToggleButton'


const ForgotPassword = ({navigation}) => {

  return (
    <View style={styles.container}>
    <StatusBar 
    barStyle='dark-content'
    backgroundColor={Colors.DEFAULT_WHITE}
    translucent
    />
     <Separator height={StatusBar.currentHeight} />
    <Separator height={Display.setHeight(8)} />
     <View style={styles.headerContainer}>
        <Ionicons 
        name='chevron-back-outline' 
        size={30} 
        onPress={() => navigation.navigate('Signin')}/>
        <Text style={styles.headerTitle}>Forgot Password</Text>
     </View>
     <Text style={styles.title}>Forgot Password</Text>
     <Text style={styles.content}>Enter your email, so that we can help you to recover your password.</Text>  
     <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
            <Feather 
            name='mail' 
            size={22}
            Color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
            />
            <TextInput
            placeholder='Email'
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            />
        </View>
     </View>
    
     <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Reset Password</Text>
     </TouchableOpacity>
  


    </View>
  )
}

export default ForgotPassword
   
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
        marginTop: 30
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
        color: Colors.DEFAULT_BLACK
      },
      title: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
        color: Colors.DEFAULT_BLACK
      },
      content: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        color: Colors.DEFAULT_BLACK
      },
      inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
        marginBottom: 10
      },
      inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: Display.setHeight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1,
      },
      forgotPasswordContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      rememberMeText: {
        marginLeft: 10,
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
      forgotPasswordText: {
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_BOLD,
      },
      signupButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      signupButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
      },
     
})