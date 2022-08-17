import { Outlet } from 'react-router-dom';

import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext';

export const App = () => {
  return (
    <SidebarDrawerProvider>
      <Outlet />
    </SidebarDrawerProvider>
  )
}
