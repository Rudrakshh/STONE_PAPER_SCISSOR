import './App.css';
import stone from './images/stone.jpg'
import paper from './images/paper.jpg'
import scissor from './images/scissor.jpg'
import React from 'react';
function App() {
  const A=prompt('ENTER PLAYER 1 NAME')
  const B=prompt('ENTER PLAYER 2 NAME')
  function h()
  {
    var outcomes=['paper','stone','scisor']
    var one=Math.floor(Math.random()*3)
    var two=Math.floor(Math.random()*3)

    if(one==0){
    document.getElementById('div1').style.background="url("+paper+")";
    }
    else if(one==1)
    {
      document.getElementById('div1').style.background="url("+stone+")";
    }
    else{
      document.getElementById('div1').style.background="url("+scissor+")";
    }

    if(two==0){
      document.getElementById('div2').style.background="url("+paper+")";
      }
      else if(two==1)
      {
        document.getElementById('div2').style.background="url("+stone+")";
      }
      else{
        document.getElementById('div2').style.background="url("+scissor+")";
      }

      if(one==0)
      {
        if(two==0)
        {
          document.getElementById('result').innerHTML="DRAW"
        }
        if(two==1)
        {
          document.getElementById('result').innerHTML= A+" WINS"
        }
        if(two==2)
        {
          document.getElementById('result').innerHTML= B+" WINS"
        }

      }

      if(one==1)
      {
        if(two==0)
        {
          document.getElementById('result').innerHTML=B+" WINS"
        }
        if(two==1)
        {
          document.getElementById('result').innerHTML="DRAW"
        }
        if(two==2)
        {
          document.getElementById('result').innerHTML=A+" WINS"
        }

      }

      if(one==2)
      {
        if(two==0)
        {
          document.getElementById('result').innerHTML=A+" WINS"
        }
        if(two==1)
        {
          document.getElementById('result').innerHTML= B+" WINS"
        }
        if(two==2)
        {
          document.getElementById('result').innerHTML="DRAW"
        }

      }
  }
  return (
    <React.Fragment>
       <h1 id="result" style={{textAlign:'center'}}>WINNER</h1>
    <div style={{display:'flex',marginTop:'100px'}}>
      <div>
      <div id="div1" style={{width:'300px',height:'300px',marginLeft:'200px'}}>
      </div>
      <h1 id="first" style={{textAlign:'center'}}>{A}</h1>
    </div>
    <div>
      <div id="div2" style={{width:'300px',height:'300px',marginLeft:'200px'}}>
      </div>
      <h1 id="second" style={{textAlign:'center'}}>{B}</h1>
    </div>
    </div>
    <button onClick={h} style={{marginLeft:'550px',width:'100px'}}>PLAY</button>
    </React.Fragment>
  );
}

export default App;
