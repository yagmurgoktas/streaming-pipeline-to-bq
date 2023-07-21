const { fetchAnalyticsData } = require('../services/analytics-service');

async function getAnalytics(req, res) {
    try {
        const analyticsData = await fetchAnalyticsData();
        res.json(analyticsData);
    } catch (error) {
      console.error('Error retrieving analytics:', error);
      res.status(500).json({ error: 'An error occurred while retrieving analytics data.' });
    }
}

module.exports = {
    getAnalytics
};