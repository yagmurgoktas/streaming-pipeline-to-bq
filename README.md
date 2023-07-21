# Streaming Data Pipeline To Google BigQuery Web Service

## Overview

This is a Node.js data pipeline web service that collects event logs from mobile devices through a HTTP POST endpoint and stores those logs in Google BigQuery. It also provides a basic analytics GET endpoint for serving aggregated results retrieved from BigQuery via SQL.

## Features

-   Collect event logs from mobile devices via HTTP POST
-   Store event logs in Google BigQuery
-   Provide analytics data through a GET endpoint
-   Scale well under massive traffic
-   Smart aggregations for analytics data
-   Follows industry standards for data storage and serving

## Requirements

-   Node.js (version X.X.X)
-   NPM (version X.X.X)
-   Google Cloud Platform (GCP) account
-   Enabled Google BigQuery service
-   Google Cloud Service Account key with BigQuery and PUB/SUB permissions
-   Kubernetes Cluster (Google Kubernetes Engine - GKE) for deployment

## Getting Started

1.  Clone the repository:

`git clone https://github.com/yagmurgoktas/streaming-pipeline-to-bq.git

2.  Install dependencies:

`npm install` 

3.  Set up environment variables:

`# Create a .env file based on the example.env

4.  Run the web service locally:

`npm start` 

5.  To deploy the service to Kubernetes, follow the steps in the "Kubernetes Deployment" section below.

## API Endpoints

### POST /logs

Collect event logs from mobile devices. Send JSON logs in the request body with the following format:


`{
  "type": "event",
  "session_id": "9FDA74C2-AB57-4840-87D0-64324772B5A2",
  "event_name": "click",
  "event_time": 1631797200,
  "page": "main",
  "country": "US",
  "region": "California",
  "city": "Los Angeles",
  "user_id": "Uu1qJzlfrxYxOS5z1kfAbmSA5pF2"
}` 

### GET /analytics

Retrieve aggregated analytics data. The response will include the following fields:

`{
  "total_users": 1000,
  "daily_stats": [
    {
      "date": "2023-07-01",
      "average_session_duration": 45,
      "active_user_count": 100,
      "new_user_count": 45
    },
    {
      "date": "2023-07-02",
      "average_session_duration": 40,
      "active_user_count": 92,
      "new_user_count": 30
    },
    {
      "date": "2023-07-03",
      "average_session_duration": 64,
      "active_user_count": 78,
      "new_user_count": 40
    }
  ]
}` 

## Kubernetes Deployment

To deploy the Node.js data pipeline web service to Kubernetes (GKE), follow these steps:

1.  Create a Google Kubernetes Engine (GKE) cluster if you haven't already.
2.  Install Helm on your local machine if you haven't already.
3.  Update the values in the `values.yaml` file to match your deployment configuration.
4.  Install the Helm chart with the following command if you don't have any deployment:

`helm install codeway-case-release ./charts/streaming-pipeline-app-chart --values values.yaml`

5. If you have a deployment already, use the following command:

`helm upgrade codeway-case-release ./charts/streaming-pipeline-app-chart`

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your proposed changes.

## Contact

For questions or support, please contact [yagmurgoktasss@gmail.com](mailto:your-email@example.com).