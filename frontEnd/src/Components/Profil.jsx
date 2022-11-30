import React,{useState}from "react";
const Profile = (props) => {
    const[val,setVal]=useState("");


    const changeHandler=(e)=>{
        setVal(e.target.value)
    }

  return (
    <div>
        <h1>
            Welcome {props.profile.name}
        </h1>
        <div>
            <p>to change your name type it here and click submit</p>
            <input type="text" placeholder={props.profile.name} onChange={changeHandler}/>
            <button onClick={()=>{props.tochange(val)}}>Change</button>
        </div>
        <div>
            <p>to delete your account click here</p>
            <button onClick={()=>{props.delete()}}>Delete</button>
        </div>
    </div>
  );
};

export default Profile;
