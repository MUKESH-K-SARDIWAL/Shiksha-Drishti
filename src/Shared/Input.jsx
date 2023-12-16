import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
const Input = ({ handleChange, namekey, handleBlur, value, heading, password }) => {
   
    const { width } = Dimensions.get('window');
    return (
        <Animated.View style={{ width: width - 48 }} entering={FadeInDown.delay(250).springify()}>
            <Text style={[InputStyle.inputHeading]}>{heading}</Text>
            <TextInput
                name={namekey}
                style={[InputStyle.input]}
                onChangeText={handleChange(namekey)}
                onBlur={handleBlur(namekey)}
                value={value}
                secureTextEntry={password}
            />
        </Animated.View>
    )
}

export default Input

const InputStyle = StyleSheet.create({
    input: {
        backgroundColor: '#C1C1C155',
        borderRadius: 8,
        height:44,
        width: '100%',
        paddingHorizontal: 14,
        paddingVertical:11,
        marginTop: 4
    },
    inputHeading: {
        fontFamily: 'Medium',
        fontSize: 14,
        color: '#656565',
        letterSpacing: .6,
        paddingLeft: 5
    }

});