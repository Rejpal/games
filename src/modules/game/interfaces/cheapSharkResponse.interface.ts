export interface ICheapSharkInfoResponse {
  readonly internalName: string;
  readonly title: string;
  readonly metacriticLink: string;
  readonly dealID: string;
  readonly storeID: string;
  readonly gameID: string;
  readonly salePrice: string;
  readonly normalPrice: string;
  readonly isOnSale: string;
  readonly savings: string;
  readonly metacriticScore: string;
  readonly steamRatingText: string;
  readonly steamRatingPercent: string;
  readonly steamRatingCount: string;
  readonly steamAppID: string;
  readonly releaseDate: number;
  readonly lastChange: number;
  readonly dealRating: string;
  readonly thumb: string;
}

interface ICheapSharkCheaperStore {
  readonly dealID: string,
  readonly storeID: string,
  readonly salePrice: string,
  readonly retailPrice: string
}

interface ICheapSharkDealGameInfo {
  readonly storeID: string,
  readonly gameID: string,
  readonly name: string,
  readonly steamAppID: string,
  readonly salePrice: string,
  readonly retailPrice: string,
  readonly steamRatingText: string,
  readonly steamRatingPercent: string,
  readonly steamRatingCount: string,
  readonly metacriticScore: string,
  readonly metacriticLink: string,
  readonly releaseDate: number,
  readonly publisher: string,
  readonly steamworks: string,
  readonly thumb: string
}

interface ICheapSharkCheapestPrice {
  readonly price: string,
  readonly date: number
}

export interface ICheapSharkDealResponse {
  readonly gameInfo: ICheapSharkDealGameInfo,
  readonly cheaperStores: ICheapSharkCheaperStore[],
  readonly cheapestPrice: ICheapSharkCheapestPrice
}
