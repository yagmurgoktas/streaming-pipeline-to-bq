const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config();

const options = {
  keyFilename: process.env.KEY_FILE_NAME ?? '',
  projectId: process.env.PROJECT_ID ?? ''
};

const pubSubClient = new PubSub(options);

async function saveEventLog(log) {
  const dataBuffer = Buffer.from(JSON.stringify(log));
  try {
    const messageId = await pubSubClient
    .topic(process.env.PUBSUB_TOPIC_NAME)
    .publishMessage({data: dataBuffer});
  console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error('Error saving event log:', error);
    throw new Error('An error occurred while saving the event log.');
  }
}

module.exports = {
  saveEventLog
};