import React from 'react';

interface BeninFlagProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Official flag of the Republic of Benin (République du Bénin)
 * Vertical green stripe (left 1/3) + yellow (top right) + red (bottom right)
 * Colors: Green #008751 · Yellow #FCD116 · Red #E8112D
 */
const BeninFlag: React.FC<BeninFlagProps> = ({ className = '', width = 48, height = 32 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 3 2"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Drapeau de la République du Bénin"
    style={{ display: 'block' }}
  >
    {/* Green left vertical stripe */}
    <rect x="0" y="0" width="1" height="2" fill="#008751" />
    {/* Yellow — top right */}
    <rect x="1" y="0" width="2" height="1" fill="#FCD116" />
    {/* Red — bottom right */}
    <rect x="1" y="1" width="2" height="1" fill="#E8112D" />
  </svg>
);

export default BeninFlag;
