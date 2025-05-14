import { ProductDisplay } from '@/models/domain/product';
import Image from 'next/image';
import React from 'react';

type ListItemProps = Pick<
  ProductDisplay,
  'title' | 'description' | 'thumbnail' | 'rating' | 'review'
>;

const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  thumbnail,
  rating,
  review,
}: ListItemProps) => {
  return (
    <li className="flex items-center gap-4">
      <div className="w-[235px]">
        <Image src={thumbnail} alt={title} className="thumbnail" width={235} height={235} />
      </div>
      <div className="flex-1">
        <h3 className="text-title-3 font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="w-[235px] flex items-center gap-2">
        <div className="product-info">
          <span>
            <Image src="/icons/review.svg" width={20} height={20} alt="리뷰 아이콘" />
          </span>
          <span>리뷰 {review.toLocaleString()}</span>
        </div>
        <div className="product-info">
          <span>
            <Image src="/icons/rating.svg" width={18} height={18} alt="별점 아이콘" />
          </span>
          <span>별점 {rating}</span>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
