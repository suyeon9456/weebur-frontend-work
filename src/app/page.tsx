import { getProducts } from '@/lib/api/products';
import Products from './Products';

export default async function Home() {
  const initialProducts = await getProducts({ skip: 0, limit: 20 });

  return (
    <div>
      <Products
        initialProducts={initialProducts ?? { products: [], total: 0, skip: 0, limit: 0 }}
      />
    </div>
  );
}
