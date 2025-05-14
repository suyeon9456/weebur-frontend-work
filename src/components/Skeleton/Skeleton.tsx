import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SkeletonProps {
  className?: string;
  lines?: number;
  widths?: string[];
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  lines = 3,
  widths = ['w-3/4', 'w-1/2', 'w-5/6'],
}) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={twMerge(
            'h-4 animate-pulse rounded-md bg-gray-200',
            widths[index % widths.length],
            className
          )}
        />
      ))}
    </div>
  );
};

export default Skeleton;
