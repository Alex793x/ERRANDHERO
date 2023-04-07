import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from "../firebase/firebaseConfig";

export const ModalBox = ({visible, setVisible, showInput, input, submitText, closingText }) => {
    const [resetEmail, setResetEmail] = useState('');

    const handlePasswordReset = () => {
        if (resetEmail) {
            sendPasswordResetEmail(auth, resetEmail)
                .then(() => {
                    // Password reset email sent
                    Alert.alert(closingText)
                    console.log('Password reset email sent');
                    setVisible(false);
                })
                .catch((error) => {
                    // Error occurred
                    console.log('Error sending password reset email:', error);
                });
        } else {
            console.log('Please enter a valid email address');
        }
    };


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(false);
                }}>
                <View style={styles.overlay}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            {input}
                        </Text>
                        {showInput &&
                            <TextInput
                                style={styles.textInput}
                                onChangeText={setResetEmail}
                        ></TextInput>}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                handlePasswordReset()
                            }}>
                            <Text style={styles.textStyle}>{submitText}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textInput: {
        borderRadius: 10,
        width: '80%',
        margin: '5%',
        paddingHorizontal: '3%',
        backgroundColor: '#D9D9D9'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#FEEFA6',
    },
    textStyle: {
        color: '#333333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
