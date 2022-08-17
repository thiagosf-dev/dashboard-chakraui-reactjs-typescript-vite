import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface PaginationItemProps extends ChakraButtonProps {
  isCurrent?: boolean;
  numberPage: number;
};

export function PaginationItem({
  isCurrent = false,
  numberPage,
  ...children
}: PaginationItemProps) {
  if (isCurrent)
    return (
      <Button
        colorScheme={'pink'}
        disabled
        fontSize={'xs'}
        size={'sm'}
        width={'4'}
        _disabled={{
          cursor: 'default',
          bg: 'pink.500',
        }}
        {...children}
      >
        {numberPage}
      </Button>
    );

  return (
    <Button
      bg={'gray.700'}
      fontSize={'xs'}
      size={'sm'}
      width={'4'}
      _hover={{
        bg: 'gray.500'
      }}
    >
      {numberPage}
    </Button>
  );
}
