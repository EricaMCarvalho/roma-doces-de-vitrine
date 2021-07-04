import Image from 'next/image';
import ProductList from '../components/products/ProductList';
import { getFeaturedProducts } from '../data/products';

const HomeScreen = () => {
  const featuredProducts = getFeaturedProducts();
  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src='/images/logo.png'
        alt='Roma Doces de Vitrine'
        width='200px'
        height='150px'
      />
      <ProductList products={featuredProducts} />
    </div>
  );
};

export default HomeScreen;
