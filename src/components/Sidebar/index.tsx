import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { SidebarNav } from './SidebarNav';

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  // NAVEGAÇÃO EM MOBILE
  if (isDrawerSidebar) {
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent bg={'gray.800'} p={'4'} >
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerCloseButton />

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  // NAVEGAÇÃO EM DESKTOP
  return (
    <Box
      as={'aside'}
      mr={'8'}
      w={'64'}
    >
      <SidebarNav />
    </Box>
  );
}
