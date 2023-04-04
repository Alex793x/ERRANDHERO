import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    image: {
        width: '110%',
        height: width * 0.6,
        resizeMode: 'cover',
        marginBottom: 50,
    },
    formWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    button: {
        backgroundColor: 'blue',
        width: '30%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
});
