import { Fragment } from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/products/ProductList';
import { getFeaturedProducts } from '../data/products';

const HomeScreen = () => {
  const featuredProducts = getFeaturedProducts();
  return (
    <Fragment>
      <Hero />

      <h1 className='heading-primary'>Produtos em destaque</h1>
      <h2 className='heading-secondary'>Mais pedidos e novidades</h2>
      <ProductList products={featuredProducts} />
    </Fragment>
  );
};

export default HomeScreen;
