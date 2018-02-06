import { AuthenticationContext, adalFetch } from 'react-adal';

export const adalConfig = {
  tenant: '4506cd6e15bd364ae1e496669ce690af7aee7012',
  clientId: '2f6fea12-e3c1-47d5-ae72-5285c6eecef1',
  endpoints: {
    api: '2f6fea12-e3c1-47d5-ae72-5285c6eecef1',
  },
  cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);