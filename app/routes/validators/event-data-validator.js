function validateEventData(req, res, next) {
    const user_id = req.body.user_id
    const session_id = req.body.session_id
    const event_time = req.body.event_time;
    const errors = [];
  
    if (!user_id || user_id.trim() === '') {
      errors.push('user_id is required and must not be empty.');
    }
  
    if (!session_id || session_id.trim() === '') {
      errors.push('session_id is required and must not be empty.');
    }
  
    if (!event_time || event_time.trim() === '') {
      errors.push('event_time is required and must not be empty.');
    }
    
    else {
      const currentTime = new Date();
      const eventTimeDate = new Date(event_time);
  
      if (eventTimeDate > currentTime) {
        errors.push('event_time cannot be greater than the current time.');
      }
    }
    
    if (errors.length === 0) {
        next();
    } else {
        res.status(400).json({ errors: errors });
    }
}

module.exports = validateEventData;
