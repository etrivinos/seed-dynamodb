import minimist from 'minimist';

export const getLineArguments = () => {
    return minimist(process.argv.slice(2));
}

export const getDefaultArguments = () => {
  return {
    AWS_PROFILE: 'default',
    REGION: 'us-east-2',
    FILEPATH: null,
    TABLE_NAME: null
  }
}

export const getLineArgumentsWithDefaults = () => {
  const args = getLineArguments();
  const defaults = getDefaultArguments();

  return { ...defaults, ...args };
}
