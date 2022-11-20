// Added "type": "module" to package.json for import statements
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// In node ".js" is required unlike react so double check it
import postRoutes from './routes/posts.js';

const app = express();

// Initializing app instance with a 30mb limit for images
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// Adding cors
app.use(cors());
// Adding the post prefix to app for /posts
app.use('/posts', postRoutes);

// Mongo atlas cluster connection URL
const CONNECTION_URL =
  'mongodb+srv://cheyroseflammer:mongo@cluster0.i9m5x2h.mongodb.net/?retryWrites=true&w=majority';
// What port our connection should run on
const PORT = process.env.PORT || 5000;
// Making the connection via mongoose
mongoose
  .connect(CONNECTION_URL, {
    // These parameters are in order to avoid deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //   Promise to check connection of DB
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  // Throw error if no connection made
  .catch((error) => console.log(error.message));
