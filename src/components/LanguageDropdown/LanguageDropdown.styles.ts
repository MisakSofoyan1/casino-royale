import styled from "styled-components";

export const SelectContainer = styled.div`
    position: relative;
    width: 289px;
    height: 56px;
    cursor: pointer;
`;

export const SelectSelected = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    background: #ffffff1a;
    border: 1px solid #ffffff1a;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    color: #fff;
    transition: all 0.2s ease;

    &:hover {
        background: #ffffff26;
    }
`;

export const SelectedContent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid #ffffff33;
    }

    span {
        font-size: 15px;
        font-weight: 500;
    }
`;

export const IconWrapper = styled.div<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    transform: rotate(${(props) => (props.$isOpen ? "180deg" : "0deg")});

    svg {
        width: 12px;
        height: 12px;
    }
`;

export const DropdownList = styled.div`
    position: absolute;
    top: calc(100%);
    left: 0;
    width: 100%;
    background: #06225d;
    border: 1px solid #ffffff1a;
    border-radius: 8px;
    box-shadow: 0px 10px 30px #00000080;
    overflow: hidden;
    z-index: 100;
`;

export const DropdownItem = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    background: ${(props) => (props.$isActive ? "#ffffff1a" : "transparent")};
    transition: background 0.2s;

    &:hover {
        background: #ffffff26;
    }

    img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
    }

    span {
        color: #fff;
        font-size: 14px;
    }
`;
