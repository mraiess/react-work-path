function ProductCard({ name, price, stock }) {
  return (
    <div
      style={{
        border: '1px solid #999',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px 0',
      }}
    >
      <h3>{name}</h3>
      <p>Prix : {price} DH</p>

      <p style={{ color: stock ? 'green' : 'red' }}>
        {stock ? 'Disponible' : 'Rupture de stock'}
      </p>
    </div>
  );
}

export default ProductCard;
