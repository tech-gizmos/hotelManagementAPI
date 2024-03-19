const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./db/db');
const roomTypesRoutes = require('./routes/roomTypesRoutes');
const roomsRoutes = require('./routes/roomsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/v1/room-types', roomTypesRoutes);
app.use('/api/v1/rooms', roomsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
