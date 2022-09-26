const express = require('express');
require('express-async-errors');

const {
  loginRoute,
  usersRoute,
  categoriesRoute,
  blogPostsRoute,
} = require('./routes');

const errorMiddleware = require('./middlewares/error');

// ...

const app = express();

app.use(express.json());

// ...

app.use('/login', loginRoute);
app.use('/user', usersRoute);
app.use('/categories', categoriesRoute);
app.use('/post', blogPostsRoute);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
