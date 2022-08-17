import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useLocation, useParams, useRoutes, useSearchParams } from 'react-router-dom';

interface SidebaDrawerProviderProps {
  children: ReactNode;
};

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebaDrawerProviderProps) {
  const disclosure = useDisclosure();
  const {pathname} = useLocation();

  useEffect(()=>{
    disclosure.onClose();
    console.log('alterou o path');
  },[pathname]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
