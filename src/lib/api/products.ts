import { ProductLisRequest } from '@/models/api/product';

export async function getProducts({ skip = 0, limit = 20 }: Omit<ProductLisRequest, 'q'>) {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  if (!response.ok) throw new Error('Failed to fetch images');
  return response.json();
}
