import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as={'label'}
      alignSelf={'center'}
      align={'center'}
      bg={'gray.800'}
      borderRadius={'full'}
      color={'gray.200'}
      flex={1}
      maxWidth={400}
      ml={'6'}
      pos={'relative'}
      px={'8'}
      py={'4'}
    >
      <Input
        color={'gray.50'}
        mr={'4'}
        placeholder={'Burcar na plataforma'}
        px={'4'}
        variant={'unstyled'}
        _placeholder={{
          color: 'gray.400'
        }}
      />

      <Icon as={RiSearchLine} />
    </Flex>
  );
}
