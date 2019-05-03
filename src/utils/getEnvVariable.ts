import * as dotenv from 'dotenv';

dotenv.config();

export function getEnvVariable(varName: string) {
  if (!process.env[varName]) {
    throw new Error(`Variable ${varName} is not defined in .env`);
  }
  return process.env[varName];
}
