import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from 'styled-components'

// const inputBox=styled.input`
// padding:1vh;
// width:20vw;
// margin-left:40vw;

// `

const Login = (props) => {
  const [name,setName]=useState()
  const [password,setPassword]=useState()
  const[arr,setArr]=useState({})
  const handleSubmit =()=>{
  setArr({email:name,password:password})

  }


React.useEffect(()=>{
   fetchs(arr)
  })

  const fetchs = (alldata) => {
    console.log(alldata)
    fetch(`https://reqres.in/api/login`,{
      method: "POST",
      body:JSON.stringify(alldata)
      ,
      headers: {
        "content-Type": "application/json"
      }
        
    
    }).then((res)=> res.json()).then((res) => {
      // console.log(res.token)
      props.handleuser(res.token)
      
    }).catch((err)=>{
      console.log(err)
    })
 }


  return <div>
  <input type="text" placeholder="Id" onChange={(e)=>setName(e.target.value)} value={name}/>
  <br />
  <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
  <button onClick={handleSubmit} >Submit</button>
  </div>;
};

export default Login;
