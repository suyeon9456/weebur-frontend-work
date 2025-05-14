import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div>
      <Image
        src="/icons/logo.svg"
        alt="로고"
        width={123}
        height={23}
        className="w-[90%] max-w-[1200px]"
      />
    </div>
  );
};

export default Logo;
