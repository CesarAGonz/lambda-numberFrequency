# Lambda Number Frequency Service

![AWS Lambda]

## Description

This project implements a **serverless** service deployed on **AWS Lambda** that processes an array of numbers and returns the number that occurs the most frequently, along with its count. The function efficiently counts the occurrences of each number in the array and responds in **JSON** format with the most frequent number. Designed to be lightweight and ideal for serverless environments.

## Features

- Built with **JavaScript/Node.js**.
- Deployed on **AWS Lambda** for cost-effective, serverless execution.
- Accepts an array of numbers as input in a simple API request.
- Returns the most frequent number and its occurrence count in **JSON**.
- Easily integratable into existing applications via REST API.
- Can be executed locally for testing and debugging purposes.

## API Endpoint

To use the service, send a **POST** request to the following endpoint:

**Endpoint**:  
`https://gpy5e4i87f.execute-api.us-east-2.amazonaws.com/findMostFrequentNumber`

### Request

The request body must include a JSON object with an array of numbers.

#### Example Request Body:
```json
{
   "numbers": [5, 2, 5, 7, 2, 4, 5]
}
```

### Response

The service will return the most frequent number from the input array, along with the count of its occurrences.

#### Example Response:
```json
{
    "num": 5,
    "count": 3
}
```

### Error Handling

If the input is invalid (for example, the array is not provided or contains non-number elements), the service will return a **400** status code with a descriptive error message.

#### Example Error Response:
```json
{
    "error": "Invalid input: numbers must be an array of numbers."
}
```

## Example Usage

You can test the service by using tools like **Postman** or **curl**, or by integrating it into your application. Below is an example of how to make a request using **curl**:

```bash
curl -X POST https://gpy5e4i87f.execute-api.us-east-2.amazonaws.com/findMostFrequentNumber \
  -H "Content-Type: application/json" \
  -d '{"numbers": [5, 2, 5, 7, 2, 4, 5]}'
```

## How It Works

1. The Lambda function parses the input to ensure it's an array of numbers.
2. It counts how many times each number appears in the array.
3. The number with the highest occurrence is returned as the response, along with the count of occurrences.

## Running the Function Locally

You can also run the function locally for testing purposes. To do so, download the repository, and run the following command in your terminal:

```bash
node localFunction.js
```

Make sure you are using **Node.js version 20** or higher.

## License

This project is licensed under the MIT License.
