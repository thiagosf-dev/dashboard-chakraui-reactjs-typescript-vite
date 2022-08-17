import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Pofile';
import { SearchBox } from './SearchBox';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as={'header'}
      align={'center'}
      h={'20'}
      maxW={1480}
      mt={'4'}
      mx={'auto'}
      px={'6'}
      w={'100%'}
    >

      {!isWideVersion && (
        <IconButton
          aria-label={'Open Navigation'}
          fontSize={'24'}
          icon={<Icon as={RiMenuLine} />}
          mr={'2'}
          onClick={onOpen}
          variant={'unstyled'}
        >

        </IconButton>
      )}

      <Logo />

      {isWideVersion && (<SearchBox />)}

      <Flex align={'center'} ml={'auto'} >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
