# Seed AWS dynamodb

This project allows to seed a AWS dynamodb table.

## Install dependencies

```
npm install -g @etrivinos_epam/seed-dynamodb
```

# Seed table

```
seed-dynamodb AWS_PROFILE=serverless REGION=us-east-2 FILEPATH=./db/seed/stocks.json
```

Where:

- **_AWS_PROFILE_**. Aws profile save in ~/.aws/credentials (Use _default_ profile if it's not provided).
- **_REGION_**. AWS Region. _Default: us-east-2_. (Required)
- **_FILEPATH_**. Filepath with seed JSON data. e.g. ./db/seed/stocks.json (Required)
- **_TABLE_NAME_**. Table to be seed. (Required)