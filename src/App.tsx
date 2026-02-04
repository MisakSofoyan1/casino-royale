import React from "react";
import styled from "styled-components";
import { GeoProvider } from "./GeoContext";
import { MainSection } from "./components/MainSection/MainSection";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`;


const App: React.FC = () => (
    <GeoProvider>
        <PageWrapper>
            <MainSection />
        </PageWrapper>
    </GeoProvider>
);

export default App;
