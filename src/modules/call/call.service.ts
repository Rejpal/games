import { Injectable } from '@nestjs/common';
import Axios, { AxiosResponse } from 'axios';
import { getRedisClient } from '../../utils/redisClient';

const MONDAY = 1;
const REDIS_CALL_LIST_KEY = 'calls';

@Injectable()
export class CallService {
  /**
   * Returns list of call dates
   */
  public async getCalls(): Promise<number[]> {
    const client = await getRedisClient();

    const calls = await client.lrangeAsync(REDIS_CALL_LIST_KEY, 0, -1);
    const parsedDates = calls.map(dateString => {
      return new Date(dateString);
    });

    return parsedDates.filter(date => {
      return date.getDay() === MONDAY;
    });
  }

  public async addCall(): Promise<void> {
    const client = await getRedisClient();
    return await client.lpushAsync(REDIS_CALL_LIST_KEY, new Date());
  }
}
