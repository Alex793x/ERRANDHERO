import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '10%',
        paddingTop: '10%'
    },
    headerContainer: {
        paddingBottom: '10%',
        alignItems: "center"
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
    },
    headerDescription: {
        fontSize: 15,
        fontWeight: '100'
    },
    credentialInputContainer: {
        width: '100%',
        marginBottom: '8%'
    },
    credentialHeader: {
        fontSize: 15,
        color: '#333333',
        fontWeight: '100',
        marginBottom: '2%'
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
        fontWeight: "bold"
    },

})
