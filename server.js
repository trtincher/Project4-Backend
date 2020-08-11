const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

app.use(cors());

var corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	methods: [ 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE' ]
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

const userRouter = require('./controllers/user');
const characterRouter = require('./controllers/character');

app.use('/api/users', userRouter);
app.use('/api/characters', characterRouter);

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => console.log(`Server running on ${app.get('port')}`));
