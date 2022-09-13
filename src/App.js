import './App.css';
import Login from "./components/Login";
import SignUp from './components/SignUp';
import Main from './components/Main';
import {Routes,Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </div>
  );
}

export default App;
