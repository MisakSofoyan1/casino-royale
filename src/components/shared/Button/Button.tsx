import React from "react";
import { ITheme } from "src/App";
import styled from "styled-components";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    isFooter?: boolean;
}

const StyledButton = styled.button<{theme: ITheme; $isFooter?: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.$isFooter ? "250px" : "100%"};
    height: 56px;
    border-radius: 12px;
    gap: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    
    background: ${props => props.theme.accent}; 

    &:hover {
        background: ${props => props.theme.accentHover};
        transform: translateY(-2px);
    }

    span {
        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
    }
`;

export const AppButton: React.FC<ButtonProps> = ({ text, onClick, icon, isFooter }) => (
    <StyledButton onClick={onClick} $isFooter={isFooter}>
        {icon}
        <span>{text}</span>
    </StyledButton>
);
