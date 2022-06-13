import './sass/App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import GiveItems from "./components/GiveItems";

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/give-items' element={<GiveItems/>}/>
        </Routes>
    </Router>
  );
}

export default App;
