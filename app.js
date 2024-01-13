import express from "express";
import axios from "axios";
import index from "../normalServer/Routes/index.js";

const PORT= 3000;
const app=express();
const routes= index;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
app.use(routes);

