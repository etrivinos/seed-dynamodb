import { getLineArgumentsWithDefaults } from "./args.js";

export const argumentsAreValid = () => {
    const args = getLineArgumentsWithDefaults();
    return args.FILEPATH && args.TABLE_NAME;
}

export const updateProcessEnvLocal = () => {
    const args = getLineArgumentsWithDefaults();

    process.env = {
        ...process.env,
        __LOCAL: args
    };
}