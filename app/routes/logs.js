const express = require('express')
const { createEventLog } = require('../controllers/logs-controller');
const validateEventData = require('./validators/event-data-validator');

const router = express.Router()

router.post('/', validateEventData, createEventLog)

module.exports = router
