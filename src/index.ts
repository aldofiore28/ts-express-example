import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  console.log('hello');
  return res.send('Express + Typescript server');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
