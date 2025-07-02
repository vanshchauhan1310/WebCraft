import { useState } from 'react';

function EventListenersDemo() {
  const [clickCount, setClickCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isToggled, setIsToggled] = useState(false);

  // Click event
  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  // Input change event
  const handleInputChange = (e) => {

    console.log(e)
    // setInputText(e.target.value)
  };

  // Mouse move event
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with: ${inputText}`);
  };

  // Double click event
  const handleDoubleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Event Listeners</h1>
      
      {/* Click Event */}
      <section style={{ margin: '20px 0' }}>
        <button 
          onClick={handleClick}
          style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Click me ({clickCount})
        </button>
        <p>Button click count: {clickCount}</p>
      </section>
      
      {/* Input Change Event */}
      <section style={{ margin: '20px 0' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type something..."
            style={{ padding: '8px', width: '300px', marginRight: '10px' }}
          />
          <button type="submit" style={{ padding: '8px 16px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
            Submit
          </button>
        </form>
        <p>Current input value: {inputText}</p>
      </section>
      
      {/* Mouse Move Event */}
      <section 
        onMouseMove={handleMouseMove}
        style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', height: '200px', position: 'relative' }}
      >
        <p>Move your mouse in this area</p>
        <p>Mouse position: X: {mousePosition.x}, Y: {mousePosition.y}</p>
      </section>
      
      {/* Double Click Event */}
      <section style={{ margin: '20px 0' }}>
        <div
          onDoubleClick={handleDoubleClick}
          style={{ 
            padding: '20px', 
            background: isToggled ? '#ffc107' : '#6c757d', 
            color: 'white',
            cursor: 'pointer',
            width: '200px',
            textAlign: 'center'
          }}
        >
          Double click me to toggle color
        </div>
      </section>
    </div>
  );
}

export default EventListenersDemo;