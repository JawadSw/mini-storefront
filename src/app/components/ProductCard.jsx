'use client';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="font-semibold">{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-2 py-1 rounded disabled:opacity-50"
        disabled={product.stock <= 0}
      >
        {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
}