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
          <Route path="/" element={<Navigate to="/catalog" replace />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:productId" element={<ProductPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
