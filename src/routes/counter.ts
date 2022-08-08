import express,{Request,Response} from 'express';

const router = express.Router();

router.get('/:username', [], (req:Request,res:Response) => {
    return res.send('')
})

export {router as counterRouter}
