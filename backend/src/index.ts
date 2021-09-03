import Express from 'express';
import { router } from './routes';
import 'reflect-metadata';
import './database';
import cors from 'cors';

const app = Express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(Express.json());
app.use(router);

app.listen(port, () => console.log(` ✅ Server located at url: http://localhost:${port} ✅ `));