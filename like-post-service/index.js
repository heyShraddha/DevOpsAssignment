import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';

const app = express();
//prefix of all api


app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(cors());
app.use('/posts', postRoutes);

const ConnectionUrl = 'mongodb+srv://heyShraddha:Oej9NB4mP7cFuMM9@cluster0.y6nx2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const Port = process.env.PORT || 5003;
mongoose.connect(ConnectionUrl)
    .then(()=> app.listen(Port,()=> console.log(`Server is running on port ${Port}`)))
    .catch((error)=> console.log(error.message));
    docker run --rm -d -p 5003:5003 shraddha/like-post-service