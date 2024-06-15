import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import router from '../routes';
dotenv.config(); 


const app = express(); 
const port = 3000;

app.use(cors());

//to parse the body of the request
app.use(express.json())

app.use('/', router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});


export default app;