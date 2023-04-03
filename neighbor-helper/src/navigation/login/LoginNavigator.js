import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from "../../screens/signup/SignUpScreen";
import SignInScreen from "../../screens/signin/SignInScreen";
import LoginOptions from './LoginOptions'
import HomeScreen from '../../screens/Home/HomeScreen'


const Stack = createNativeStackNavigator();
const LoginNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"LoginOptions"} component={LoginOptions} />
                <Stack.Screen name={"SignUpScreen"} component={SignUpScreen} />
                <Stack.Screen name={"SignInScreen"} component={SignInScreen} />
                <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginNavigator
