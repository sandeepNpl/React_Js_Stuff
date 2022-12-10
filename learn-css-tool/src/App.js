import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [style,setStyle] = useState({
    color:'red'
  });

  function splitAndAssign(value){
    let splittedAarr = value.split('=');
    let key = splittedAarr[0];
    let val = splittedAarr[1];
    setStyle({...style,[key]:val});
    }
  return (
    <div className="App">
        <div style={{padding:'10px 5px',fontWeight:'bold',fontSize:'25px'}}>
        <span style={{color:'#0fbcf9'}}>Learn</span> 
        <span style={{color:'#ff5e57',margin:'0 5px'}}>CSS</span> 
        <span style={{color:'#0be881'}}>Tool</span>
        </div>
        <div style={style}>Change My Style</div>
        <input placeholder="Add style(eg:color=red)"
        style={{padding:'10px 25px',margin:'30px',fontSize:'20px'}}
        onKeyUp={(e)=> splitAndAssign(e.target.value)}/>
    </div>
  );
}

export default App;
