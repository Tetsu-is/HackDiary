import {
  Anchor,
  Button,
  Dialog,
  Flex,
  Group,
  Image,
  Text,
  TextInput,
} from '@mantine/core';
import type { FC } from 'react';
import { useState } from 'react';

export const AppHeader: FC = () => {
  const [opened, setOpened] = useState(false);

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
            height={50}
            width={50}
            alt={'アイキャッチ'}
          />
        </Anchor>

        <Flex sx={{ marginLeft: '10px', marginTop: '5px', fontSize: '132px' }}>
          <Text weight="bold" sx={{ fontSize: '30px' }}>
            ~ 爆速日記 ~
          </Text>
        </Flex>
      </Flex>

      <Flex gap={8} sx={{ paddingRight: '10px ' }}>
        <Anchor>
          <Image
            src="/assets/images/フレンド追加.jpg"
            height={50}
            width={50}
            alt={'アイキャッチ'}
          />
        </Anchor>

        <Group position="center">
          <Button
            color="gray"
            onClick={() => setOpened((o) => !o)}
            sx={{ width: 50, height: 50, borderRadius: 0, padding: 0 }}
          >
            <Flex sx={{ width: 50, height: 40 }}>
              <Image
                src="/assets/images/serchWHITE.png"
                height={'100%'}
                width={'200%'}
              ></Image>
            </Flex>
          </Button>
        </Group>
      </Flex>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          思い出探し
        </Text>

        <Group align="flex-end">
          <TextInput
            placeholder="検索したいワードを入力して下さい"
            style={{ flex: 1 }}
          />
          <Button color="red" onClick={() => setOpened(false)}></Button>
        </Group>
      </Dialog>
    </Flex>
  );
};
