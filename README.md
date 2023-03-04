# Seed AWS dynamodb

This project allows to seed a AWS dynamodb table.

## Install dependencies

```
npm install
```

# Seed table

```
AWS_PROFILE=serverless REGION=us-east-2 FILEPATH=./db/seed/stocks.json TABLE_NAME=stocks node index.js
```

Where:

- **_AWS_PROFILE_**. Aws profile save in ~/.aws/credentials.
- **_REGION_**. AWS Region.
- **_FILEPATH_**. Filepath with seed JSON data. e.g. ./db/seed/stocks.json
- **_TABLE_NAME_**. Table to be seed.