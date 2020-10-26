const express = require("express");
const app = express();
const ctrl = require("./controller");

app.use(express.json());

let user = {
  id: 1,
  email: "cole@hotmail.com",
  password: "1234password",
  profilePic: "colesface.jpg",
};

app.get("/api/message", ctrl.getMessage);

app.post("/api/user/:name", ctrl.addUser);

app.post("/api/user", (req, res) => {
  const { name } = req.query;
  console.log(req.query);
  res.status(200).send(name);
});

//# axios.put('/api/user', {
//#     "id": 1,
//#     "email": "cole@hotmail.com",
//#     "password":"n3wP4S5W0RD",
//#     "profilePic":"coleheadshot.png"
//# })
app.put("/api/user", (req, res) => {
  //   console.log(req.body);
  const { id, email, password, profilePic } = req.body;
  console.log(user);
  user = {
    id,
    email,
    password,
    profilePic,
  };
  console.log(user);
  res.status(200).send(user);
});

app.listen(4040, () => {
  console.log("server running on 4040");
});

//# parameter
//# axios.get('/api/message/5').then((res)=> {
//# you would get the response for any other name besides adam
//#}).catch((err)=> {
//#  you would get a catch here if you put in adam as your name
//#})

//# query
//# axios.get('/api/message?number=5)

//# body
//# axios.get('/api/message', {number: 5})
