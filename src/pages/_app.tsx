import '../styles/global.css';
import '../styles/header.css';
import '../styles/diary.css';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

// 設定ファイル _app.tsxでMantineの初期設定をかく

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </MantineProvider>
    </>
  );
};

export default MyApp;
