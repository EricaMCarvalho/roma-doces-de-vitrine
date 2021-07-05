import Link from 'next/link';
import Image from 'next/link';

const ProductItem = ({ product }) => {
  return (
    <li className='row'>
      <div className='col'>
        <Link href={`/produtos/${product.id}`}>
          <a>{product.name}</a>
        </Link>
        <h3 className='heading-tertiary'>{product.name}</h3>
      </div>
    </li>
  );
};

export default ProductItem;
