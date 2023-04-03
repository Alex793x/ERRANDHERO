import React, {useState} from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import {auth} from '../../firebase/firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import SlideUp from "../../components/slideupeffect/SlideUpEffect";
import {styles} from './styles';

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Sign up successfully - ', user);
                navigation.navigate('HomeScreen');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Sign in failed', errorCode);
                setError(errorMessage);
            });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SlideUp>
                <Image source={require('../../assets/logo.png')} style={styles.image}/>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                {error && <Text>{error}</Text>}
            </SlideUp>
        </KeyboardAvoidingView>
    );
};

export default SignUpScreen;
