import { QueryClient } from '@tanstack/react-query';

const DEFAULT_QUERY_OPTIONS = {
  retry: 1,
  refetchOnWindowFocus: false,
  staleTime: 0,
};

const environment = import.meta.env.VITE_APP_ENV;

let environmentConfig = {};
switch (environment) {
  case 'dev':
    environmentConfig = {
      defaultOptions: {
        queries: {
          ...DEFAULT_QUERY_OPTIONS,
          cacheTime: 1000 * 60 * 2,
        },
      },
    };
    break;
  case 'stage':
    environmentConfig = {
      defaultOptions: {
        queries: {
          ...DEFAULT_QUERY_OPTIONS,
          cacheTime: 1000 * 60 * 2,
        },
      },
    };
    break;
  case 'prod':
    environmentConfig = {
      defaultOptions: {
        queries: {
          ...DEFAULT_QUERY_OPTIONS,
          cacheTime: 1000 * 60 * 2,
        },
      },
    };
    break;
  default:
    environmentConfig = {
      defaultOptions: { queries: DEFAULT_QUERY_OPTIONS },
    };
}

export const queryClient = new QueryClient(environmentConfig);
