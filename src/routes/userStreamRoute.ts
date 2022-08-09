import express,{Request,Response} from 'express';
import {UserStreamCount} from "../models/userStreamCount";


const router = express.Router();

router.get('/disconnect/:username', [], async (req:Request,res:Response) => {
    let user:string = req.params.username
    let userStreamCount = await UserStreamCount.findOne({username: user})

    if(userStreamCount == null){
        return res.status(403).send("User has not started streaming")
    } else {
        if(userStreamCount.count > 0){
            userStreamCount.count -= 1
            await userStreamCount.save()
            console.log("Removing stream: ",userStreamCount.count," for user: ",userStreamCount.username)
            return res.status(200).send(userStreamCount)       
        }    
    }
})


router.get('/connect/:username', [], async (req:Request,res:Response) => {
    let user:string = req.params.username
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
            console.log("Additional stream: ",userStreamCount.count," for user: ",userStreamCount.username)

            return res.status(200).send(userStreamCount)
        }
    }
})


export {router as userStreamRouter}
