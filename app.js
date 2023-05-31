const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");

var data = [];
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.send(
    `<form  onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/ " method="GET">
      
      
      <input type="text" id="username" name="text" />

      <button type="submit">
        Add 
      </button>
    </form>`
  );
});

app.get("/", (req, res) => {
  let d = "";
  fs.readFile("chat.txt", "utf-8", (err, data) => {
    res.send(`${data}<br><form  onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
      
 
  <input type="text" id="message" name="message" placeholder="message"/>
  <input type="hidden" id="username" name="username" />
 
  
  <button type="submit">
    Send message 
  </button>
</form>`);
  });
});

app.post("/", (req, res) => {
  fs.writeFile(
    "chat.txt",
    `${req.body.username}:${req.body.message}<br> `,
    { flag: "a" },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    }
  );
});

app.listen(4000);
