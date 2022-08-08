import express from 'express';
import json from 'body-parser';

const app = express()
app.use(json())

// Creating server to listen at localhost 3000
app.listen(3000, () => {
    // Logging when the server has started
    console.log("listening to server 3000")
})

//interface representing userstream db documenr
interface IUserStreams {
    username: string;
    count: number;
  }