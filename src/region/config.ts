export type Region = 'EN' | 'TR' | 'BR' | 'IT' | 'RU';

import bgGeneral from 'assets/bg-en.png'; 

export interface GeoConfig {
  buttonText: string;
  themeColor: string;
  bgImage: string;
  langCode: string;
}

export const REGIONS_DATA: Record<Region, GeoConfig> = {
  EN: {
    buttonText: "Open The Game",
    themeColor: "#FF7700",
    bgImage: bgGeneral,
    langCode: 'en',
  },
  TR: {
    buttonText: "Oyunu Başlat",
    themeColor: "#E30A17",
    bgImage: bgGeneral,
    langCode: 'tr',
  },
  BR: {
    buttonText: "Jogar Agora",
    themeColor: "#009739",
    bgImage: bgGeneral,
    langCode: 'pt',
  },
  IT: {
    buttonText: "Apri il Gioco",
    themeColor: "#008C45",
    bgImage: bgGeneral,
    langCode: 'it',
  },
  RU: {
    buttonText: "Открыть игру",
    themeColor: "#1E88E5",
    bgImage: bgGeneral,
    langCode: 'ru',
  }
};
