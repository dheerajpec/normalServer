import Routes from  'express';
import normalRoute from '../Routes/normalRoute.js';
import rockets from '../Routes/rockets.js';


const router = Routes();
router.use('/',normalRoute);

router.use('/rockets',rockets);

export default router;