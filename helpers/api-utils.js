export const getAllProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const { data } = await res.json();
  return data;
};

export const getFeaturedProducts = async () => {
  const allProducts = await getAllProducts();
  const data = allProducts.filter((product) => product.isFeatured);
  return data;
};
