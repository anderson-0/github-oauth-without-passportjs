import "dotenv/config";
import express from 'express';

import { router } from './routes';
const app = express();

// Accept JSON in the body of POST requests
app.use(express.json())

app.use(router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});