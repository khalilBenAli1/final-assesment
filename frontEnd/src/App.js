import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Users from "./Components/Users/Users";
import "./index.css";
import Sign from "./Components/Login/Sign";
import Balance from "./Components/Balance.jsx";
import ToTransfer from "./Components/ToTransfer";
import Profile from "./Components/Profil";

const App = () => {
  const [view, setView] = useState("all");
  const [users, setUsers] = useState([]);
  const [check, setCheck] = useState(false);
  const [connected, setConnected] = useState(false);
  const [profil, setProfil] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/api/users").then(function (response) {
      setUsers(response.data);
    });
  }, [check]);

  const connectedHandler = () => {
    setConnected(false);
    setView("all");
    alert("thank you for visiting our website");
    setCheck()
  };
  const loginHandler = (name, password) => {
    setMessage("");
    axios
      .get(`http://127.0.0.1:3000/api/user/${name}`)
      .then(function (response) {
        if (!response.data.length) {
          setMessage("not found");
        } else if (response.data[0].password !== password) {
          setMessage("not found");
        } else {
          setView("all");
          setProfil(response.data[0]);
          setConnected(true);
          setCheck()
        }
      });
  };



  const moneyTransferHandler = (balance, id) => {
    console.log(balance);
    let temp = profil.balance - Number(balance);
    if (temp > -200 && Number(balance) < 500) {
      axios
        .put(`http://127.0.0.1:3000/api/users/${profil.id}`, {
          balance: -Number(balance),
        })
        .then(function (response) {
          console.log(response);
          axios
            .put(`http://127.0.0.1:3000/api/users/${id}`, {
              balance: Number(balance),
            })
            .then(function (response) {
              alert("transfer done");
              setView("all");
              checkHandler();
              setProfil({...profil,balance:temp})
            });
        });
    } else if (temp < -200) {
      alert("you don't have enough money");
    } else {
      alert("Ammount should be less than 500");
    }
  };

  const registerHandler = (obj) => {
    axios
      .post(`http://127.0.0.1:3000/api/users`, obj)
      .then(function (response) {
        alert(
          "thank you for choosing our application, please use your credintials to login"
        );
        setView("signin");
        setCheck()
      });
  };

  const checkHandler = () => {
    setCheck(!check);
  };

  const changeView = (view) => {
    setView(view);
    checkHandler();
  };
  const nameHandler = (name)=>{
    axios.put(`http://127.0.0.1:3000/api/users/name/${profil.id}`,{"name":name})
    .then(function(response){
      console.log(response);
      setProfil({...profil,name:name})
      setCheck()
    })
  }
  const deleteHandler =()=>{
    axios.delete(`http://127.0.0.1:3000/api/users/${profil.id}`)
    .then(function(response){
      alert("your account is deleted")
      setView("all");
      setConnected(false);
      setProfil({});
      setCheck();
    })
  }

  const handleRender = () => {
    if (view === "balance") {
      return <Balance balance={profil.balance} check={checkHandler}/>;
    } else if (view === "transfer") {
      return <ToTransfer trans={moneyTransferHandler} />;
    }else if (view === "profile") {
      return <Profile profile={profil} tochange={nameHandler} delete={deleteHandler}/>;
    } 
    else if (view === "signin") {
      return <Sign view={view} login={loginHandler} message={message} />;
    } else if (view === "signup") {
      return <Sign register={registerHandler} />;
    } else if (view === "all") {
      return (
        <center>
          <table>
            {users.map((e, i) => (
              <Users e={e} key={i} />
            ))}
          </table>
        </center>
      );
    }
  };

  return (
    <div className="App">
      {console.log(users)}
      <Header
        view={changeView}
        con={connected}
        profil={profil}
        logout={connectedHandler}
      />
      {handleRender()}
    </div>
  );
};

export default App;
