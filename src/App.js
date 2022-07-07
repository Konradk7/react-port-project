import './sass/App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React, {useState} from 'react';
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import GiveItems from "./components/GiveItems";
import AboutUs from "./components/AboutUs";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "./components/Firebase";

function App() {
    const [logoutUser, setLogoutUser] = useState(false);
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const logout = async () => {
        await signOut(auth)
        setLogoutUser(true)
    }

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LogIn logout={logout} logoutUser={logoutUser} user={user}/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/give-items' element={<GiveItems/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
        </Routes>
    </Router>
  );
}

export default App;
