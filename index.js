const express = require("express");
const app = express();
const cors = require("cors");


const dotenv = require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.set("view engine", "ejs");

const {connectionDB} = require('./Config/Connectiondb');

const {GetUserRegistration,CreateUserAccount} = require('./Controller/UserController');

app.route('/Registration').get(GetUserRegistration).post(CreateUserAccount);


 

app.listen(process.env.PORT,function () {

    console.log(`The server is running ${process.env.PORT}` )
    connectionDB();
    
})





