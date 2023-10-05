import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#495057';
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='light';
     
    }
  }
  const[Mode,setMode] = useState('light')
  return (
   <>
   <Navbar title="TextUtils"  About="About"   mode={Mode} toggleMode={toggleMode}/>
   
  <TextForm text="ENTER THE TEXT YOU WANT TO ANALYZE HERE"/>
   
   </>
  );
  } 

export default App;
