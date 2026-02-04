import React from "react";
import { useGeo } from "src/GeoContext";
import casinoRoyal from "assets/casino-royale.png";
import slot from "assets/slot.png";
import {
    Main,
    FlexContainer,
    RoyalImg,
    SlotImg,
    GameButton,
} from "./MainSection.styles";

export const MainSection: React.FC = () => {
    const { config } = useGeo();
    return (
        <Main $bg={config.bgImage}>
            <FlexContainer>
                <RoyalImg src={casinoRoyal} />

                <SlotImg src={slot} />

                <GameButton
                    $color={config.themeColor}
                    onClick={() => alert("Opening Game...")}
                >
                    {config.buttonText}
                </GameButton>
            </FlexContainer>
        </Main>
    );
};
