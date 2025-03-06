import { Route, Routes } from 'react-router';
import paths from './paths';
import Home from '@/pages/home';
import Forms from '@/pages/forms';
import Dashboard from '@/pages/dashboard';

const GlobalRoute = () => (
  <Routes>
    <Route path={paths.home} element={<Home />} />
    <Route path={paths.form} element={<Forms />} />
    <Route path={paths.dashboard} element={<Dashboard />} />
    <Route path="*" element={<h1>Hello world !</h1>} />
  </Routes>
);

export default GlobalRoute;
