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

        console.log(user+ " started streaming")
    } else {
        if(userStreamCount.count >= 3){ 
            res.status(403).send("Maximum streaming devices reached")
        } else {
            userStreamCount.count += 1
            await userStreamCount.save()
            res.status(204).send(userStreamCount)
            console.log("Additional stream: ",userStreamCount.count)
        }
    }
    return res.send('')
})

export {router as counterRouter}
