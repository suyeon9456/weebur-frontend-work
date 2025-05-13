import { getProducts } from '@/lib/api/products';
import Products from './Products';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q } = await searchParams;
  const qValue = Array.isArray(q) ? q[0] : q;
  const initialProducts = await getProducts({ skip: 0, limit: 20, q: qValue });

  return (
    <div>
      <Products
        initialProducts={initialProducts ?? { products: [], total: 0, skip: 0, limit: 0 }}
      />
    </div>
  );
}
