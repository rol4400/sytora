import React from 'react';

export default function Clock7(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#62727a" />
      <g fill="#fff">
        <path d="m30 6h4v32h-4z" />
        <path d="M33.4 26 37 27.9 24.6 48 21 46.1z" />
        <circle cx={32} cy={32} r={4} />
      </g>
      <circle cx={32} cy={32} r={3} fill="#62727a" />
    </svg>
  );
}
