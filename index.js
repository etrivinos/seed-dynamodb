#!/usr/bin/env node

import { saveItemsToDynamoDB } from "./utils/db.js";
import { getItemFromJSONFile } from "./utils/file.js";
import { argumentsAreValid, updateProcessEnvLocal } from "./utils/validate.js";

const init = async () => {
  try {
    if(argumentsAreValid()) {
      updateProcessEnvLocal();
      saveItems();
    }
    else {
      throw new Error('Please provide all required arguments: FILEPATH, TABLE_NAME.');
    }
  }
  catch (error) {
    console.log(error);
  }
};

const saveItems = async () => {
  const items = await getItemFromJSONFile(process.env.__LOCAL.FILEPATH);
  await saveItemsToDynamoDB(items);
}

init();