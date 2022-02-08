import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BACKEND_URL } from './constants';

class GlobalApp {
  constructor() {
    this.client = GlobalApp.initApollo();
  }

  // initialize apollo client singleton
  static initApollo() {
    if (this.client) {
      return this.client;
    }

    const client = new ApolloClient({
      uri: BACKEND_URL,
      cache: new InMemoryCache({
        typePolicies: {
          // To solve attribute caching cohesion, shoes and clothes had the same cache ids
          AttributeSet: {
            keyFields: ['id', 'items', ['value']],
          },
        },
      }),
    });

    return client;
  }

  // get Apollo client instanse - Singleton
  get apolloClient() {
    if (this.client) {
      return this.client;
    }
    return new GlobalApp();
  }
}

const singletonInstance = new GlobalApp();

export default singletonInstance;
