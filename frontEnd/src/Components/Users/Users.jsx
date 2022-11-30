import React from "react";
import "./users.css";
const Users = (props) => {
  
return(
    
  <tr>
    <th>{props.e.id}</th>
    <th>{props.e.name}</th>
    <th>{props.e.balance}</th>
    </tr>
)
};

export default Users;
