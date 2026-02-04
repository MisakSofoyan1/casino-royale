import React from "react";
import {
    AdultWrapper,
    DownLoadText,
    DownLoadWrapper,
    FirstSection,
    Footer,
    InfoWrapper,
    LicenseImg,
    LicenseWrapper,
    RoyalImg,
    SecondSection,
    SocialIconsRow,
    SocialMediaWrapper,
    ThumbnailImg,
} from "./Footer.styles";
import thumbNail from "assets/thumbnail.png";
import casinoRoyal from "assets/casino-royale.png";
import { useLanguage } from "src/context/LanguageContext";
import DownloadIcon from "assets/icons/DownloadIcon";
import AdultIcon from "assets/icons/AdultIcon";
import license from "assets/license.png";
import instagramIcon from "assets/social/instagram.png";
import telegramIcon from "assets/social/telegram.png";
import xIcon from "assets/social/x.png";
import emailIcon from "assets/social/email.png";
import { AppButton } from "../shared/Button/Button";
import { Dropdown } from "../shared/Dropdown/Dropdown";
import { GEO_OPTIONS, LANGUAGE_OPTIONS } from "src/region/config";
import { useGeo } from "src/context/GeoContext";

export const FooterSection: React.FC = () => {
    const { region, setRegion, config } = useGeo();
    const { language, setLanguage, translations } = useLanguage();
    return (
        <Footer style={{ background: config.footerBg }}>
            <FirstSection>
                <ThumbnailImg src={thumbNail} alt="Thumbnail" />
                <DownLoadWrapper>
                    <RoyalImg src={casinoRoyal} />
                    <DownLoadText>
                        <h2>{translations.downloadTextHeader}</h2>
                        <p>{translations.downloadText}</p>
                    </DownLoadText>
                    <AppButton
                        text={translations.install}
                        icon={<DownloadIcon />}
                        onClick={() => console.log("install")}
                        isFooter
                    />
                </DownLoadWrapper>

                <InfoWrapper>
                    <AdultWrapper>
                        <AdultIcon />
                        <span>{translations.adult}</span>
                    </AdultWrapper>
                    <LicenseWrapper>
                        <LicenseImg src={license} />
                        <span>{translations.license}</span>
                    </LicenseWrapper>
                </InfoWrapper>
            </FirstSection>
            <SecondSection>
                <div>
                    <Dropdown
                        options={GEO_OPTIONS}
                        currentValue={region}
                        onSelect={setRegion}
                    />
                    <Dropdown
                        options={LANGUAGE_OPTIONS}
                        currentValue={language}
                        onSelect={setLanguage}
                    />
                </div>
                <SocialMediaWrapper>
                    <span>{translations.social}</span>
                    <SocialIconsRow>
                        <img src={instagramIcon} alt="Instagram" />
                        <img src={telegramIcon} alt="Telegram" />
                        <img src={xIcon} alt="X (Twitter)" />
                        <img src={emailIcon} alt="Email" />
                    </SocialIconsRow>
                </SocialMediaWrapper>
            </SecondSection>
        </Footer>
    );
};
