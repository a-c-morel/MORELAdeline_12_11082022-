import React,{useState,useEffect} from 'react';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('mockAPI.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App" data={data}>display some text</div>
  );
}

export default App;
