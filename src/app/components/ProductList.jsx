'use client';
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}