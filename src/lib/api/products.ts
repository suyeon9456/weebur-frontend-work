import { ProductLisRequest } from '@/models/api/product';

export async function getProducts({
  skip = 0,
  limit = 20,
  q,
}: Omit<ProductLisRequest, 'q'> & Partial<Pick<ProductLisRequest, 'q'>>) {
  if (q != null) {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${q}&limit=${limit}&skip=${skip}`
    );
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  }
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
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
