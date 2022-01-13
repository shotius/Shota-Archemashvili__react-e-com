import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BACKEND_URL } from './constants';

class GlobalApp {
  constructor() {
    this.client = GlobalApp.initApollo();
  }

  static initApollo() {
    if (this.client) {
      return this.client;
    }
    const client = new ApolloClient({
      uri: BACKEND_URL,
      cache: new InMemoryCache(),
    });
    return client;
  }

  get apolloClient() {
    if (this.client) {
      return this.client;
    } else {
      return new GlobalApp();
    }
  }
}

const singletonInstance = new GlobalApp();

export default singletonInstance;
