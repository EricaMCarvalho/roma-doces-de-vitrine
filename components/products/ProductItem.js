import Link from 'next/link';

const ProductItem = ({ product }) => {
  return (
    <li>
      <Link href={`/produtos/${product.id}`}>{product.name}</Link>
    </li>
  );
};

export default ProductItem;
