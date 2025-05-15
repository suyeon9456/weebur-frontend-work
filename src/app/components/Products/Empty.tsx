import Image from 'next/image';

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[10px] py-[200px]">
      <Image src="/icons/empty.svg" alt="일치하는 내용이 없습니다" width={62} height={62} />
      <h3 className="text-title-3 text-gray-500">일치하는 내용이 없습니다</h3>
    </div>
  );
};

export default Empty;
