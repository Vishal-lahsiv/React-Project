import React, { useState } from 'react';

function ToggleInformation(){
  const [currentTransformation, setCurrentTransformation] = useState('Kaioken');

  const toggleTransformation = () => {
    if (currentTransformation === 'Kaioken') {
      setCurrentTransformation('SuperSaiyan');
    } else {
      setCurrentTransformation('Kaioken');
    }
  };

  return (
    <div>
      <p>Hello, World!{currentTransformation}</p>
      <button onClick={toggleTransformation}>Toggle Class</button>
    </div>
  );
}

export default ToggleInformation;