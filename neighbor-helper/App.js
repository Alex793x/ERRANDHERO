import React from 'react';
import MainNavigator from './src/navigation/MainNavigator'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LogInScreen from "./src/screens/signin/LogInScreen";
import FirstTimeView from "./src/screens/splash/FirstTimeView";
import SignUpScreen from "./src/screens/signup/SignUpScreen";


const App = () => {
    return (
        <MainNavigator/>
    )
};

export default App;
