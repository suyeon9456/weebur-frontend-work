import { getProducts } from '@/lib/api/products';
import { productsQueryKey } from '@/lib/queryKeyFactory';
import { ProductListResponse } from '@/models/api/product';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseInfiniteProductsParams {
  initialProducts: ProductListResponse;
}

interface UseInfiniteProductsReturn {
  products: ProductListResponse['products'];
  isLoading: boolean;
  error: Error | null;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}

const useInfiniteProducts = ({
  initialProducts,
}: UseInfiniteProductsParams): UseInfiniteProductsReturn => {
  const { data, isLoading, error, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: productsQueryKey.base,
      queryFn: ({ pageParam = 1 }) => getProducts({ skip: pageParam * 20, limit: 20 }),
      getNextPageParam: ({ total, skip, limit }) => {
        const isEnd = total <= skip + limit * 2;
        if (isEnd === true) return undefined;
        return (skip + limit) / limit;
      },
      initialPageParam: 1,
      initialData: {
        pages: [initialProducts],
        pageParams: [1],
      },
      staleTime: 1000 * 60 * 5,
    });

  const products = data?.pages.flatMap(page => page.products) ?? [];

  return {
    products,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useInfiniteProducts;
