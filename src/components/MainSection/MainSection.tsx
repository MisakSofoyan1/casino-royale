import React, { useEffect, useState } from "react";
import { useGeo } from "src/context/GeoContext";
import casinoRoyal from "public/assets/casino-royale.png";
import slot from "assets/slot.png";
import {
    Main,
    FlexContainer,
    RoyalImg,
    SlotImg,
    Overlay,
    CloseButton,
    IframeContainer,
    GameIframe,
} from "./MainSection.styles";
import { useIsMobile } from "src/hooks/useIsMobile";
import { generateGameUrl } from "src/utils/gameUrl";
import { useLanguage } from "src/context/LanguageContext";
import { AppButton } from "../shared/Button/Button";

export const MainSection: React.FC = () => {
    const [isGameOpen, setIsGameOpen] = useState(false);

    const { config } = useGeo();
    const { language, translations } = useLanguage();

    const isMobile = useIsMobile();

    const gameUrl = generateGameUrl({
        lang: language,
        isMobile: isMobile,
    });

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsGameOpen(false);
        }
    };

    useEffect(() => {
        if (isGameOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isGameOpen]);

    return (
        <>
            <Main $bg={config.bgImage}>
                <FlexContainer>
                    <RoyalImg src={casinoRoyal} />
                    <SlotImg src={slot} />

                    <AppButton
                        text={translations.buttonText}
                        onClick={() => setIsGameOpen(true)}
                    />
                </FlexContainer>
            </Main>

            {isGameOpen && (
                <Overlay onClick={handleOverlayClick}>
                    <CloseButton onClick={() => setIsGameOpen(false)}>
                        &times;
                    </CloseButton>
                    <IframeContainer>
                        <GameIframe src={gameUrl} />
                    </IframeContainer>
                </Overlay>
            )}
        </>
    );
};
