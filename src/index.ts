import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    return res.send('Express + Typescript server');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
