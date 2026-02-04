import styled from "styled-components";

export const Main = styled.main<{ $bg: string }>`
    flex: 1;
    background-image: url(${(props) => props.$bg});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10%;
    position: relative;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    max-width: 358.5px;
    align-items: center;
    z-index: 2;
`;

export const RoyalImg = styled.img`
    max-width: min(264px, 90%);
`;

export const SlotImg = styled.img`
    max-width: min(326px, 90%);
`;

export const GameButton = styled.button<{ $color: string }>`
    background: ${(props) => props.$color};
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    line-height: 22px;
    text-transform: uppercase;
    border-radius: 8px;
    cursor: pointer;
    background-image: linear-gradient(84.38deg, #ff8d6b 7.59%, #ffba47 96.71%);
    transition: all 0.3s ease;
    height: 56px;
    width: 100%;

    &:hover {
        background-image: linear-gradient(
            84.38deg,
            #ffba47 7.59%,
            #ff8d6b 96.71%
        );
    }
`;
