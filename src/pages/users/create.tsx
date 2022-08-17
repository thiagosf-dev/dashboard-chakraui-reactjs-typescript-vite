import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { RiCloseLine, RiSaveLine } from "react-icons/ri";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex
        maxW={1480}
        mx={'auto'}
        my={'6'}
        px={'6'}
        w={'100%'}
      >
        <Sidebar />

        <Box
          bg={'gray.800'}
          borderRadius={8}
          flex={'1'}
          p={'8'}
        >
          <Heading
            fontWeight={'normal'}
            size={'lg'}
          >
            Criar usuário
          </Heading>

          <Divider
            borderColor={'gray.700'}
            my={'6'}
          />

          <VStack spacing={'8'} >
            <SimpleGrid
              minChildWidth={'240px'}
              spacing={'8'}
              w={'100%'}
            >
              <Input
                name={'name'}
                label={'Nome completo'}
              />

              <Input
                name={'email'}
                label={'E-mail'}
                type={'email'}
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth={'240px'}
              spacing={'8'}
              w={'100%'}
            >
              <Input
                name={'password'}
                label={'Senha'}
                type={'password'}
              />

              <Input
                name={'password_confirmation'}
                label={'Confirmação da senha'}
                type={'password'}
              />
            </SimpleGrid>
          </VStack>

          <Flex
            justify={'flex-end'}
            mt={'8'}
          >
            <HStack spacing={'8'}>
              <Button
                colorScheme={'whiteAlpha'}
                leftIcon={<Icon as={RiCloseLine} />}
                width={'120px'}
              >
                Cancelar
              </Button>

              <Button
                colorScheme={'pink'}
                leftIcon={<Icon as={RiSaveLine} />}
                width={'120px'}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
