import { ProductLisRequest } from '@/models/api/product';

export const createQueryKeyFactory = <T extends string>(base: T) => ({
  base: [base] as const,
  search: (query: Partial<Pick<ProductLisRequest, 'q' | 'sortBy' | 'order'>>) =>
    [base, query] as const,
});

export const productsQueryKey = createQueryKeyFactory('products');
