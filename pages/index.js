import Image from 'next/image';
import ProductList from '../components/products/ProductList';
import { getFeaturedProducts } from '../data/products';

const HomeScreen = () => {
  const featuredProducts = getFeaturedProducts();
  return <div></div>;
};

export default HomeScreen;
