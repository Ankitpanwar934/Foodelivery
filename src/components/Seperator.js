import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Seperator = ({height, width, ...extraProps}) => {
  <View style={{height, width, ...extraProps}}/>
};

Seperator.defaultProps = {
    height: 0,
    width: 0,
}

export default Seperator

const styles = StyleSheet.create({})