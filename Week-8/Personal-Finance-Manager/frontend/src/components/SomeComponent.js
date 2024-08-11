import React from 'react';
import { useNavigate } from 'react-router-dom';

function SomeComponent() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={handleNavigation}>Go to Dashboard</button>
    </div>
  );
}

export default SomeComponent;
