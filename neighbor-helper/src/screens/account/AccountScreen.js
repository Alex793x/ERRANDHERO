import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {validate} from "../../components/data_validator/CredentialValidator";
import {doc, setDoc} from 'firebase/firestore'
import {getCurrentLocation} from "../../components/data_validator/GEOLocalizer";
import {styles} from './styles';
import HorizontalLine from "../../components/HorizaontalLine";
import ProfileImagePicker from "../../components/ProfileImagePicker";
import {db, auth} from "../../firebase/firebaseConfig";

const AccountScreen = ({ navigation }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        streetAddress: '',
        houseNum: '',
        apartmentSide: '',
        zipCode: '',
        city: '',
        country: '',
    });
    const [error, setError] = useState('');

    const [country, setCountry] = useState('');

    useEffect(() => {
        const fetchCountry = async () => {
            const fetchedCountry = await getCurrentLocation();
            if (fetchedCountry) {
                setCountry(fetchedCountry);
            }
        };
        fetchCountry();
    }, []);

    const validateAndSetAccountInfo = async () => {
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
            const user = auth.currentUser;
            const uid = user.uid;
            setDoc(doc(db, 'users', uid), formValues);
        }
    };

    return (
        <ImageBackground
            source={require('../../assets/images/AccountBackground.png')}
            style={styles.contentContainer}
        >
            <View style={styles.headerContainer}>
                <ProfileImagePicker/>
                <Text style={styles.header}>
                    Account info
                </Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.credentialInputContainer}>
                    <HorizontalLine/>
                    <TextInput
                        value={formValues.name}
                        onChangeText={(value) => setFormValues({ ...formValues, name: value })}
                    />
                    <Text style={styles.inputDescription}>Your name</Text>
                    <HorizontalLine/>
                </View>
                <View style={styles.credentialInputContainer}>
                    <HorizontalLine/>
                    <TextInput
                        value={formValues.email}
                        onChangeText={(value) => setFormValues({ ...formValues, email: value })}
                    />
                    <Text style={styles.inputDescription}>Email</Text>
                    <HorizontalLine/>
                </View>
                <View style={styles.credentialInputContainer}>
                    <HorizontalLine/>
                    <TextInput
                        value={formValues.streetAddress}
                        onChangeText={(value) => setFormValues({ ...formValues, streetAddress: value })}
                    />
                    <Text style={styles.inputDescription}>Address</Text>
                    <HorizontalLine/>
                </View>
                <View style={styles.credentialInputContainer}>
                    <HorizontalLine/>
                    <TextInput
                        value={formValues.houseNum}
                        onChangeText={(value) => setFormValues({ ...formValues, houseNum: value })}
                    />
                    <Text style={styles.inputDescription}>House/Apartment No.</Text>
                    <HorizontalLine/>
                </View>
                <View style={styles.credentialInputContainer}>
                    <HorizontalLine/>
                    <TextInput
                        value={formValues.apartmentSide}
                        onChangeText={(value) => setFormValues({ ...formValues, apartmentSide: value })}
                    />
                    <Text style={styles.inputDescription}>Apartment side (fill out only if possible)</Text>
                    <HorizontalLine/>
                </View>
                <View style={styles.credentialInputContainer}>
                    <HorizontalLine/>
                    <TextInput
                        value={formValues.zipCode}
                        onChangeText={(value) => setFormValues({ ...formValues, zipCode: value })}
                    />
                    <Text style={styles.inputDescription}>ZipCode</Text>
                    <HorizontalLine/>
                </View>
                <View style={styles.credentialInputContainer}>
                    <HorizontalLine/>
                    <TextInput
                        value={formValues.city}
                        onChangeText={(value) => setFormValues({ ...formValues, city: value })}
                    />
                    <Text style={styles.inputDescription}>City</Text>
                    <HorizontalLine/>
                </View>
                <View style={styles.credentialInputContainer}>
                    <HorizontalLine/>
                    <TextInput
                        value={country}
                        onChangeText={(value) => setFormValues({ ...formValues, country: value })}
                    />
                    <Text style={styles.inputDescription}>Country</Text>
                    <HorizontalLine/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={validateAndSetAccountInfo}
                    >
                        <Text style={styles.buttonText}>Apply Changes</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default AccountScreen;
