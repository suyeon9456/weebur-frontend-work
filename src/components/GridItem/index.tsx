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
    <li className="grid-item border border-[#e0e0e0] rounded-[8px]">
      <div className="w-full h-[198px] overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          className="w-[276px] h-[198px] thumbnail"
          width={276}
          height={198}
        />
      </div>
      <div className="p-[14px]">
        <h4 className="text-title-4 font-bold">{title}</h4>
        <p className="text-sm text-gray-600 truncate">{description}</p>
      </div>
      <div className="flex gap-2 p-[14px]">
        <div className="product-info">
          <span className="text-body-2">
            <Image src="/icons/review.svg" width={20} height={20} alt="리뷰 아이콘" />
          </span>
          <span className="text-body-2">리뷰 {review.toLocaleString()}</span>
        </div>
        <div className="product-info">
          <span className="text-body-2">
            <Image src="/icons/rating.svg" width={18} height={18} alt="별점 아이콘" />
          </span>
          <span className="text-body-2">별점 {rating}</span>
        </div>
      </div>
    </li>
  );
};

export default GridItem;
