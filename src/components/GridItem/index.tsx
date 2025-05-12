import React from 'react';
import Image from 'next/image';
import { ProductDisplay } from '@/models/domain/product';

type GridItemProps = Pick<
  ProductDisplay,
  'title' | 'description' | 'thumbnail' | 'rating' | 'review'
>;

const GridItem: React.FC<GridItemProps> = ({
  title,
  description,
  thumbnail,
  rating,
  review,
}: GridItemProps) => {
  return (
    <li className="block w-[276px] h-[308px] bg-white rounded-lg overflow-hidden text-[rgb(32,39,49)] no-underline cursor-pointer">
      <div className="w-[276px] h-[198px]">
        <Image
          src={thumbnail}
          alt={title}
          className="w-[276px] h-[198px] rounded-md"
          width={235}
          height={198}
        />
      </div>
      <div className="pt-[14px] pb-[14px] px-0">
        <h4 className="text-title-4 font-bold">{title}</h4>
        <p className="text-sm text-gray-600 truncate">{description}</p>
      </div>
      <div className="inline-flex gap-2 pt-[14px] pb-[14px] px-0">
        <div>
          <span className="text-body-2">별점</span>
          <span className="text-body-2">{rating}</span>
        </div>
        <div>
          <span className="text-body-2">리뷰수</span>
          <span className="text-body-2">{review}</span>
        </div>
      </div>
    </li>
  );
};

export default GridItem;
