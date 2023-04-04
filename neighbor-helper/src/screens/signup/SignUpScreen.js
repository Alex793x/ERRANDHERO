import React, {useState} from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform, ScrollView,
} from 'react-native';
import {auth, db} from '../../firebase/firebaseConfig';
import {validate} from "../../components/data_validator/CredentialValidator";
import {doc, setDoc} from 'firebase/firestore'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import SlideUp from "../../components/slideupeffect/SlideUpEffect";
import {styles} from './styles';

const SignUpScreen = ({ navigation }) => {
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

    const handleSignUp = () => {
        const isFormValid = Object.values(formValues).every(validate);
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
                    <Image source={require('../../assets/logo.png')} style={styles.image}/>
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
                        value={formValues.country}
                        onChangeText={(value) => setFormValues({...formValues, country: value})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                        value={formValues.phoneNum}
                        onChangeText={(value) => setFormValues({...formValues, phoneNum: value})}
                    />
                    <TouchableOpacity
                        style={[styles.button, {margin: 50, marginBottom: 100}]}
                        onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    {error && <Text>{error}</Text>}
                </ScrollView>
            </SlideUp>
        </KeyboardAvoidingView>
    );
};

export default SignUpScreen;
