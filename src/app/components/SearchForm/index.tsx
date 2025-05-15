'use client';

import Input from '@/components/Input';
import useSearchParamsUpdater from '@/hooks/useSearchParamsUpdater';
import { useActionState } from 'react';
import { handleSearchAction } from '../../actions/search';
import Button from '@/components/Button';
import CheckBoxButton from '@/components/CheckBoxButton';
interface SearchFormValues {
  q?: string;
  sortBy?: string;
}

interface SearchFormProps {
  placeholder?: string;
  className?: string;
}

const SearchForm = ({
  placeholder = '찾고 싶은 상품을 검색해보세요',
  className = '',
}: SearchFormProps) => {
  const { searchParams, updateSearchParams } = useSearchParamsUpdater();

  const [state, formAction, isPending] = useActionState<SearchFormValues, FormData>(
    async (prevState, formData) => {
      const result = await handleSearchAction(prevState, formData);
      updateSearchParams({ q: result.q, sortBy: result.sortBy, order: result.order });
      return result;
    },
    { q: searchParams.get('q') ?? undefined, sortBy: searchParams.get('sortBy') ?? undefined }
  );

  return (
    <form
      action={formAction}
      className={`mx-auto flex w-auto max-w-[1200px] cursor-pointer flex-row items-center justify-center gap-2 rounded-full border border-[#e5e8eb] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)] ${className}`}
      role="search"
    >
      <Input
        placeholder={placeholder}
        name="q"
        defaultValue={state.q}
        aria-label="상품 검색"
        className="font-bold"
      />
      <div className="flex flex-row items-center gap-2">
        <CheckBoxButton name="sortBy" value="rating" className="h-[40px] w-[80px] text-center">
          별점순
        </CheckBoxButton>
      </div>
      <Button
        type="submit"
        disabled={isPending}
        size="large"
        className="mr-[10px] w-[150px] rounded-full font-bold"
      >
        검색
      </Button>
    </form>
  );
};

export default SearchForm;
