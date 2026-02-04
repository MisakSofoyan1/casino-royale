import enFlag from 'assets/lang/en.png';
import trFlag from 'assets/lang/tr.png';
import ptFlag from 'assets/lang/pt.png';
import itFlag from 'assets/lang/it.png';
import ruFlag from 'assets/lang/ru.png';
import bgGeneral from 'assets/bg-en.png';

export type Region = 'EN' | 'TR' | 'BR' | 'IT' | 'RU';
export type Language = 'en' | 'tr' | 'pt' | 'it' | 'ru';

export interface GeoConfig {
  countryName: string;
  defaultLang: Language;
  themeColor: string;
  hoverColor: string;
  footerBg: string;
  bgImage: string;
}

export const REGIONS_DATA: Record<Region, GeoConfig> = {
  EN: { 
    countryName: "United Kingdom", 
    defaultLang: 'en', 
    themeColor: "linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)",
    hoverColor: "linear-gradient(84.38deg, #FFBA47 7.59%, #FF8D6B 96.71%)",
    footerBg: "linear-gradient(270deg, #06225D 0%, #02011F 37.03%)",
    bgImage: bgGeneral 
  },
  TR: { 
    countryName: "Turkey", 
    defaultLang: 'tr', 
    themeColor: "linear-gradient(84.38deg, #E30A17 7.59%, #FF4D4D 96.71%)",
    hoverColor: "linear-gradient(84.38deg, #FF4D4D 7.59%, #E30A17 96.71%)",
    footerBg: "linear-gradient(270deg, #4A0000 0%, #1A0000 37.03%)",
    bgImage: bgGeneral 
  },
  BR: { 
    countryName: "Brazil", 
    defaultLang: 'pt', 
    themeColor: "linear-gradient(84.38deg, #009739 7.59%, #FEDD00 96.71%)",
    hoverColor: "linear-gradient(84.38deg, #FEDD00 7.59%, #009739 96.71%)",
    footerBg: "linear-gradient(270deg, #003010 0%, #001005 37.03%)",
    bgImage: bgGeneral 
  },
  IT: { 
    countryName: "Italy", 
    defaultLang: 'it', 
    themeColor: "linear-gradient(84.38deg, #008C45 7.59%, #0055A4 96.71%)",
    hoverColor: "linear-gradient(84.38deg, #0055A4 7.59%, #008C45 96.71%)",
    footerBg: "linear-gradient(270deg, #002B5C 0%, #001A33 37.03%)",
    bgImage: bgGeneral 
  },
  RU: { 
    countryName: "Russia", 
    defaultLang: 'ru', 
    themeColor: "linear-gradient(84.38deg, #1E88E5 7.59%, #00C853 96.71%)",
    hoverColor: "linear-gradient(84.38deg, #00C853 7.59%, #1E88E5 96.71%)",
    footerBg: "linear-gradient(270deg, #0D47A1 0%, #001030 37.03%)",
    bgImage: bgGeneral 
  }
};

export const GEO_OPTIONS = Object.entries(REGIONS_DATA).map(([key, value]) => ({
    label: value.countryName,
    value: key as Region,
}));

export const LANGUAGE_OPTIONS: { label: string; value: Language; flag: string }[] = [
    { label: "English", value: "en", flag: enFlag },
    { label: "Turkish", value: "tr", flag: trFlag },
    { label: "Portuguese", value: "pt", flag: ptFlag },
    { label: "Italian", value: "it", flag: itFlag },
    { label: "Russian", value: "ru", flag: ruFlag },
];
