import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './generated/app';

const app = express();
const port = 3000;

// configure the view engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// configure static assets serving
app.use(express.static(path.resolve(__dirname, '../dist')));

// routes
app.get('/', (request, response) => {
    response.render('app', {
        app: ReactDOMServer.renderToString(<App />)
    });
});

app.listen(port, () => console.log('SERVER RUNNING: Listening on port ', port));
