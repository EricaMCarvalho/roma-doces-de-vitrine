import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductList from '../../components/products/ProductList';
import ProductSearch from '../../components/products/ProductSearch';
import Alert from '../../components/ui/Alert';
import { getFilteredProducts } from '../../data/products';
import useSWR from 'swr';

const FilteredProductsPage = (props) => {
  const [products, setProducts] = useState();
  const router = useRouter();
  const { data, error } = useSWR('/api/products');

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (products) {
    return (
      <Alert variant='danger'>Nenhum produto encontrado nessa categoria</Alert>
    );
  }

  const category = router.query.slug[1];
  const searchHandler = (category) => {
    router.push(`/produtos/categoria/${category}`);
  };

  return (
    <Fragment>
      <h1>Produtos encontratos na categoria: {category}</h1>
      <ProductSearch onSearch={searchHandler} />
      {<ProductList products={props.products} />}
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const category = context.params.slug[1];
  const products = getFilteredProducts(category);

  if (!products) {
    notFound: true;
  }

  return {
    props: {
      products,
    },
  };
};

export default FilteredProductsPage;
