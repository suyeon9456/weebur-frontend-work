import GridItem from '@/components/GridItem';
import ListItem from '@/components/ListItem/Index';
import { getDailyLayout } from '@/lib/utils';
import { Product } from '@/models/api/product';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const layout = getDailyLayout();

  if (layout === 'grid') {
    return (
      <ul className="grid grid-cols-4 gap-[10px]">
        {products.map((product: Product) => (
          <GridItem key={product.id} {...product} review={product.reviews.length} />
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {products.map((product: Product) => (
        <ListItem key={product.id} {...product} review={product.reviews.length} />
      ))}
    </ul>
  );
};

export default ProductList;
