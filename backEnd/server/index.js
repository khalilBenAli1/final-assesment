const express = require('express');
const db = require('../database-mysql');
const cors=require('cors');
const app = express();



app.use(express.json());
app.use(cors());

app.get('/api/user/:name',  (req, res)=> {

  db.getUser(req.params.name,(error,result)=>{
    
    if(error) {res.send("notFound")}
    else {res.send(result)}
})
}); 
  
app.get('/api/users',  (req, res)=> {
    db.getAllUsers((error,result)=>{
      if(error) {throw error}
      else {res.send(result)}
 })
}); 

app.put('/api/users/:id',  (req, res)=> {
  db.transferMoney([req.body.balance,req.params.id],(error,result)=>{
    if(error) {throw error}
    else {res.send(result)}
})
});

app.post('/api/users',  (req, res)=> {
  db.addUser([req.body.name,req.body.balance,req.body.password],(error,result)=>{
    if(error) {throw error}
    else {res.send(result)}
})
});

app.put('/api/users/name/:id',(req, res)=> {
  db.changeName([req.body.name,req.params.id],(error,result)=>{
    if(error) {throw error}
    else {res.send(result)}
})
});
app.delete('/api/users/:id',  (req, res)=> {
  db.deleteUser(req.params.id,(error,result)=>{
    if(error) {throw error}
    else {res.send(result)}
})
});

app.listen(3000, () =>{
  console.log('listening on port 3000!');
});

