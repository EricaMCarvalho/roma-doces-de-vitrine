import { Fragment } from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/products/ProductList';
import About from '../components/About';
import Contact from '../components/Contact';
import { getFeaturedProducts } from '../data/products';

const HomeScreen = ({ featuredProducts }) => {
  return (
    <Fragment>
      <Hero />
      <h1 className='heading-primary'>Produtos em destaque</h1>
      <h2 className='heading-secondary'>Mais pedidos e novidades</h2>
      <ProductList products={featuredProducts} />
      <About />
      <Contact />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const featuredProducts = getFeaturedProducts();
  return {
    props: {
      featuredProducts,
    },
    revalidate: 10,
  };
};

export default HomeScreen;
