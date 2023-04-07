import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { db, auth, storage } from '../firebase/firebaseConfig';

const ProfileImagePicker = () => {
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        const user = auth.currentUser;
        if (user && user.photoURL) {
            console.log('User photo URL:', user.photoURL);
            setProfileImage(user.photoURL);
        }
    }, []);

    const chooseImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert('Permission to access camera roll is required!');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            maxWidth: 200,
            maxHeight: 200,
            quality: 1,
        });

        if (!pickerResult.canceled) {
            await uploadProfileImage(pickerResult.assets[0].uri);
        }
    };

    const setNewProfileImage = (url) => {
        console.log('New profile image URL:', url);
        setProfileImage(url);
    };

    const uploadProfileImage = async (uri) => {
        const user = auth.currentUser;
        const imageRef = ref(storage, `profileImages/${user.uid}`);

        const response = await fetch(uri);
        const blob = await response.blob();

        await uploadBytes(imageRef, blob);
        const imageURL = await getDownloadURL(imageRef);

        console.log('Image URL:', imageURL);

        await updateProfile(user, { photoURL: imageURL });

        await updateDoc(doc(db, 'users', user.uid), {
            profileImage: imageURL,
        });

        setNewProfileImage(imageURL);
        console.log('Profile image uploaded successfully');
    };

    return (
        <View>
            <TouchableOpacity onPress={chooseImage}>
                <Image
                    source={ profileImage ? { uri: profileImage} : require('../assets/images/AccountNoImage.png')}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: 'white',
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileImagePicker;

