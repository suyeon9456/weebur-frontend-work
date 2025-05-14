'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-[10px] py-[200px]">
      <Image src="/icons/empty.svg" alt="오류가 발생했습니다." width={62} height={62} />
      <h3 className="text-title-3 mb-[20px] text-gray-500">제품을 불러오지 못했습니다.</h3>
      <Button onClick={reset} buttonType="secondary">
        다시 시도하기
      </Button>
    </div>
  );
};

export default Error;
