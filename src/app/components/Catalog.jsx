'use client';
import { useEffect, useState } from 'react';
import ProductList from './ProductListFiltered';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ price: '', category: '' });
  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState('loading'); 

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setStatus(data.length === 0 ? 'empty' : '');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div>
      <h2>Mini Storefront</h2>
      <CategoryFilter filters={filters} setFilters={setFilters} />
      <PriceFilter filters={filters} setFilters={setFilters} />
      <ProductList products={products} filters={filters} setCart={setCart} />
      <CartSummary cart={cart} />
      {status && <StatusMessage status={status} />}
    </div>
  );
}