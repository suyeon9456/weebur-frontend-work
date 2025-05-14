'use server';

import { ProductLisRequest } from '@/models/api/product';

export interface SearchFormState {
  q?: string;
  sortBy?: string;
}

export async function handleSearchAction(
  prevState: SearchFormState,
  formData: FormData
): Promise<Partial<Pick<ProductLisRequest, 'q' | 'sortBy' | 'order'>>> {
  const q = formData.get('q')?.toString() === '' ? undefined : formData.get('q')?.toString();
  const sortBy = formData.get('sortBy')?.toString() === 'rating' ? 'rating' : undefined;
  const order = sortBy !== undefined ? 'desc' : undefined;
  return { q, sortBy, order };
}
