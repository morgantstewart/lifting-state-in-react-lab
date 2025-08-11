
const BurgerStack = ({ stack, removeFromStack }) => {
  return (
    <div>
      <h2>Your Burger Stack</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            <span 
              style={{ 
                backgroundColor: ingredient.color, 
                padding: '0.5rem', 
                marginRight: '1rem' 
              }}
            >
              {ingredient.name}
            </span>
            <button onClick={() => removeFromStack(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;


export default BurgerStack;
