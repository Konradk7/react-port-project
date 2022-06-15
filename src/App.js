import './sass/App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import GiveItems from "./components/GiveItems";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/give-items' element={<GiveItems/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
        </Routes>
    </Router>
  );
}

export default App;
