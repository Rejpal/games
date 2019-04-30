import { Injectable } from '@nestjs/common';
import Axios, { AxiosResponse } from 'axios';
import {
  ICheapSharkInfoResponse,
  ICheapSharkDealResponse,
} from './interfaces/cheapSharkResponse.interface';
import { IGame } from './interfaces/game.interface';

@Injectable()
export class GameService {
  /**
   * Returns list of games
   */
  public async getGames(): Promise<IGame[]> {
    const gamesInfo: {
      data: ICheapSharkInfoResponse[];
    } = await this.fetchGameInfo();
    const gamesDeals: { data: ICheapSharkDealResponse }[] = [];
    const gamesList: IGame[] = [];

    await Promise.all(
      gamesInfo.data.map(async game => {
        const deal = await this.fetchGameInfoByDealId(game.dealID);
        gamesDeals.push(deal);
      }),
    );

    gamesDeals.forEach((deal, index) => {
      const {
        gameInfo: { name, salePrice, releaseDate },
        cheapestPrice: { price },
      } = deal.data;

      // if game was not released yet we do not include release date into the response to prevent confusion
      const convertedReleaseDate =
        releaseDate !== 0 ? new Date(releaseDate * 1000) : undefined;
      gamesList.push({
        name,
        salePrice: Number(salePrice),
        releaseDate: convertedReleaseDate,
        cheapestPrice: Number(price),
      });
    });

    return gamesList;
  }

  private async fetchGameInfo(): Promise<AxiosResponse> {
    const res = await Axios.get(
      'http://www.cheapshark.com/api/1.0/deals?storeID=1&desc=0&title=grand%20theft%20auto&pageSize=20',
    );
    if (res.status !== 200) {
      throw new Error('Error fetching games data');
    }
    return res;
  }

  private async fetchGameInfoByDealId(id: string): Promise<AxiosResponse> {
    const res = await Axios.get(
      `http://www.cheapshark.com/api/1.0/deals?id=${id}`,
    );
    if (res.status !== 200) {
      throw new Error(`Error fetching deal data. DealId: ${id}`);
    }
    return res;
  }
}
