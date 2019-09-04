import React, { useState } from 'react';

function App() {
  // Declare new state variable
  const [count, setCount] = useState(1);

  return (
    <div>
      <p> Current count: { count } </p>
      <button onClick={() => setCount(count + 1)}> count </button>
    </div>
  );
};

export default App;
