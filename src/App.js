import CatalogPage from './pages/CatalogPage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BasketPage } from './pages/BasketPage';
import ProductPage from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';
import ToastPortal from './components/organizms/portal/ToastPortal';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Redirect to="/catalog/tech" />}
            />
            <Route
              path="/catalog"
              exact
              render={() => <Redirect to="/catalog/clothes" />}
            />
            <Route
              path="/catalog/:category"
              exact
              render={(props) => <CatalogPage {...props} />}
            />
            <Route
              path="/catalog/:category/:productId"
              exact
              render={(props) => <ProductPage {...props} />}
            />
            <Route
              path="/basket"
              exact
              render={(props) => <BasketPage {...props} />}
            />
            <Route path="*" render={(props) => <ErrorPage {...props} />} />
          </Switch>
        </BrowserRouter>

        {/* Mount taost portal  */}
        <ToastPortal />
      </>
    );
  }
}

export default App;
