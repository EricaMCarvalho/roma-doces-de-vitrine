import { Fragment } from 'react';
import ProductDetails from '../../components/products/ProductDetails';
import { useRouter } from 'next/router';
import { getProductById } from '../../data/products';

const ProductDetailsPage = () => {
  const router = useRouter();

  const product = getProductById(router.query.productId);

  if (!product) {
    return <p>No product</p>;
  }

  return (
    <Fragment>
      <h1>Product Details Page</h1>
      <ProductDetails product={product} />
    </Fragment>
  );
};

export default ProductDetailsPage;
