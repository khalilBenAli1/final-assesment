import React from "react";
const Balance = (props) => {
  return (
    <div>
        <h1>Your Balance is :</h1>
        <h1 style={props.balance<0 ?{color:"red"}:{color:"black"}}>{props.balance}</h1>
    </div>
  );
};

export default Balance;
