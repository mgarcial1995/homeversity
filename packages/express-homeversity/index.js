const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const coursesRoutes = require("./api/courses/routes");
const usersRoutes = require("./api/users/routes");
const studentsRoutes = require("./api/students/routes");
const plansRoutes = require("./api/plans/routes");
const programsRoutes = require("./api/programs/routes");
const teacherRoutes = require("./api/teachers/routes");
const paymentRoutes = require("./api/payment/routes");


// Server Setup
const PORT = 3001;

// Express Setup
const app = express();

mongoose.connect(
	`mongodb+srv://admin:martin12345@cluster0.n075l.mongodb.net/homeversity?retryWrites=true&w=majority`
);

app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.use('/api/courses', coursesRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/students', studentsRoutes)
app.use('/api/plans', plansRoutes)
app.use('/api/programs', programsRoutes)
app.use('/api/teachers', teacherRoutes)
app.use('/api/payment', paymentRoutes)

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});