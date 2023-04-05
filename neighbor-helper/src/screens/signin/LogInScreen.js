import React, {useState} from "react";
import {ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import {auth} from "../../firebase/firebaseConfig";
import {signInWithEmailAndPassword} from "firebase/auth";
import {styles} from "./styles";
import SlideUp from "../../components/slideupeffect/SlideUpEffect";

const LogInScreen = ({navigation}) => {
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
        <ImageBackground
            style={[styles.container, {height: '120%'}]}
            source={require('../../assets/images/LogInBackground.png')}
        >
            <SlideUp>
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>
                            Login
                        </Text>
                        <Text style={styles.headerDescription}>
                            Login to continue
                        </Text>
                    </View>
                    <View style={styles.credentialInputContainer}>
                        <Text style={styles.credentialHeader} >
                            Email
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={verifyEmail}
                        />
                        <Text style={styles.credentialHeader}>
                            Password
                        </Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            value={password}
                            onChangeText={verifyPassword}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSignIn}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    {error && <Text>{error}</Text>}
                    <View style={styles.helpContainer}>
                        <TouchableOpacity>
                            <Text style={[styles.credentialHeader, {paddingBottom: 5}]}>
                                Forgot Password ?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignUpScreen")}>
                            <Text style={styles.credentialHeader}>
                                Don't have an account? Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SlideUp>
        </ImageBackground>
    )
}

export default LogInScreen;
