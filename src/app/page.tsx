import { getProducts } from '@/lib/api/products';
import Products from './Products';
import { getSingleValue } from '@/lib/utils';

type SearchParams = {
  q?: string | string[];
  sortBy?: string | string[];
  order?: string | string[];
};

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const qValue = getSingleValue(searchParams.q);
  const sortByValue = getSingleValue(searchParams.sortBy);
  const orderValue = getSingleValue(searchParams.order);

  const initialProducts = await getProducts({
    skip: 0,
    limit: 20,
    q: qValue,
    sortBy: sortByValue,
    order: orderValue as 'desc',
  });

  return (
    <div>
      <Products
        initialProducts={initialProducts ?? { products: [], total: 0, skip: 0, limit: 0 }}
      />
    </div>
  );
}
