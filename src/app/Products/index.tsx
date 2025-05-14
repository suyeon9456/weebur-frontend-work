'use client';

import useInfiniteProducts from '@/hooks/useInfiniteProducts';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ProductListResponse } from '@/models/api/product';
import { useSearchParams } from 'next/navigation';
import Empty from './Empty';
import EndMessage from './EndMessage';
import ProductList from './ProductList';

interface ProductsProps {
  initialProducts: ProductListResponse;
}

const Products = ({ initialProducts }: ProductsProps) => {
  const searchParams = useSearchParams();
  const { products, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteProducts({
    initialProducts,
    query: {
      q: searchParams.get('q') ?? undefined,
      sortBy: searchParams.get('sortBy') ?? undefined,
      order: (searchParams.get('order') as 'desc') ?? undefined,
    },
  });

  const observerRef = useIntersectionObserver({
    enabled: hasNextPage && !isFetchingNextPage,
    onIntersect: () => fetchNextPage(),
    delay: 1000,
  });

  if (products.length === 0) {
    return <Empty />;
  }

  return (
    <div className="w-full">
      <ProductList products={products} />
      <div ref={observerRef} style={{ height: 1 }} />
      <EndMessage isVisible={!hasNextPage} />
    </div>
  );
};

export default Products;
