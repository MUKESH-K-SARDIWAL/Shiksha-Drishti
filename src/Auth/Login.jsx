import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
const Login = () => {
    return (
        <View style={[login.container]}>
            <View style={[login.header]}></View>
        </View>
    )
}

export default Login

const login = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    header:{
        flexDirection:'row'
    }
})