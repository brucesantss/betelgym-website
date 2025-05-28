import express from 'express';
import cors from 'cors';

import UserRouter from './router/UserRouter';

const app = express();
const port = 8080;

// compatibilidade
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(UserRouter);


app.listen(port, () => {
    console.log('server online');
})

