import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const useSearchParamsUpdater = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateSearchParams = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined) {
        params.delete(key);
        return;
      }
      params.set(key, value);
    });
    router.replace(`${pathname}?${params.toString()}`);
  };

  return {
    searchParams,
    updateSearchParams,
  };
};

export default useSearchParamsUpdater;
