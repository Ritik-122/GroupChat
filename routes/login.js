const express=require('express');
const router=express.Router();

router.get("/login", (req, res) => {
    res.send(
      `<form  onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/ " method="GET">
        
        
        <input type="text" id="username" name="text" />
  
        <button type="submit">
          Add 
        </button>
      </form>`
    );
  });

module.exports=router;