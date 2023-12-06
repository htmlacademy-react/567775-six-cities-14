const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export type TToken = string;

export const getToket = (): TToken => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);

  return token ?? '';
};

export const saveToken = (token: TToken): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
