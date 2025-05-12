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
        className="max-w-[1200px] w-[90%]"
      />
    </div>
  );
};

export default Logo;
