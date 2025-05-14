import { getProducts } from '@/lib/api/products';
import { productsQueryKey } from '@/lib/queryKeyFactory';
import { ProductLisRequest, ProductListResponse } from '@/models/api/product';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseInfiniteProductsParams {
  initialProducts: ProductListResponse;
  query: Partial<Pick<ProductLisRequest, 'q' | 'sortBy' | 'order'>>;
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
  query,
}: UseInfiniteProductsParams): UseInfiniteProductsReturn => {
  const { data, isLoading, error, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: productsQueryKey.search(query),
      queryFn: ({ pageParam = 1 }) => getProducts({ skip: pageParam * 20, limit: 20, ...query }),
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
      staleTime: 1000 * 60 * 1,
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
