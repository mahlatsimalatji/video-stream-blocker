import express,{Request,Response} from 'express';
import {UserStreamCount} from "../models/userStreamCount";


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

        console.log(user+ " started streaming")

        return res.status(201).send(newUserStream)
    } else {
        if(userStreamCount.count >= 3){ 
            return res.status(403).send("Maximum streaming devices reached")
        } else {
            userStreamCount.count += 1
            await userStreamCount.save()
            console.log("Additional stream: ",userStreamCount.count)

            return res.status(200).send(userStreamCount)
        }
    }
})

export {router as userStreamRouter}
