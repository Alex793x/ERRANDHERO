import React, { useState } from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import {styles} from "./styles";

const SignInScreen = ({navigation}) => {
    const [email, verifyEmail] = useState('');
    const [password, verifyPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // handleSignIn successful
                const user = userCredential.user;
                console.log("Successfully login -  ", user)
                navigation.navigate('HomeScreen')
            })
            .catch((error) => {
                //handleSignIn error
                const errorCode = error.code
                const errorMessage = error.message;
                console.log("Sign in failed", errorCode)
                setError(errorMessage)
            })
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={verifyEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={verifyPassword}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignIn}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {error && <Text>{error}</Text>}
        </View>
    )
}

export default SignInScreen;
