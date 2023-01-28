import Head from 'next/head';

type props = {
  title?: string;
  children: React.ReactNode;
};

function HeadConfig({ title = 'SolarPipe', children }: props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="SolarPipe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

export default HeadConfig;
