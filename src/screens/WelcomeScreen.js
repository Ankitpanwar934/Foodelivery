import { StatusBar, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Colors from '../contants/Colors'
import Fonts from '../contants/Fonts'
import General from '../contants/General'
import WelcomeCard from '../components/WelcomeCard'
import Seperator from '../components/Seperator'

const Pagination = () => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
        </View>
    )
}

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle='dark-content'
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
        />
        <Seperator height={StatusBar.currentHeight}/>
        <Seperator height={{height: 15}}/>
        <View style={styles.welcomeListContainer}>
            <FlatList
            data={General.WELCOME_CONTENTS}
            keyExtractor={item=>item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            overScrollMode='never'
            renderItem={({item})=><WelcomeCard {...item}/>}
            />
        </View>
        <Pagination/>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageContainer: {
        flexDirection: 'row',
    },
    page: {
        height: 8,
        width: 15,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 32,
        marginHorizontal: 5
    }
})