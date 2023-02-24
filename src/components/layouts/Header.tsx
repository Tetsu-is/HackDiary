import { Anchor, Box, Text } from '@mantine/core';
import type { FC } from 'react';

export const AppHeader: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'gray',
      }}
    >
      <Box>アイコン</Box>
      <Text size="xl">Diary</Text>
      <Anchor href="/contact">
        <Text size="xl">コンタクトページに遷移する</Text>
      </Anchor>
    </Box>
  );
};
