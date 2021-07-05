import { Fragment } from 'react';
import { useRouter } from 'next/router';
import ProductList from '../../components/products/ProductList';
import ProductSearch from '../../components/products/ProductSearch';
import { getFilteredProducts } from '../../data/products';

const FilteredProductsPage = () => {
  const router = useRouter();

  if (!router.query.slug) {
    return <p>Loading</p>;
  }

  const category = router.query.slug[1];

  const products = getFilteredProducts(category);

  if (products) {
    return <p>Nenhum produto encontrado nessa categoria</p>;
  }

  const searchHandler = (category) => {
    router.push(`/produtos/categoria/${category}`);
  };

  return (
    <Fragment>
      <h1>Produtos encontratos na categoria: {category}</h1>
      <ProductSearch onSearch={searchHandler} />
      {<ProductList products={products} />}
    </Fragment>
  );
};

export default FilteredProductsPage;
