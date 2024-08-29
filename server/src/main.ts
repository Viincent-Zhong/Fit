import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/api';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI!, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// Router

app.use('/api', router);
// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Only start the server if this file is executed directly 
// Used for test so superset don't run the server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;