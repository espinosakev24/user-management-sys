import express from 'express';
import { connectDB } from './src/db/db.js';
import { userRoutes } from './src/user/index.js';

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(4000, () => {
  console.log('Hello!');
});
