export const createQueryKeyFactory = <T extends string>(base: T) => ({
  base: [base] as const,
  search: (query?: string) => (query === undefined ? ([base] as const) : ([base, query] as const)),
});

export const productsQueryKey = createQueryKeyFactory('products');
