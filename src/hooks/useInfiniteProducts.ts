import { getProducts } from '@/lib/api/products';
import { productsQueryKey } from '@/lib/queryKeyFactory';
import { ProductListResponse } from '@/models/api/product';
import { useInfiniteQuery } from '@tanstack/react-query';

const useInfiniteProducts = ({ initialProducts }: { initialProducts: ProductListResponse }) => {
  const { data, isLoading, error } = useInfiniteQuery({
    queryKey: productsQueryKey.base,
    queryFn: ({ pageParam = 1 }) => getProducts({ skip: pageParam * 20, limit: 20 }),
    getNextPageParam: lastPage => lastPage.nextPage,
    initialPageParam: 1,
    initialData: {
      pages: [initialProducts],
      pageParams: [1],
    },
  });

  return { data, isLoading, error };
};

export default useInfiniteProducts;
