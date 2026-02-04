import React, { useState, useRef, useEffect } from "react";
import ChevronIcon from "assets/icons/ChevronIcon";
import {
    SelectContainer,
    SelectSelected,
    SelectedContent,
    IconWrapper,
    DropdownList,
    DropdownItem
} from "./Dropdown.styles";

interface Option {
    label: string;
    value: string;
    flag?: string;
}

interface DropdownProps {
    options: Option[];
    currentValue: string;
    onSelect: (value: any) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, currentValue, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const selected = options.find(opt => opt.value === currentValue) || options[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <SelectContainer ref={dropdownRef}>
            <SelectSelected onClick={() => setIsOpen(!isOpen)}>
                <SelectedContent>
                    {selected.flag && <img src={selected.flag} alt="" />}
                    <span>{selected.label}</span>
                </SelectedContent>
                <IconWrapper $isOpen={isOpen}>
                    <ChevronIcon />
                </IconWrapper>
            </SelectSelected>

            {isOpen && (
                <DropdownList>
                    {options.map((option) => (
                        <DropdownItem 
                            key={option.value}
                            $isActive={option.value === currentValue}
                            onClick={() => {
                                onSelect(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {option.flag && <img src={option.flag} alt="" />}
                            <span>{option.label}</span>
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </SelectContainer>
    );
};
