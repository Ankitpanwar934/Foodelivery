import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Fonts from '../contants/Fonts'
import Colors from '../contants/Colors'
import Images from '../contants/Images'
const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images[image]}/>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  )
}

export default WelcomeCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 150
    },
    titleText: {
        fontSize: 22,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_BLACK
    },
    contentText: {
        fontSize:18,
        fontFamily: Fonts.POPPINS_LIGHT,
        textAlign: 'center',
        marginHorizontal: 20,
        color: Colors.DEFAULT_BLACK

    }
})