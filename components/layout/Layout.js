import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Roma Doces de Vitrine</title>
      </Head>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
