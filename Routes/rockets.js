import Routes from 'express';
import rockets from '../Controllers/rocket.js';
const value=rockets;
const router= Routes();
router.get('/',(req,res)=>{
    if(value) res.send('The rocket has taken off');
    else res.send('Rocket hasnt taken off yet, you can still get on time hurry up your asss');
})
export default router;