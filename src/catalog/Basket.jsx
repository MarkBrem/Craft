export const Basket = ({ cartItems }) => {
  return (
    <div>
      <h2>Кошик</h2>
      {cartItems.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
