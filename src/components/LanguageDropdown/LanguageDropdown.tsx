import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "src/context/LanguageContext";
import { LANGUAGE_OPTIONS } from "src/region/config";
import ChevronIcon from "assets/icons/ChevronIcon";

import {
    SelectContainer,
    SelectSelected,
    SelectedContent,
    IconWrapper,
    DropdownList,
    DropdownItem
} from "./LanguageDropdown.styles";

export const LanguageDropdown: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = LANGUAGE_OPTIONS.find(opt => opt.value === language) || LANGUAGE_OPTIONS[0];

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
                    <img src={currentLang.flag} alt={currentLang.label} />
                    <span>{currentLang.label}</span>
                </SelectedContent>
                <IconWrapper $isOpen={isOpen}>
                    <ChevronIcon />
                </IconWrapper>
            </SelectSelected>

            {isOpen && (
                <DropdownList>
                    {LANGUAGE_OPTIONS.map((option) => (
                        <DropdownItem 
                            key={option.value}
                            $isActive={option.value === language}
                            onClick={() => {
                                setLanguage(option.value);
                                setIsOpen(false);
                            }}
                        >
                            <img src={option.flag} alt={option.label} />
                            <span>{option.label}</span>
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </SelectContainer>
    );
};
