const express = require('express');
const lowdDB = require('lowdb');
const FyleSync = require('lowdb/adapters/FileSync');
const cors = require('cors');

const coursesRoutes = require("./api/courses/routes");

// Server Setup
const PORT = 3001;

// Database Setup
const adapter = new FyleSync('db.json');
const db = lowdDB(adapter);
db.defaults({ courses: [], programs:[] }).write();

// Express Setup
const app = express();

// Global Middlewares
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.use('/api/courses', coursesRoutes)

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});