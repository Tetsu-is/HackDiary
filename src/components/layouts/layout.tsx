import { AppShell, Header } from '@mantine/core';
import type { FC } from 'react';

import { AppHeader } from './Header';

type Props = {
  children: React.ReactNode;
};

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <AppShell
        padding={0}
        // Navber deleted
        header={
          <Header height={60} p="0">
            {/* Header content */}
            <AppHeader />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};
