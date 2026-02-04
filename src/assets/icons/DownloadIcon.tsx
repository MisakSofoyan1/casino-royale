import React from 'react';

interface IconProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

const DownloadIcon: React.FC<IconProps> = ({ 
  width = "26", 
  height = "26", 
  color = "currentColor",
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 26 26"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12.8751 1L12.8751 19.2693M12.8751 19.2693L7.39432 13.7885M12.8751 19.2693L18.3559 13.7885M1 16.5288L1 21.0961C1 23.1141 2.63589 24.75 4.65387 24.75H21.0963C23.1142 24.75 24.7501 23.1141 24.7501 21.0961V16.5288"
        stroke={color} 
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
