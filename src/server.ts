import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/authRoutes.ts';
import habbitRoutes from './routes/habitRoutes.ts';
import userRoutes from './routes/userRoutes.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' },
);

app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('tiny'));
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        message: 'hello world',
    });
});

app.use('/api/users', userRoutes);
app.use('/api/habbit', habbitRoutes);
app.use('/api/auth', authRoutes);

export default app;
