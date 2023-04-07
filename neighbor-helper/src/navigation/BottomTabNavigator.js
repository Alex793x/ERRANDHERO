import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from "react-native";
import HomeScreen from '../screens/home/HomeScreen';
import AccountScreen from '../screens/account/AccountScreen';
import SearchScreen from "../screens/search/SearchScreen";
import DiscoverScreen from "../screens/discover/DiscoverScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    borderTopWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 5,
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarActiveTintColor: '#68B0AB',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => (
                        <Image
                            source={require('../assets/images/HomeNavImg.png')}
                            style={{width: size * 1.3, height: size * 1.3, tintColor: color}}
                        />
                    ),
                }}

            />
            <Tab.Screen
                name={'Discover'}
                component={DiscoverScreen}
                options={{
                    tabBarActiveTintColor: '#68B0AB',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => (
                        <Image
                            source={require('../assets/images/DiscoverNavImg.png')}
                            style={{width: size * 1.3, height: size * 1.3, tintColor: color}}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'Search'}
                component={SearchScreen}
                options={{
                    tabBarActiveTintColor: '#68B0AB',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => (
                        <Image
                            source={require('../assets/images/SearchNavImg.png')}
                            style={{width: size * 1.3, height: size * 1.3, tintColor: color}}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={AccountScreen}
                options={{
                    tabBarActiveTintColor: '#68B0AB',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => (
                        <Image
                            source={require('../assets/images/ProfileNavImg.png')}
                            style={{width: size * 1.3, height: size * 1.3, tintColor: color}}
                        />
                    ),
                }}
            />
            {/* Add other screens for the bottom tab navigator here */}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
