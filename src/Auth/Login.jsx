import { StyleSheet, Text, View, StatusBar, Dimensions, Button, TouchableOpacity, Pressable, KeyboardAvoidingView, Keyboard } from 'react-native'
import React from 'react'
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { Formik } from 'formik';
import Input from '../Shared/Input';


const Login = () => {
    return (
        <View style={[login.container]}>
            <KeyboardAvoidingView >
                <Pressable style={[login.innerContainer]} onPress={Keyboard.dismiss}>
                    <View style={[login.header]}>
                        <Animated.Text entering={FadeInLeft.delay(150).springify()} style={[login.first, login.headingText]} >
                            Shiksha
                        </Animated.Text>
                        <Animated.Text entering={FadeInRight.delay(150).springify()} style={[login.second, login.headingText]}>
                            Drishti
                        </Animated.Text>
                    </View>
                    <View style={[login.formContainer]}>
                        <Animated.Text style={[login.formheading]} entering={FadeInLeft.delay(200).springify()}>Login</Animated.Text>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={values => console.log(values)}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <View>
                                    <View style={{ flexDirection: 'column', gap: 18 }}>
                                        <Input heading="Email" handleChange={handleChange} handleBlur={handleBlur} value={values.email} password={false} namekey='email' />

                                        <Input heading="Password" handleChange={handleChange} handleBlur={handleBlur} password={true} value={values.password} namekey='password' />

                                    </View>
                                    <TouchableOpacity>
                                        <Animated.Text entering={FadeInDown.delay(250).springify()} style={[login.forgot]}>Forgot Passoword?</Animated.Text>
                                    </TouchableOpacity>
                                    <Animated.View entering={FadeInDown.delay(350).springify()}>
                                        <Pressable style={[login.btn]}>
                                            <Text style={[login.loginText]}>Login</Text>
                                        </Pressable>
                                    </Animated.View>

                                </View>

                            )}
                        </Formik>
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const login = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    innerContainer: {
        paddingHorizontal: 24,
        paddingTop: 24,
        flexDirection: 'column',
        gap: 100
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    first: {
        color: '#D59647',

    },
    second: {
        color: '#262626',
        paddingLeft: 4
    },
    headingText: {
        fontSize: 20,
        fontFamily: 'Bold',
        letterSpacing: 2
    },
    formheading: {
        fontSize: 31,
        fontFamily: 'Bold',
        letterSpacing: 1.2,
        color: '#262626'
    },
    formContainer: {
        flexDirection: 'column',
        gap: 40
    },
    forgot: {
        fontSize: 13,
        paddingLeft: 5,
        marginTop: 6,
        color: '#656565',
        fontFamily: 'Medium',
        letterSpacing: .4
    },
    btn: {
        width: '100%',
        backgroundColor: '#D59647',
        borderRadius: 8,
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 42
    },
    loginText: {
        color: 'white',
        fontFamily: 'Medium',
        fontSize: 14,

    }

})