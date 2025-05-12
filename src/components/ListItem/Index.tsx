import Image from 'next/image';
import React from 'react';

interface ListItemProps {
  title: string;
  description: string;
  thumbnail: string;
  rating: string;
  review: string;
}

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
        <Image src={thumbnail} alt={title} className="rounded-md" width={235} height={235} />
      </div>
      <div className="flex-1">
        <h3 className="text-title-3 font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="w-[235px]">
        <div>
          <span>별점</span>
          <span>{rating}</span>
        </div>
        <div>
          <span>리뷰수</span>
          <span>{review}</span>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
