import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import Colors from '../contants/Colors'
import Fonts from '../contants/Fonts'

const SplashScreen = () => {
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
        height: 150,
        width: 150
    },
    titleText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 32,
        fontFamily: Fonts.POPPINS_LIGHT
    }
})