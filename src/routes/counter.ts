import express,{Request,Response} from 'express';
import {UserStreamCount} from "../models/streamCount";


const router = express.Router();

router.get('/:username', [], async (req:Request,res:Response) => {
    let user = req.params.username

    let userStreamCount = await UserStreamCount.findOne({username: user})

    if(userStreamCount == null){
        let newUserStream = new UserStreamCount({
            username: user,
            count: 1
        })

        await newUserStream.save()

        res.status(201).send(newUserStream)
    }
    return res.send('')
})

export {router as counterRouter}
