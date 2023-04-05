import React, {useEffect, useState} from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform, ScrollView, ImageBackground,
} from 'react-native';
import { auth, db} from '../../firebase/firebaseConfig';
import {validate} from "../../components/data_validator/CredentialValidator";
import {doc, setDoc} from 'firebase/firestore'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {getCurrentLocation} from "../../components/data_validator/GEOLocalizer";
import SlideUp from "../../components/slideupeffect/SlideUpEffect";
import {styles} from './styles';

const AccountScreen = ({ navigation }) => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        houseNum: '',
        apartmentFloor: '',
        city: '',
        postNum: '',
        country: '',
        phoneNum: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const [country, setCountry] = useState(''); // Add a new state for the country

    // Use useEffect to call getCurrentLocation when the component mounts
    useEffect(() => {
        const fetchCountry = async () => {
            const fetchedCountry = await getCurrentLocation();
            if (fetchedCountry) {
                setCountry(fetchedCountry);
            }
        };

        fetchCountry();
    }, []);


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
        <ImageBackground source={require('../../assets/images/AccountBackground.png')}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SlideUp>
                    <ScrollView
                        contentContainerStyle={styles.container}
                        style={{width: '100%'}}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={formValues.email}
                            onChangeText={(value) => setFormValues({...formValues, email: value})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            value={formValues.password}
                            onChangeText={(value) => setFormValues({...formValues, password: value})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="First name"
                            value={formValues.firstName}
                            onChangeText={(value) => setFormValues({...formValues, firstName: value})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Last name"
                            value={formValues.lastName}
                            onChangeText={(value) => setFormValues({...formValues, lastName: value})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Street address"
                            value={formValues.streetAddress}
                            onChangeText={(value) => setFormValues({...formValues, streetAddress: value})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="House Number"
                            value={formValues.houseNum}
                            onChangeText={(value) => setFormValues({...formValues, houseNum: value})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Apartment floor"
                            value={formValues.apartmentFloor}
                            onChangeText={(value) => setFormValues({...formValues, apartmentFloor: value})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Post number"
                            value={formValues.postNum}
                            onChangeText={(value) => setFormValues({...formValues, postNum: value})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="City"
                            value={formValues.city}
                            onChangeText={(value) => setFormValues({...formValues, city: value})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Country"
                            value={country}
                            onChangeText={(value) => setCountry(value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone number"
                            value={formValues.phoneNum}
                            onChangeText={(value) => setFormValues({...formValues, phoneNum: value})}
                        />
                        <TouchableOpacity
                            style={[styles.button, {margin: 50, marginBottom: 200}]}
                            onPress={handleSignUp}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        {error && <Text>{error}</Text>}
                    </ScrollView>
                </SlideUp>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

export default AccountScreen;
