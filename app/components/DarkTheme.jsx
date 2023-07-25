'use client';

import { useState } from 'react';

export default function DarkTheme() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme !== 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      return;
    }
    document.documentElement.classList.remove('dark');
    setTheme('light');
  };

  return (
    <button
      className="
      p-3
      absolute
      top-0
      right-0
      text-white
      bg-gray-500"
      onClick={ toggleTheme }
    >
      { theme }
    </button>
  );
}
