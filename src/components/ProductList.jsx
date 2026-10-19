import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Clavier', price: 150, stock: true },
  { id: 2, name: 'Souris', price: 80, stock: true },
  { id: 3, name: 'Écran', price: 1200, stock: false },
  { id: 4, name: 'Casque', price: 250, stock: true },
];

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </div>
  );
}

export default ProductList;
