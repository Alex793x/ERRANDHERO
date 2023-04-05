import React from 'react';
import LoginNavigator from './src/navigation/login/LoginNavigator'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LogInScreen from "./src/screens/signin/LogInScreen";
import FirstTimeView from "./src/navigation/login/FirstTimeView";
import SignUpScreen from "./src/screens/signup/SignUpScreen";


const App = () => {
    return (
        <LoginNavigator/>
    )
};

export default App;
