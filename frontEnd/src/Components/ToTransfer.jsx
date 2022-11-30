import React , {useState} from "react";
const ToTransfer = (props) => {
  const [ammount,setAmmount]=useState({});

  const changeHandler=(e)=>{
    setAmmount({...ammount,[e.target.name]:e.target.value})
  }

  return(
  
    <div> 
        {console.log(ammount)}
      <h1>For Security reasons plez check all users list and use the id to transfer money</h1>
      <input type='number' placeholder="Money Ammount" name="balance" onChange={changeHandler}/>
      <input type='number' placeholder="reciever ID" name="id" onChange={changeHandler}/>
      <button onClick={()=>{props.trans(ammount.balance,ammount.id)}}>Transfer</button>
    </div> 
  )
}

export default ToTransfer;