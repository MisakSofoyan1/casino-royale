import styled from "styled-components";

export const Footer = styled.footer`
    padding: 64px 20px;
    display: flex;
    align-items: center;
    background: linear-gradient(270deg, #06225d 0%, #02011f 37.03%);
    justify-content: space-between;
    align-items: stretch;
`;

export const FirstSection = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;

export const ThumbnailImg = styled.img`
    max-width: 288px;
`;

export const DownLoadWrapper = styled.div`
    width: 390px;
    padding: 24px 0;
    border-radius: 16px;
    align-items: center;
    position: relative;
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 16px;

        padding: 1px;

        background: linear-gradient(84.38deg, #ff8d6b 7.59%, #ffba47 96.71%);

        --mask: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='black' stroke-width='2' stroke-dasharray='4%2c 4'/%3e%3c/svg%3e");

        -webkit-mask-image: var(--mask);
        mask-image: var(--mask);

        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;

        -webkit-mask-composite: destination-in;
        mask-composite: intersect;

        pointer-events: none;
    }
`;

export const RoyalImg = styled.img`
    height: 80px;
    width: 175.8px;
`;

export const DownLoadText = styled.div`
    color: #ffffff;
    h2 {
        margin: 0;
        font-size: 32px;
        font-weight: 860;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
    }
    p {
        margin: 0;
        font-size: 16px;
        font-weight: 590;
        line-height: 22px;
        text-align: center;
        color: #bababa;
    }
`;

export const DonwloadButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 56px;
    border-radius: 12px;
    gap: 8px;
    background: linear-gradient(84.38deg, #ff8d6b 7.59%, #ffba47 96.71%);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(84.38deg, #ffba47 7.59%, #ff8d6b 96.71%);
        transform: translateY(-2px);
    }

    span {
        color: #ffffff;
        font-size: 16px;
        font-weight: 590;
        line-height: 22px;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    max-width: 357px;
`;

export const AdultWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #fbfbfbb2;
    }
`;

export const LicenseWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    span {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #fbfbfbb2;
    }
`;

export const LicenseImg = styled.img`
    width: 58px;
    height: 58px;
`;

export const SecondSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    span {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #bababa;
        text-align: right;
    }
`;

export const SocialIconsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;

    img {
        width: 58px;
        height: 58px;
        cursor: pointer;
    }
`;
