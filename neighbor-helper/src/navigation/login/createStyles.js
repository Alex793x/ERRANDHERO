import {StyleSheet} from "react-native";
import {useMontserratFont} from "../../components/MontserratFontLoader";


export const createStyles = (fontLoaded) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    contentContainer: {
        width: '100%',
        paddingTop: '35%',
        paddingLeft: '10%'
    },
    title: {
        fontSize: 40,
        color: '#ffffff',
        marginBottom: '1%',
        fontFamily: fontLoaded ? 'MontserratFont' : 'System',
    },
    leadText: {
        fontSize: 15,
        color: '#ffffff',
        marginBottom: '7%',
        fontFamily: fontLoaded ? 'MontserratFont' : 'System'
    },
    button: {
        backgroundColor: '#FEEFA6',
        width: '50%',
        padding: '1.5%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    buttonText: {
        color: '#333333',
        fontSize: 14,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fontLoaded ? 'MontserratFont' : 'System'
    },

})
