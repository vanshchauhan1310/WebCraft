import React from 'react'
import EventListenersDemo from './components/event';

const App = () => {
    const [count, setCount] = useState(0);

  // A simple function that updates state
  const handleClick = () => {
    setCount(count + 1);
  };

  // Basic useEffect - runs after every render
  // useEffect(() => {
  //   console.log("I run every time the component updates!");
  // });

  // useEffect with dependency - runs only when 'count' changes

  // useEffect(() => {
  //   console.log(`Count changed! New value: ${count}`);
    
  // }, [count]); 


  // useEffect with empty dependency - runs only once on mount

  // useEffect(() => {
  //   console.log("I run only once when component first loads!");
  // }, []);

  return (

    <>
    <EventListenersDemo/>
    </>
    //  <div>
    //   <h2>Basic useEffect Example</h2>
    //   <p>You clicked {count} times</p>
      // <button onClick={handleClick}>
      //   Click me
      // </button>
    // </div>
  )
}

export default App