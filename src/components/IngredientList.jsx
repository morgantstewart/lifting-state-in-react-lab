// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {ingredients.map((ingredient, index) => (
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
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
