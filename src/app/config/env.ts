export type AppEnv = 'dev' | 'stage' | 'prod';

export const VITE_APP_ENV = import.meta.env.VITE_APP_ENV as AppEnv;

const API_BASE_URLS: Record<AppEnv, string> = {
  dev: import.meta.env.VITE_API_BASE_URL_DEV,
  stage: import.meta.env.VITE_API_BASE_URL_STAGE,
  prod: import.meta.env.VITE_API_BASE_URL_PROD,
};

export const API_BASE_URL = API_BASE_URLS[VITE_APP_ENV];

export const devEnv = {
  useMock: true,
  logLevel: 'debug',
};

export const stageEnv = {
  useMock: false,
  logLevel: 'info',
};

export const prodEnv = {
  useMock: false,
  logLevel: 'error',
};
