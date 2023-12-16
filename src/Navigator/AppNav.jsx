import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Auth/Login';

const AppNav = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <StatusBar showHideTransition={'slide'} backgroundColor={'#000'} />
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNav