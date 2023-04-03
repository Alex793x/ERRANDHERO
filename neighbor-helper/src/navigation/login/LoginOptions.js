import React from "react";
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

const LoginOptions = ({navigation}) => {

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/background--login.png')}
        >
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignUpScreen')}
            >
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignInScreen')}
            >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default LoginOptions
