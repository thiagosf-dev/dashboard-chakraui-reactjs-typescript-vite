import { Box, BoxProps as ChakraBoxProps, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NavSectionProps extends ChakraBoxProps {
  children: ReactNode;
  title: string;
};

export function NavSection({
  children,
  title,
  ...rest
}: NavSectionProps) {
  return (
    <Box {...rest}>
      <Text
        color={'gray.400'}
        fontSize={'small'}
        fontWeight={'bold'}
      >
        {title}
      </Text>

      <Stack
        align={'stretch'}
        mt={'8'}
        spacing={'4'}
      >
        {children}
      </Stack>
    </Box>
  );
}
