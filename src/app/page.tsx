import Products from './Products';

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products?limit=20&skip=0');
  const initialProducts = await response.json();

  return (
    <div>
      <Products initialProducts={initialProducts.products ?? []} />
    </div>
  );
}
