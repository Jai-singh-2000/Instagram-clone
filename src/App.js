import './App.css';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {currentUser}=useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={currentUser?<Home/>:<Login/>}/>
        <Route path='/login' element={currentUser?<Home/>:<Login/>}/>
        <Route path='/signup' element={currentUser?<Home/>:<SignUp/>}/>
      </Routes>
      </div>
  );
}

export default App;
