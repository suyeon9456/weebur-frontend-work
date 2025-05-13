'use client';

import ListItem from '@/components/ListItem/Index';
import useInfiniteProducts from '@/hooks/useInfiniteProducts';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ProductListResponse, Product } from '@/models/api/product';
import { useSearchParams } from 'next/navigation';

interface ProductsProps {
  initialProducts: ProductListResponse;
}

const Products = ({ initialProducts }: ProductsProps) => {
  const searchParams = useSearchParams();
  const { products, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteProducts({
    initialProducts,
    query: {
      q: searchParams.get('q') ?? undefined,
    },
  });
  const observerRef = useIntersectionObserver({
    enabled: hasNextPage && !isFetchingNextPage,
    onIntersect: () => fetchNextPage(),
    delay: 1000,
  });

  return (
    <div className="w-full">
      <ul>
        {products.map((product: Product) => (
          <ListItem
            key={product.id}
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            rating={product.rating}
            review={product.reviews.length}
          />
        ))}
      </ul>
      <div ref={observerRef} style={{ height: 1 }} />
    </div>
  );
};

export default Products;
