import { Anchor, Box, Text } from '@mantine/core';
import type { FC } from 'react';

export const AppHeader: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'orange',
      }}
    >
      <Box>アイコン</Box>
      <Text size="xl">Diary</Text>
      <Anchor href="/contact">
        <Text size="xl"></Text>
      </Anchor>
    </Box>
  );
};
