import { ProductLisRequest } from '@/models/api/product';

export async function getProducts({
  skip = 0,
  limit = 20,
  q,
  sortBy,
  order,
}: Omit<ProductLisRequest, 'q'> & Partial<Pick<ProductLisRequest, 'q'>>) {
  const searchParams = new URLSearchParams({ limit: limit.toString(), skip: skip.toString() });
  if (sortBy != null && order != null) {
    searchParams.set('sortBy', sortBy);
    searchParams.set('order', order);
  }

  if (q != null) {
    searchParams.set('q', q);
    const response = await fetch(
      `https://dummyjson.com/products/search?${searchParams.toString()}`
    );
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  }
  const response = await fetch(`https://dummyjson.com/products?${searchParams.toString()}`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function getSearchProducts({ skip = 0, limit = 20, q }: ProductLisRequest) {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${q}&limit=${limit}&skip=${skip}`
  );
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}
