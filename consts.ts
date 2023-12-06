export enum AppRouter {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  '/public/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/public/img/pin-active.svg';

export const CITY_LIST = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const DEFAULT_CITY = CITY_LIST.Paris;
export const DEFAULT_SORTING = 'popular';
export const TIME_HIDE_ERROR_MESSAGE = 2000;
export const MAX_REVIEWS_LIST_COUNT = 10;
export const MAX_NEARBY_LIST_COUNT = 3;
export const ApiRoute = {
  Offers: '/offers',
  Favorites: '/favorite',
  Login: '/login',
  Logout: '/logout',
  Comments: '/comments',
} as const;

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Comments = 'COMMENTS',
  OffersNearby = 'OFFERSNEARBY',
  ErrorMessage = 'ERRORMESSAGE',
  Favorites = 'FAVORITES',
}

export enum FavoritesTriggerUpdate {
  Offers = 'UpdateOffers',
  OfferDetail = 'UpdateOfferDetail',
  Favorites = 'UpdateFavorites',
  Nearby = 'UpdateNearby',
}
