import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../contants/Colors'
import Fonts from '../contants/Fonts'
import Display from '../utils/Display'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 1000);
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle='light-content' 
      backgroundColor={Colors.DEFAULT_GREEN}
      translucent
      />
      <Image 
      source={require('../assets/images/plate.png')}
      resizeMode='contain'
      style={styles.image}
      />
      <Text style={styles.titleText}>FooDelivery</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.DEFAULT_GREEN,
    },
    image: {
        height: Display.setHeight(30),
        width: Display.setWidth(60)
    },
    titleText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 32,
        fontFamily: Fonts.POPPINS_LIGHT
    }
})