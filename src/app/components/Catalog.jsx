'use client';
import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <StatusMessage message="Loading products..." />;

  if (products.length === 0) return <StatusMessage message="No products available." />;

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Catalog</h2>
      <ProductList products={products} />
    </div>
  );
}