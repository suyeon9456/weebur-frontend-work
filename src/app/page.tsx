import { getProducts } from '@/lib/api/products';
import Products from './components/Products';
import { getSingleValue } from '@/lib/utils';

type SearchParams = {
  q?: string | string[];
  sortBy?: string | string[];
  order?: string | string[];
};

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await props?.searchParams;
  const qValue = getSingleValue(query?.q);
  const sortByValue = getSingleValue(query?.sortBy);
  const orderValue = getSingleValue(query?.order);

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
