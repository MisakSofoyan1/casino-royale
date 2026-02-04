import React, { useState } from "react";
import { useGeo } from "src/context/GeoContext";
import casinoRoyal from "assets/casino-royale.png";
import slot from "assets/slot.png";
import {
    Main,
    FlexContainer,
    RoyalImg,
    SlotImg,
    GameButton,
    Overlay,
    CloseButton,
    IframeContainer,
    GameIframe,
} from "./MainSection.styles";
import { useIsMobile } from "src/hooks/useIsMobile";
import { generateGameUrl } from "src/utils/gameUrl";

export const MainSection: React.FC = () => {
    const [isGameOpen, setIsGameOpen] = useState(false);

    const { config } = useGeo();
    const isMobile = useIsMobile();

    const gameUrl = generateGameUrl({
        lang: config.langCode,
        isMobile: isMobile,
    });

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsGameOpen(false);
        }
    };

    return (
        <>
            <Main $bg={config.bgImage}>
                <FlexContainer>
                    <RoyalImg src={casinoRoyal} />
                    <SlotImg src={slot} />

                    <GameButton
                        $color={config.themeColor}
                        onClick={() => setIsGameOpen(true)}
                    >
                        {config.buttonText}
                    </GameButton>
                </FlexContainer>
            </Main>

            {isGameOpen && (
                <Overlay onClick={handleOverlayClick}>
                    <CloseButton onClick={() => setIsGameOpen(false)}>
                        &times;
                    </CloseButton>
                    <IframeContainer>
                        <GameIframe
                            src={gameUrl}
                        />
                    </IframeContainer>
                </Overlay>
            )}
        </>
    );
};
