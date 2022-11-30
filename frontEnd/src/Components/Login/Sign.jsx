import React,{useState} from "react";
import "./Sign.css"
const Sign = (props) => {
  const [sign,setSign]=useState({})
  const [login,setLogin]=useState({Name:"",password:""})

  const changeHandler=(e)=>{
    props.view==="signin" ? setLogin({...login,[e.target.name]:e.target.value}):setSign({...sign,[e.target.name]:e.target.value})
  }


  return (
    <div>
      {props.view==="signin" ?
        <div className="inputs">
          <div> <input type="text" placeholder="Name" name="name" value={login.name} onChange={changeHandler}></input></div>
          <div>  <input type="password" placeholder="Password" name="password" value={login.pasword} onChange={changeHandler}></input></div>
          <div>
              <button onClick={()=>{props.login(login.name,login.password);setSign({name:"",password:""});setLogin({name:"",password:""})}}>Sign In</button>
              <p>{props.message}</p>
          </div>
        </div>
        :
        <div className="inputs">
        <div> <input type="text" placeholder="Name" name="name"  value={sign.name} onChange={changeHandler}></input></div>
        <div> <input type="number" placeholder="balance" name="balance"  onChange={changeHandler}></input></div>
        <div>  <input type="password" placeholder="Password" name="password" value={sign.password} onChange={changeHandler}></input></div>
        <div>  <button onClick={()=>{props.register(sign);setSign({name:"",password:""})}}>Sign Up</button></div>
      </div>
      }
  </div>
  );
};

export default Sign;
