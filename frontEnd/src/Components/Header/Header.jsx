import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <div className="header">
      <img className="logo" alt="logo" />

      
        {props.con ? 
        <ul>
          <li onClick={()=>{props.view("all")}}>Users</li>
          <li onClick={()=>{props.view("balance")}}>Balance</li>
          <li onClick={()=>{props.view("transfer")}}>Transfer</li>
          <li onClick={()=>{props.view("profile")}}>{props.profil.name}</li>
          <li onClick={()=>{props.logout()}}>Log Out</li>
        </ul>
        :
        <ul>
          <li onClick={()=>{props.view("all")}}>Users</li>
          <li onClick={()=>{props.view("signin")}}>SignIn</li>
          <li onClick={()=>{props.view("signup")}}>SingUp</li>
        </ul>
        }
      
    </div>
  );
};

export default Header;
