import React from "react";
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

const LoginOptions = ({navigation}) => {

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/background--login.png')}
        >
            <View
                style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: '10%', paddingTop: '15%', backgroundColor: '#665ce1', borderTopStartRadius: 40, borderTopEndRadius: 40 }}
            >
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: '#4d44e0' }]}
                    onPress={() => navigation.navigate('SignUpScreen')}
                >
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: '#665ce1', borderColor: '#4d44e0', borderWidth: 2}]}
                    onPress={() => navigation.navigate('SignInScreen')}
                >
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default LoginOptions
