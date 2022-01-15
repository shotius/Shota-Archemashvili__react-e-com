import CatalogPage from './pages/CatalogPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BasketPage } from './pages/BasketPage';
import ProductPage from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/catalog/tech" replace />} />
          <Route path="/catalog" element={<Navigate to="/catalog/clothes" replace />} />
          <Route path="/catalog/:category" element={<CatalogPage />} />
          <Route path="/catalog/:category/:productId" element={<ProductPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
