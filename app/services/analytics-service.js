const { BigQuery } = require('@google-cloud/bigquery');
const { getAnalytics, getTotalUsers } = require('../queries/analytics-queries');
require('dotenv').config();

const options = {
    keyFilename: process.env.KEY_FILE_NAME ?? '',
    projectId: process.env.PROJECT_ID ?? ''
};
const bigquery = new BigQuery(options);
async function fetchAnalyticsData() {
  try {
    const query1 = {
      query: getTotalUsers,
      location: 'eu',
    };

    const query2 = {
      query: getAnalytics,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'eu',
    };
    const [totalUsersJob] = await bigquery.createQueryJob(query1);
    const [getAnalyticsJob] = await bigquery.createQueryJob(query2);

    const [totalUsersResponse] = await totalUsersJob.getQueryResults();
    const [getAnalyticsResponse] = await getAnalyticsJob.getQueryResults();
    const totalUsersValue = totalUsersResponse[0] ? totalUsersResponse[0].total_users : 0;

    const analyticsData = {
      total_users: totalUsersValue,
      daily_stats: getAnalyticsResponse
    };

    return analyticsData;
  } catch (error) {
    console.error('Error retrieving analytics:', error);
    throw new Error('An error occurred while retrieving analytics data.');
  }
}

module.exports = {
  fetchAnalyticsData
};