import { Routes, Route, Navigate } from 'react-router-dom';
import DiscoveryPage from '@/pages/discovery';
import { ROUTES } from '../config/routes';
import { BrowserRouter } from 'react-router-dom';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<Navigate to={ROUTES.DISCOVERY} replace />}
      />
      <Route path={ROUTES.DISCOVERY} element={<DiscoveryPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </BrowserRouter>
);
