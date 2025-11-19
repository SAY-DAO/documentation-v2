// Make this a Client Component by adding 'use client'
'use client';

import type { FC } from 'react'

export const Features: FC<{
  title: string
  link: string
}> = ({ title, link, }) => {

  const handleClick = () => {
    window.location.href = link; // This will redirect to the link when clicked
  };
  return (
    <div
      style={{
        fontFamily: "Exodar-outline",
        fontSize: 25,
        marginTop: 150,
        marginBottom: 150,
        minWidth: '250px',
        maxWidth: '350px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        textAlign: 'center',
        alignContent: 'center',
        cursor: 'pointer',
        height: 'auto',
        minHeight: '150px'
      }}
      onClick={handleClick}
    >
      <h3>{title}</h3>
    </div>
  );
}
