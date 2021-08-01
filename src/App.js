import React, { useState } from 'react';
import Closet from './Closet';
import Suitcase from './Suitcase';
import { items } from './items';

const App = () => {

  class ApiUtils {
    static getAllInventory() {
      return new Promise((resolve) => {
        resolve([
          {
            id: 1,
            name: "Pants",
          },
          {
            id: 2,
            name: "Shoes",
          },
          {
            id: 3,
            name: "Shirt",
          },
        ]);
      });
    }
  }

  const [closet, setCloset] = useState(items)
  const [suitcase, setSuitcase] = useState([])

  const handleCloset = item => {
    setCloset(prev => prev.filter(i => i.name !== item.name))
    setSuitcase([...suitcase, item])
  }

  const handleSuitcase = item => {
    setSuitcase(prev => prev.filter(i => i.name !== item.name))
    setCloset([...closet, item])
  }

  return (
    <div style={{ display: "flex" }}>
      <Closet closet={closet} handleCloset={handleCloset} />
      <Suitcase suitcase={suitcase} handleSuitcase={handleSuitcase} />
    </div>
  );
}

export default App;
