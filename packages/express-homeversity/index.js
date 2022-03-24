const express = require('express');
// const lowdDB = require('lowdb');
// const FyleSync = require('lowdb/adapters/FileSync');
const cors = require('cors');
const mongoose = require("mongoose");

const coursesRoutes = require("./api/courses/routes");
const usersRoutes = require("./api/users/routes");

// Server Setup
const PORT = 3001;

// Database Setup
// const adapter = new FyleSync('db.json');
// const db = lowdDB(adapter);
// db.defaults({ courses: [], programs:[] }).write();

// Express Setup
const app = express();


// MONGODBIMPORT
// mongoose.connect(
// 	`mongodb://127.0.0.1:27017/homeversity`,
// 	{ useUnifiedTopology: true, useNewUrlParser: true }
// );

mongoose.connect(
	`mongodb+srv://admin:martin12345@cluster0.n075l.mongodb.net/homeversity?retryWrites=true&w=majority`
);

// Global Middlewares
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.use('/api/courses', coursesRoutes)
app.use('/api/users', usersRoutes)

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});