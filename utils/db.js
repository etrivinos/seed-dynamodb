
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

export const saveItemsToDynamoDB = async (items) => {
  const dynamoDBClient = new DynamoDBClient({ region: process.env.__LOCAL.REGION });
  const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDBClient);

  for(const item of items) {
    const command = new PutCommand({ TableName: process.env.__LOCAL.TABLE_NAME, Item: item });
    await dynamoDBDocumentClient.send(command);
  }
}
