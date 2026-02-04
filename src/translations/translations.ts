import { Language } from "src/region/config";

export interface Translations {
  buttonText: string;
  downloadTextHeader: string;
  downloadText: string;
  install: string;
  adult: string;
  license: string;
  social: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: { 
    buttonText: "Open The Game",
    downloadTextHeader: "Download Casino",
    downloadText: "Play min anywhere, anytime",
    install: "Install App",
    adult: "Only 18+",
    license: "Casino is certified by the Anjouan Gaming Authority",
    social: "Us on social media:",
  },
  tr: { 
    buttonText: "Oyunu Başlat",
    downloadTextHeader: "Casino'yu İndir",
    downloadText: "Her yerde, her zaman oyna",
    install: "Uygulamayı Yükle",
    adult: "Sadece 18+",
    license: "Casino, Anjouan Oyun Otoritesi tarafından onaylanmıştır",
    social: "Sosyal medyada biz:",
  },
  pt: { 
    buttonText: "Jogar Agora",
    downloadTextHeader: "Baixar Casino",
    downloadText: "Jogue em qualquer lugar, a qualquer hora",
    install: "Instalar Aplicativo",
    adult: "Apenas 18+",
    license: "O cassino é certificado pela Anjouan Gaming Authority",
    social: "Nós nas redes sociais:",
  },
  it: { 
    buttonText: "Apri il Gioco",
    downloadTextHeader: "Scarica Casino",
    downloadText: "Gioca ovunque, in qualsiasi momento",
    install: "Installa l'App",
    adult: "Solo 18+",
    license: "Il casinò è certificato dalla Anjouan Gaming Authority",
    social: "Noi sui social media:",
  },
  ru: { 
    buttonText: "Открыть игру",
    downloadTextHeader: "Скачать Казино",
    downloadText: "Играй где угодно и когда угодно",
    install: "Установить приложение",
    adult: "Только 18+",
    license: "Казино сертифицировано Gaming Authority Анжуана",
    social: "Мы в соцсетях:",
  }
};
