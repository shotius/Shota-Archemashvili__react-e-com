import { ApolloClient, InMemoryCache } from '@apollo/client';

class GlobalApp {
  constructor() {
    this.client = GlobalApp.initApollo();
  }

  static initApollo() {
    if (this.client) {
      return this.client;
    }
    const client = new ApolloClient({
      uri: 'http://localhost:4000/',
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
