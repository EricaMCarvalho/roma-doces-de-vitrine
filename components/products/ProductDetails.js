import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/link';
import Button from '../ui/Button';

const ProductDetails = ({ product }) => {
  return (
    <Fragment>
      <Button>Veja nossos produtos</Button>
      <li className='row'>
        <div className='col'>
          <Link href={`/produtos/${product.id}`}>
            <a>{product.name}</a>
          </Link>
          <h3 className='heading-tertiary'>{product.name}</h3>
        </div>
      </li>
    </Fragment>
  );
};

export default ProductDetails;
