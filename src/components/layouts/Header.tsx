import { Anchor, Flex, Image, Text } from '@mantine/core';
import type { FC } from 'react';

export const AppHeader: FC = () => {
  return (
    <Flex
      sx={{
        backgroundColor: '#c1c1c1',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Flex gap={8} sx={{ marginLeft: '10px' }}>
        <Anchor>
          <Image
            src="assets/images/14b4d84d12db3d65.jpg"
            height={36}
            width={39}
            alt={'アイキャッチ'}
          />
        </Anchor>

        <Flex sx={{ marginLeft: '10px', marginBottom: '10px', fontSize: 132 }}>
          <Text weight="bold" sx={{ fontSize: 20 }}>
            ~ 爆速日記 ~
          </Text>
        </Flex>
      </Flex>

      <Flex sx={{ marginRight: '10px' }}>
        <Anchor>
          <Image
            src="assets/images/c9dd313750a3ec37.png"
            height={45}
            width={56}
            alt={'アイキャッチ'}
          />
        </Anchor>
      </Flex>
    </Flex>
  );
};
