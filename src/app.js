// Este arquivo ficará responsável por receber as definições de middlewares e rotas de sua API

const express = require('express');

// ...

const loginRouter = require('./routes/loginRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
// app.use('/user', userRouter); Req 4, 5, 6
// app.use('/categories', categoryRouter); Req 8, 0, 10, 11
// app.use('/post', postRouter); Req 12+

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
