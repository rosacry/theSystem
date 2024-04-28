const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/workouts', workoutRoutes);

app.listen(3000, () => console.log('Server is running...'));
