import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';


export const Layout = () => {
  return (
    <div style={{ maxWidth: 750, margin: '0 auto', padding: '0 16px' }}>
      <Toaster />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
