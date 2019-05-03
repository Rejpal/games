import * as Bluebird from 'bluebird';
import * as redis from 'redis';
const redisAsync: any = Bluebird.promisifyAll(redis);

const REDIS_CONNECTION_STRING = 'redis://localhost:6379/0';
const LOG_APP_NAME = 'UPlusGames';
let redisClient;

async function createRedisClient() {
  return redisAsync.createClient();
}

export async function getRedisClient() {
  if (!redisClient) {
    redisClient = createRedisClient();
  }
  return redisClient;
}
