import "./App.css";
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { useState } from "react";


function App() {
  const [user,setUsers]=useState()
  const handleuser = (t) =>{
    setUsers(t)
    console.log(t)
  }
  return <div className="App">

   <div >
      < Navbar user={user}/>
       <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/Login' element={< Login handleuser={handleuser}/>}></Route>
       
       </Routes>
    </div> 

  </div>;
}

export default App;
