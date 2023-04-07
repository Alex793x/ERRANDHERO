import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '10%',
        paddingTop: '10%'
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingBottom: '10%',
        justifyContent: "space-around",
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
    headerImage: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    credentialInputContainer: {
        width: '100%',
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
    inputDescription: {
        fontWeight: '100',
    },
    button: {
        backgroundColor: '#FEEFA6',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
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
