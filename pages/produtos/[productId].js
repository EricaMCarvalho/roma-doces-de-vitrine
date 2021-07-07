import { Fragment } from 'react';
import ProductDetails from '../../components/products/ProductDetails';
import Alert from '../../components/ui/Alert';
import { getAllProducts, getProductById } from '../../data/products';

const ProductDetailsPage = ({ product }) => {
  if (!product) {
    return <Alert variant='danger'>Produto não encontrado</Alert>;
  }

  return (
    <Fragment>
      <h1>Product Details Page</h1>
      <ProductDetails product={product} />
    </Fragment>
  );
};

export const getStaticProps = async (context) => {
  const product = getProductById(context.params.productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const products = getAllProducts();

  return {
    paths: products.map((product) => ({ params: { productId: product.id } })),
    fallback: 'blocking',
  };
};

export default ProductDetailsPage;
