import express from 'express';
import authRoutes from './routes/authRoutes.ts';
import habbitRoutes from './routes/habitRoutes.ts';
import userRoutes from './routes/userRoutes.ts';

const app = express();

app.get('/health', (req, rep) => {
    rep.json({
        message: 'hello world',
    }).status(200);
});

app.use('/api/users', userRoutes);
app.use('/api/habbit', habbitRoutes);
app.use('/api/auth', authRoutes);

export { app };

export default app;
