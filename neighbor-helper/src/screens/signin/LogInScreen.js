import React, {useEffect, useState} from "react";
import {ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import {auth} from "../../firebase/firebaseConfig";
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {styles} from "./styles";
import SlideUp from "../../components/slideupeffect/SlideUpEffect";
import {ModalBox} from "../../components/ModalBox";

const LogInScreen = ({navigation}) => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is logged in, navigate to the main screen
                navigation.navigate('BottomTabNavigator');
            } else {
                // No user is logged in, stay on the login screen
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
    const [email, verifyEmail] = useState('');
    const [password, verifyPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // handleSignIn successful
                const user = userCredential.user;
                console.log("Successfully login -  ", user)
                navigation.navigate('BottomTabNavigator')
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
                <ModalBox
                    visible={showForgotPasswordModal}
                    setVisible={setShowForgotPasswordModal}
                    showInput={true}
                    input="Enter Your Email To Reset Your Password"
                    submitText="Submit"
                    closingText={"Thanks, we have sent you an email"}
                />
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
                        <TouchableOpacity onPress={() => setShowForgotPasswordModal(true)}>
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
