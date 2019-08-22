import React, { useState, useEffect } from 'react';

export function Learn() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Declare multiple state variables!
  const [age, setAge] = useState(42);  //integer
  const [fruit, setFruit] = useState('banana'); //variable
  // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });


  return (
    <div>
      <p>Count:{count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p>age:{age} times</p>
      <button onClick={() => setAge(age + 2)}>
        Click me
      </button>

      <p>fruit:{fruit} times</p>
      <button onClick={() => setFruit(fruit + 2)}>
        Click me
      </button>

    </div>
  );
}