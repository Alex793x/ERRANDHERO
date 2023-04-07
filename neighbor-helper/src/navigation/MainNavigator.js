import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from "../screens/signin/LogInScreen";
import FirstTimeView from '../screens/splash/FirstTimeView'
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignUpScreen from "../screens/signup/SignUpScreen";
import BottomTabNavigator from "./BottomTabNavigator";



const Stack = createNativeStackNavigator();
const MainNavigator = () => {
    // const [firstLaunch, setFirstLaunch] = useState(null);
    //
    // useEffect(() => {
    //     const checkFirstLaunch = async () => {
    //         const isFirstLaunch = await AsyncStorage.getItem("alreadyLaunched");
    //         if (isFirstLaunch === null) {
    //             setFirstLaunch(true);
    //             await AsyncStorage.setItem("alreadyLaunched", "true");
    //         } else {
    //             setFirstLaunch(false);
    //         }
    //     };
    //     checkFirstLaunch();
    // }, []);
    //
    // if (firstLaunch === null) {
    //     return null;
    // }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*{firstLaunch ? (*/}
                {/*    <Stack.Screen*/}
                {/*        name={"FirstTimeView"}*/}
                {/*        component={FirstTimeView}*/}
                {/*        options={{ headerShown: false }}*/}
                {/*    />*/}
                {/*) : (*/}
                {/*    <Stack.Screen*/}
                {/*        name={"LogInScreen"}*/}
                {/*        component={LogInScreen}*/}
                {/*        options={{ headerShown: false }}*/}
                {/*    />*/}
                {/*)}*/}
                <Stack.Screen
                    name={"FirstTimeView"}
                    component={FirstTimeView}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"LogInScreen"}
                    component={LogInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"SignUpScreen"}
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"BottomTabNavigator"}
                    component={BottomTabNavigator}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;
