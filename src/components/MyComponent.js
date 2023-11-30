import React from 'react';

const MyComponent = () => {
  const divStyle = {
    backgroundImage: 'url("./assets/background.jpeg")',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    
  };

  return (
    <div style={divStyle}>
      {/* Your component content */}
    </div>
  );
};

export default MyComponent;
