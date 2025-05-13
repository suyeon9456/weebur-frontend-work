'use client';

import Input from '@/components/Input';
import useSearchParamsUpdater from '@/hooks/useSearchParamsUpdater';
import { useActionState } from 'react';
import { handleSearchAction } from '../actions/search';
import Button from '@/components/Button';
interface SearchFormValues {
  q: string;
}

interface SearchFormProps {
  initialValue?: string;
  placeholder?: string;
  className?: string;
}

const SearchForm = ({
  initialValue = '',
  placeholder = '찾고 싶은 상품을 검색해보세요',
  className = '',
}: SearchFormProps) => {
  const { updateSearchParams } = useSearchParamsUpdater();

  const [state, formAction, isPending] = useActionState<SearchFormValues, FormData>(
    async (prevState, formData) => {
      const result = await handleSearchAction(prevState, formData);
      updateSearchParams({ q: result.q });
      return result;
    },
    { q: initialValue }
  );

  return (
    <form
      action={formAction}
      className={`w-full max-w-[600px] mx-auto flex gap-2 flex-row items-center justify-center bg-white rounded-full border border-[#e5e8eb] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] cursor-pointer ${className}`}
      role="search"
    >
      <Input placeholder={placeholder} name="q" defaultValue={state.q} aria-label="상품 검색" />
      <Button type="submit" disabled={isPending}>
        검색
      </Button>
    </form>
  );
};

export default SearchForm;
