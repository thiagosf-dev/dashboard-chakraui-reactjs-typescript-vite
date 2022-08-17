import { FormControl, FormLabel, Input as InputChakra, InputProps as InputProsChakra } from "@chakra-ui/react";

interface InputProps extends InputProsChakra {
  label?: string;
  name: string
}

export function Input({
  name,
  label,
  ...rest
}: InputProps) {
  return (
    <FormControl>

      {
        !!label &&
        <FormLabel htmlFor={name}>
          {label}
        </FormLabel>
      }

      <InputChakra
        bgColor={'gray.900'}
        focusBorderColor={'pink.500'}
        id={name}
        name={name}
        size={'lg'}
        type={'email'}
        variant={'filled'}
        _hover={{
          bgColor: 'gray.900'
        }}
        {...rest}
      />

    </FormControl>
  )
}
