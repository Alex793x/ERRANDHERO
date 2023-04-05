import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { createStyles } from "./createStyles";
import {useMontserratFont} from "../../components/MontserratFontLoader";
import TypingText from "../../components/TextAnimations/WriteDeleteAnimation";

const FirstTimeView = ({ navigation }) => {
    const fontLoaded = useMontserratFont();
    const styles = createStyles(fontLoaded);

    return (
        <ImageBackground
            style={[styles.container, { height: "95%" }]}
            source={require("../../assets/images/SplashScreen.png")}
        >
            <View style={styles.contentContainer}>
                <TypingText
                    text="ERANDHERO"
                    typingSpeed={300}
                    deletingSpeed={100}
                    style={styles.title}
                />
                <Text style={styles.leadText}>Your Trusted Partner in Daily Chores</Text>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => navigation.navigate("SignUpScreen")}
                >
                    <Text style={styles.buttonText}>Register now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => navigation.navigate("LogInScreen")}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default FirstTimeView;
