import { Avatar, Box, FlexProps as ChakraFlexProps, Flex, Text } from "@chakra-ui/react";

interface ProfileProps extends ChakraFlexProps {
  showProfileData?: boolean;
};

export function Profile({
  showProfileData = true,
  ...rest
}: ProfileProps) {
  return (
    <Flex
      align={'center'}
      {...rest}
    >
      {showProfileData && (
        <Box
          mr={'4'}
          textAlign={"right"}
        >
          <Text>Thiago Soares Figueiredo</Text>

          <Text color={'gray.300'} fontSize={'small'} >
            thiagosf.dev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        name={'Thiago Figueiredo'}
        size={'md'}
        src={'https://avatars.githubusercontent.com/u/40807160?v=4'}
      />
    </Flex>
  );
}
