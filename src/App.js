import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
import ToastPortal from './components/organizms/portal/ToastPortal';
import { Component } from 'react';
import { ProductPage } from './pages/ProductPage';
import { CatalogPage } from './pages/CatalogPage.js';

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
              path="/cart"
              exact
              render={(props) => <CartPage {...props} />}
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
