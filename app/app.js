const express = require('express');
const app = express();

// Configure middleware
app.use(express.json());
// Add additional middleware as needed

const logsRoute = require('./routes/logs');
const analyticsRoute = require('./routes/analytics');

app.use('/logs', logsRoute);
app.use('/analytics', analyticsRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});