import React from "react";
import styled from "styled-components";
import { GeoProvider } from "./context/GeoContext";
import { MainSection } from "./components/MainSection/MainSection";
import { FooterSection } from "./components/Footer/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    font-family: 'SF Pro Display';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    button {
        font-family: inherit;
    }
`;

const App: React.FC = () => (
    <LanguageProvider>
        <GeoProvider>
            <PageWrapper>
                <MainSection />
                <FooterSection />
            </PageWrapper>
        </GeoProvider>
    </LanguageProvider>
);

export default App;
