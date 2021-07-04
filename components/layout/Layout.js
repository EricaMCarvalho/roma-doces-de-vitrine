import Head from 'next/head';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Roma Doces de Vitrine</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
