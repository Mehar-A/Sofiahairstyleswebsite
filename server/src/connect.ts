const mongoose = require('mongoose');
import * as dotenv from 'dotenv';
import { User } from '../models/user';

// mongo connection
dotenv.config();

// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);

const uri = process.env.ATLAS_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', async () => {
  console.log('connected');
});
