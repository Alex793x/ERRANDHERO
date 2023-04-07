import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {BackHandler} from 'react-native';
import {useFocusEffect} from "@react-navigation/native";

const HomeScreen = () => {
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                BackHandler.exitApp();
                return true;
            };

            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress,
            );

            return () => backHandler.remove();
        }, []),
    );
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;
