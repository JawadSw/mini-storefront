export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Table Lamp', price: 60, category: 'Furniture', stock: 6 },
    { id: 'p5', name: 'Headphones', price: 200, category: 'Electronics', stock: 2 },
    { id: 'p6', name: 'Coffee Table', price: 300, category: 'Furniture', stock: 1 },
    { id: 'p7', name: 'Monitor', price: 400, category: 'Electronics', stock: 5 },
    { id: 'p8', name: 'Bookshelf', price: 250, category: 'Furniture', stock: 3 }
  ];
  return Response.json(products);
}