import express from 'express';
import 'dotenv/config';
import routes from './routes/main.route';
import { db } from './config/db.connection';
// import cookieParser from 'cookie-parser'; 
// import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());



// app.use(cors())
// app.use(cookieParser());

app.use(routes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected to database');
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
