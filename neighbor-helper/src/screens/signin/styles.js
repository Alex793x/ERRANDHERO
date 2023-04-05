import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    contentContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingHorizontal: '10%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    headerContainer: {
        paddingVertical: '10%',
        alignItems: 'center'
    },
    header: {
        color: '#333333',
        fontWeight: "bold",
        fontSize: 33.8,
    },
    headerDescription: {
        fontWeight: '100',
        fontSize: 15,
    },
    credentialInputContainer: {
        width: '100%'
    },
    credentialHeader: {
        fontSize: 15,
        color: '#333333',
        fontWeight: '100'
    },
    input: {
        alignItems: 'flex-start',
        padding: 5,
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#D9D9D9',
        borderRadius: 10
    },
    button: {
        backgroundColor: '#FEEFA6',
        width: '40%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#333333',
        fontSize: 17,
    },
    helpContainer: {
        alignItems: 'center',
        paddingBottom: '10%'
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
})
