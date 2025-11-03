'use client';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button disabled={product.stock <= 0}>
        {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
}