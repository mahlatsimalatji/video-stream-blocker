import express from 'express';
import {json} from 'body-parser';
import {userStreamRouter} from './routes/userStreamRoute';

import mongoose from 'mongoose';


const app = express()
app.use(json())

app.use(userStreamRouter)

// Connecting to local MongoDB
mongoose.connect('mongodb+srv://admin:EfcxUwEJj4iR4SI9@mahlatsicluster0.vyhk7xy.mongodb.net/?retryWrites=true&w=majority',
     () => {
        console.log('connected to database')
    })

// Creating server to listen at localhost 3000
app.listen(3000, () => {
    // Logging when the server has started
    console.log("listening to server 3000")
})

