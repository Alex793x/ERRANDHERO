import React, { useState} from "react";
import {styles} from "./styles";
import {validate} from "../../components/data_validator/CredentialValidator";
import {auth, db} from "../../firebase/firebaseConfig";
import {ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import SlideUp from "../../components/slideupeffect/SlideUpEffect";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";

const SignUpScreen = (navigation) => {
    const [formValues, setFormValues] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleSignUp = () => {
        let isFormValid = true;
        for (const [key, value] of Object.entries(formValues)) {
            const isValid = validate(key, value);
            console.log(`${key}: ${isValid}`);
            if (!isValid) {
                isFormValid = false;
                console.log(`You can't enter ${value} for ${key}, please try something else.`)
            }
        }
        console.log('Form values:', formValues);
        console.log('Form is valid:', isFormValid);


        if (isFormValid) {
            createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('Sign up successfully - ', user);
                    setDoc(doc(db, 'users', user.uid), formValues);
                    navigation.navigate('HomeScreen');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('Sign in failed', errorCode);
                    setError(errorMessage);
                });
        }
    };


    return (
        <ImageBackground
            source={require('../../assets/images/SignUpBackground.png')}
            style={styles.contentContainer}
        >
            <SlideUp>
                <ScrollView
                    style={{width: '100%'}}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >

                    <View style={styles.headerContainer} >
                        <Text style={styles.header}>
                            Create New Account
                        </Text>
                        <Text style={styles.headerDescription}>
                            Sign up to continue
                        </Text>
                    </View>
                    <View style={styles.credentialInputContainer}>
                        <Text style={styles.credentialHeader} >
                            Your name
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={formValues.name}
                            onChangeText={(value) => setFormValues({...formValues, name: value})}
                        />
                        <View style={styles.credentialInputContainer}>
                            <Text style={styles.credentialHeader} >
                                Username
                            </Text>
                            <TextInput
                                style={styles.input}
                                value={formValues.username}
                                onChangeText={(value) => setFormValues({...formValues, username: value})}
                            />
                            <Text style={styles.credentialHeader} >
                                Email
                            </Text>
                            <TextInput
                                style={styles.input}
                                value={formValues.email}
                                onChangeText={(value) => setFormValues({...formValues, email: value})}
                            />
                            <Text style={styles.credentialHeader}>
                                Password
                            </Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                value={formValues.password}
                                onChangeText={(value) => setFormValues({...formValues, password: value})}
                            />
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSignUp}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SlideUp>

        </ImageBackground>
    )
}

export default SignUpScreen;
