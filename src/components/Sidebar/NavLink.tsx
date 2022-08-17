import { Icon, Link, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import { ElementType, ReactNode } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  children: ReactNode;
  icon: ElementType;
};

export function NavLink({
  children,
  icon,
  ...rest
}: NavLinkProps) {
  return (
    <Link
      alignItems={'center'}
      display={'flex'}
      {...rest}
    >
      <Icon
        as={icon}
        fontSize={20}
      />
      <Text
        fontWeight={'medium'}
        ml={'4'}
      >
        {children}
      </Text>
    </Link>
  );
}
