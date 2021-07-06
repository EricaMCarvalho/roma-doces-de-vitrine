import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <ul className='row'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
