const express=require('express');
const router=express.Router();
const fs = require("fs");
router.get("/", (req, res) => {
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
  
  router.post("/", (req, res) => {
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
  module.exports=router;