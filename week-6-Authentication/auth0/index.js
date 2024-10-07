const express = require("express");
const app = express();

app.use(express.json());

let users = [];
//generate  a random token
function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = '';
    for(let i=0;i<32;i++){
        token = token + options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "signed up",
  });
  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((u) => {
    if (u.username == username && u.password == password) {
      return u;
    } else {
      return false;
    }
  });
  
  if (user) {
    const token = generateToken();
    user.token = token;
    res.json({
      token: token,
    });
  }
  else{
    res.status(403).send('Invalid username/password')
  }
  console.log(users)
});

app.get('/me',function(req,res){
    const token = req.headers.token;
    const user = users.find((u) =>{
        if(u.token == token){
            return u;
        }
        else{
            return false;
        }
    })

    if(user){
        res.json({
            username: user.username,
            password: user.password
        })
    }
    else{
        res.json({
            message: 'Invalid token'
        })
    }
})

app.listen(3000);
