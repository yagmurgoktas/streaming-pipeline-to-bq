const { saveEventLog } = require('../services/logs-service');


async function createEventLog(req, res) {
    try {
      const log = req.body;
      await saveEventLog(log);
      res.status(201).json({ message: 'Event log saved successfully.' });
    } catch (error) {
      console.error('Error creating event log:', error);
      res.status(500).json({ error: 'An error occurred while creating the event log.' });
    }
  }
  
  module.exports = {
    createEventLog
  };