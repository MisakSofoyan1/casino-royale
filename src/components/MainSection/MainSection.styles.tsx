import styled, { keyframes } from "styled-components";

export const Main = styled.main<{ $bg: string }>`
    flex: 1;
    background-image: url(${(props) => props.$bg});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
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

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideUp = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    backdrop-filter: blur(2px);
    animation: ${fadeIn} 0.3s ease-out;
`;

export const IframeContainer = styled.div`
    position: relative;
    width: 90%;
    height: 90vh;
    background: #000;
    border-radius: 16px;
    box-shadow: 0 0 40px #000000;
    animation: ${slideUp} 0.4s ease-out;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 1%;
    right: 2%;
    background: none;
    border: none;
    color: white;
    font-size: 35px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
    padding: 0;
    &:hover {
        color: #ff7700;
    }
`;

export const GameIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 16px;
`;
