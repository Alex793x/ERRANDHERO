import React, {useEffect} from 'react';
import LoginNavigator from './src/navigation/login/LoginNavigator'
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const App = () => {
    return (
        <LoginNavigator />
    )
};

export default App;
