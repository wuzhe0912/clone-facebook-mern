import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 3001;

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/express-mongoose', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;

// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully!');
// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
