import { Fragment } from 'react';
import { useRouter } from 'next/router';
import ProductSearch from '../../components/products/ProductSearch';
import ProductList from '../../components/products/ProductList';
import { getAllProducts } from '../../data/products';

const ProductsScreen = ({ products }) => {
  const router = useRouter();

  const searchHandler = (category) => {
    router.push(`/produtos/categoria/${category}`);
  };

  return (
    <Fragment>
      <h1 className='heading-primary'>Nossos produtos</h1>
      <ProductSearch onSearch={searchHandler} />
      <ProductList products={products} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const products = getAllProducts();

  // if (!products) {
  //   return { notFound: true };
  // }

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};

export default ProductsScreen;
