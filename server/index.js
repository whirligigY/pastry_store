require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const model = require('./models/model');
const routerApi = require('./routes');
const errorHandler = require('./middlewares/handleErrorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use('/api', routerApi);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
