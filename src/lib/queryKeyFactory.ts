import { ProductFilter } from '@/models/domain/product';

export const createQueryKeyFactory = <T extends string>(base: T) => ({
  base: [base] as const,
  search: (query: ProductFilter) => [base, query] as const,
});

export const productsQueryKey = createQueryKeyFactory('products');
