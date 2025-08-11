import { useState } from 'react';
import './App.css';
import IngredientList from "./components/IngredientList";
import BurgerStack from "./components/BurgerStack";

const App = () => {
  const [stack, setStack] = useState([]);

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const addToBurger = (ingredient) => {
    setStack([ingredient, ...stack]); 
  };

  const removeFromBurger = (index) => {
    const newStack = [...stack];
    newStack.splice(index, 1);
    setStack(newStack);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <IngredientList 
          ingredients={availableIngredients} 
          addToBurger={addToBurger} 
        />
        <BurgerStack 
          stack={stack} 
          removeFromBurger={removeFromBurger} 
        />
      </div>
    </main>
  );
};

export default App;
