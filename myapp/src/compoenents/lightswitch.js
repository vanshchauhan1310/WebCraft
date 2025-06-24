import React from 'react'

import { useState } from 'react';

const LightSwitch = () =>{
  const [isOn, setIsOn] = useState(false); // Default: OFF

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON 🌟" : "OFF 🌑"}
    
    </button>
  );
}

export default LightSwitch
// Clicking toggles between ON/OFF