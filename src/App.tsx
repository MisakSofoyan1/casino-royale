import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GeoProvider, useGeo } from "./context/GeoContext";
import { MainSection } from "./components/MainSection/MainSection";
import { FooterSection } from "./components/Footer/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export interface ITheme {
    accent: string;
    accentHover: string;
    footer: string;
}

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: "SF Pro Display";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    button {
        font-family: inherit;
    }
`;

const AppContent: React.FC = () => {
    const { config } = useGeo();

    const theme: ITheme = {
        accent: config.themeColor,
        accentHover: config.hoverColor,
        footer: config.footerBg,
    };

    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                <MainSection />
                <FooterSection />
            </PageWrapper>
        </ThemeProvider>
    );
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <GeoProvider>
                <AppContent />
            </GeoProvider>
        </LanguageProvider>
    );
};

export default App;
