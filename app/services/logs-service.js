const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config();

const keyFileContent = process.env.KEY_FILE ?? ''
const keyFileJson = Buffer.from(keyFileContent, 'base64').toString('utf-8');
    
const credentials = JSON.parse(keyFileJson);
const options = {
    credentials,
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