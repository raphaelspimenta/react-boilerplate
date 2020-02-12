export const env = process.env.APP_ENV

export const environments = {
  mock: {
    url: 'http://localhost:3000',
  },
  production: {
    url: 'https://yourapi.com',
  },
}

export const getCurrentEnvConfig = () => environments[env] || environments.production
