'use server';

import { ProductFilter } from '@/models/domain/product';

export interface SearchFormState {
  q?: string;
  sortBy?: string;
}

export async function handleSearchAction(
  prevState: SearchFormState,
  formData: FormData
): Promise<ProductFilter> {
  const q = formData.get('q')?.toString() === '' ? undefined : formData.get('q')?.toString();
  const sortBy = formData.get('sortBy')?.toString() === 'rating' ? 'rating' : undefined;
  const order = sortBy !== undefined ? 'desc' : undefined;
  return { q, sortBy, order };
}
