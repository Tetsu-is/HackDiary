import { Anchor, Box, Flex, Image, Text } from '@mantine/core';
import type { FC } from 'react';

export const AppHeader: FC = () => {
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Anchor>
        <Flex gap={8}>
          <Image
            src="assets/images/Diary_1.png"
            height={36}
            width={39}
            alt={'アイキャッチ'}
          />
          <Flex
            sx={{ marginLeft: '10px', marginBottom: '10px', fontSize: 132 }}
          >
            <Text weight="bold" sx={{ fontSize: 30 }}>
              Diary
            </Text>
          </Flex>
        </Flex>
      </Anchor>

      <Box>
        <Anchor href="/">
          <Text>コンタクトページに遷移する</Text>
        </Anchor>
      </Box>
    </Flex>
  );
};
