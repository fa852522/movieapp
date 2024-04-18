
import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="hidden" checked={isChecked} onChange={handleToggle} />
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 ${isChecked ? 'translate-x-6' : 'translate-x-0'} transition-transform`}></div>
      </div>
      <div className="ml-3 text-gray-700 font-medium">Toggle</div>
    </label>
  );
}

export default ToggleSwitch;
