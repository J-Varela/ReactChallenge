'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleHover = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button data-test="button" onClick={handleHover}>
        Hover Me.
      </button>
      <h1 data-testid="count">{count}</h1>
    </div>
  );
}
