import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
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
          <Flex
            align={'center'}
            justify={'space-between'}
            mb={'8'}
          >
            <Heading
              fontWeight={'normal'}
              size={'lg'}
            >
              Usuários
            </Heading>

            <Button
              as={'a'}
              colorScheme={'pink'}
              fontSize={'sm'}
              leftIcon={<Icon as={RiAddLine} />}
              size={'md'}
            >
              Criar novo
            </Button>
          </Flex>

          <Table
            colorScheme={'whiteAlpha'}
          >
            <Thead>
              <Tr>
                <Th
                  color={'gray.300'}
                  px={'6'}
                  width={'8'}
                >
                  <Checkbox colorScheme={'pink'} />
                </Th>
                <Th>
                  Usuário
                </Th>
                <Th>
                  Data de cadastro
                </Th>
                <Th width={'8'}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={'6'}>
                  <Checkbox colorScheme={'pink'} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={'bold'}>
                      Thiago Soares Figueiredo
                    </Text>
                    <Text
                      color={'gray.300'}
                      fontSize={'sm'}
                    >
                      thiagosf.dev@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  01 de Maio, 2022
                </Td>
                <Td>
                  <HStack spacing={'2'}>
                    <Button
                      as={'a'}
                      colorScheme={'purple'}
                      fontSize={'sm'}
                      size={'sm'}
                    >
                      <Icon as={RiPencilLine} />
                    </Button>

                    <Button
                      as={'a'}
                      colorScheme={'red'}
                      fontSize={'sm'}
                      size={'sm'}
                    >
                      <Icon as={RiDeleteBinLine} />
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
