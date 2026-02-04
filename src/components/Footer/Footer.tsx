import React from "react";
import {
    AdultWrapper,
    DonwloadButton,
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
import { LanguageDropdown } from "../LanguageDropdown/LanguageDropdown";
import instagramIcon from "assets/social/instagram.png";
import telegramIcon from "assets/social/telegram.png";
import xIcon from "assets/social/x.png";
import emailIcon from "assets/social/email.png";

export const FooterSection: React.FC = () => {
    const { translations } = useLanguage();
    return (
        <Footer>
            <FirstSection>
                <ThumbnailImg src={thumbNail} alt="Thumbnail" />
                <DownLoadWrapper>
                    <RoyalImg src={casinoRoyal} />
                    <DownLoadText>
                        <h2>{translations.downloadTextHeader}</h2>
                        <p>{translations.downloadText}</p>
                    </DownLoadText>
                    <DonwloadButton>
                        <DownloadIcon />
                        <span>{translations.install}</span>
                    </DonwloadButton>
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
              <LanguageDropdown />
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
