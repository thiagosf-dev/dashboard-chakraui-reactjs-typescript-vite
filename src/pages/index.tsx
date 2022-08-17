import { Button, Flex, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

export const Login = () => {
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Flex
        as={'form'}
        bg={'gray.800'}
        borderRadius={'8'}
        flexDir={'column'}
        maxW={'360'}
        p={'8'}
        w={'100%'}
      >
        <Stack spacing={'4'}>
          <Input
            name={'email'}
            type={'email'}
            label={'E-mail'}
          />

          <Input
            name={'password'}
            type={'password'}
            label={'Senha'}
          />
        </Stack>

        <Button
          colorScheme={'pink'}
          mt={'6'}
          size={'lg'}
          type={'submit'}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
