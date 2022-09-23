const express = require('express');

const loginRoute = require('./routes/login.route');
const usersRoute = require('./routes/users.route');

const errorMiddleware = require('./middlewares/error');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', loginRoute);
app.use('/user', usersRoute);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
