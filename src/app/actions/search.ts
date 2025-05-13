'use server';

export interface SearchFormState {
  q: string;
}

export async function handleSearchAction(
  prevState: SearchFormState,
  formData: FormData
): Promise<SearchFormState> {
  const q = formData.get('q')?.toString() ?? '';
  return { q };
}
