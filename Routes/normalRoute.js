import Routes from 'express'
import normalControllers from '../Controllers/normalController.js';
const value=normalControllers; 

const routes= Routes();
routes.get('/',(req,res)=>{
    res.send(`have a ${value}`);
});
export default routes;
