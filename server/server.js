const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")
const routes = require('./routes/userRoutes')
app.use(routes)

app.use(cors())

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecommerse", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));



// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
