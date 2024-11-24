import express from 'express';
import itemRoutes from './routes/item';

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

export default app;
