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

    // I desable typename in the cache because I had an issue
    // with sizes cache in clothes category
    const client = new ApolloClient({
      uri: BACKEND_URL,
      cache: new InMemoryCache({
        addTypename: false,
      }),
    });

    return client;
  }

  // get Apollo client instanse
  get apolloClient() {
    if (this.client) {
      return this.client;
    }
    return new GlobalApp();
  }
}

const singletonInstance = new GlobalApp();

export default singletonInstance;
