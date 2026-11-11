
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const EmployeeModel = require("./modles/Employees");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Kaveena:harrypotter@projectkc.xfrfxdb.mongodb.net/");

app.post("/register", (req,res) => {
  EmployeeModel.create(req.body)
  .then(employees=>res.json(employees))
  .catch(err=>res.json(err))

})
app.listen(3001,()=>{
    console.log("Server is runing");
})

