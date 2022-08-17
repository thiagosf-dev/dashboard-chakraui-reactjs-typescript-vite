import { Box, Button, Stack } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      align={'center'}
      direction={'row'}
      justify={'space-between'}
      mt={'8'}
      spacing={'6'}
    >

      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack
        direction={'row'}
        spacing={'2'}
      >
        <PaginationItem isCurrent numberPage={1} />
        <PaginationItem numberPage={2} />
        <PaginationItem numberPage={3} />
        <PaginationItem numberPage={4} />
        <PaginationItem numberPage={5} />
      </Stack>
    </Stack>
  );
}
