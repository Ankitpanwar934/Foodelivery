import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import Separator from '../components/Separator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from '../contants/Colors'
import Display from '../utils/Display'
import Fonts from '../contants/Fonts'
import Images from '../contants/Images'
import ToggleButton from '../components/ToggleButton'
import { StaticImageService } from '../services'
import CountryCodes from '../contants/CountryCodes'


const RegisterPhoneScreen = () => {

  const [selectedCountry, setSelectedCountry] = useState(CountryCodes.find(country => country.name==='India'));

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
        <Text style={styles.headerTitle}>Register Phone</Text>
     </View>
     <Text style={styles.title}>Register Phone</Text>
     <Text style={styles.content}>Enter your registered phone number to login</Text>  
     <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.countryListContainer}>
        <Image 
        source={{uri: StaticImageService.getFlagIcon(selectedCountry.code)}} 
        style={styles.flagIcon}/>
        <Text style={styles}>{selectedCountry.dial_code}</Text>
        <MaterialIcons/>
      </TouchableOpacity>
      <View style={styles.phoneInputContainer}>
        <TextInput/>
      </View>
     </View>
     </View>
  )
}

export default RegisterPhoneScreen

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
    // backgroundColor: Colors.LIGHT_GREY,
    // paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 50,
    alignItems: 'center',
    // borderRadius: 8,
    // borderWidth: 0.5,
    // borderColor: Colors.LIGHT_GREY2,
    // justifyContent: 'center',
    // marginBott om: 10,
    flexDirection: 'row'
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 10,
    borderRadius: 8,
    height: Display.setHeight(6),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: 'row'
  },
  phoneInputContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
     backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    // marginHorizontal: 20,
    // marginVertical: 50,
    // alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    // justifyContent: 'center',
    // marginBott om: 10,
    // flexDirection: 'row'
  },
  flagIcon: {
    height: 20,
    width: 20,
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