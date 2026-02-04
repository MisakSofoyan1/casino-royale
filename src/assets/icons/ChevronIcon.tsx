import React from "react";

interface IconProps {
    width?: string | number;
    height?: string | number;
    color?: string;
}

const ChevronIcon: React.FC<IconProps> = ({
    width = "10",
    height = "6",
    color = "#BABABA",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.5 0.5L5 5L0.5 0.5"
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default ChevronIcon;
