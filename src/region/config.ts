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
  bgImage: string;
}

export const TRANSLATIONS: Record<Language, { buttonText: string }> = {
  en: { buttonText: "Open The Game" },
  tr: { buttonText: "Oyunu Başlat" },
  pt: { buttonText: "Jogar Agora" },
  it: { buttonText: "Apri il Gioco" },
  ru: { buttonText: "Открыть игру" },
};

export const ALL_LANGUAGES: Language[] = ['en', 'tr', 'pt', 'it', 'ru'];

export const REGIONS_DATA: Record<Region, GeoConfig> = {
  EN: { countryName: "United Kingdom", defaultLang: 'en', themeColor: "#FF7700", bgImage: bgGeneral },
  TR: { countryName: "Turkey", defaultLang: 'tr', themeColor: "#E30A17", bgImage: bgGeneral },
  BR: { countryName: "Brazil", defaultLang: 'pt', themeColor: "#009739", bgImage: bgGeneral },
  IT: { countryName: "Italy", defaultLang: 'it', themeColor: "#008C45", bgImage: bgGeneral },
  RU: { countryName: "Russia", defaultLang: 'ru', themeColor: "#1E88E5", bgImage: bgGeneral }
};

export const LANGUAGE_OPTIONS: { label: string; value: Language; flag: string }[] = [
    { label: "English", value: "en", flag: enFlag },
    { label: "Turkish", value: "tr", flag: trFlag },
    { label: "Portuguese", value: "pt", flag: ptFlag },
    { label: "Italian", value: "it", flag: itFlag },
    { label: "Russian", value: "ru", flag: ruFlag },
];
