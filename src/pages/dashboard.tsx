import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import ApexCharts from 'react-apexcharts';

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const options = {
  chart: {
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
    foreColor: theme.colors.gray[500],
    grid: {
      show: false,
    },
    toolbar: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        '2022-06-01T00:00:00.000Z',
        '2022-06-02T00:00:00.000Z',
        '2022-06-03T00:00:00.000Z',
      ],
      type: 'datetime',
    },
    zoom: {
      enabled: false
    },
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 45]
  }
];

export default function Dashboard() {
  return (
    <Flex
      direction={'column'}
      h={'100vh'}
    >
      <Header />

      <Flex
        maxW={1480}
        mx={'auto'}
        my={'6'}
        px={'6'}
        w={'100%'}
      >
        <Sidebar />

        <SimpleGrid
          alignItems={'flex-start'}
          flex={'1'}
          gap={'4'}
          minChildWidth={'320px'}
        >
          <Box
            bg={'gray.800'}
            borderRadius={8}
            p={['6', '8']}
            pb={'4'}
          >
            <Text
              fontSize={'lg'}
              mb={'4'}
            >
              Inscritos da semana
            </Text>

            <ApexCharts
              options={options}
              series={series}
              type={'area'}
              height={160}
            />
          </Box>

          <Box
            bg={'gray.800'}
            borderRadius={8}
            p={['6', '8']}
          >
            <Text
              fontSize={'lg'}
              mb={'4'}
            >
              Taxa de abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
