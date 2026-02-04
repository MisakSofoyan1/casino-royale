const BASE_URL = "https://gateway.eva-digital-playground.com/v0/casino/games/launch";

interface GameUrlParams {
  lang: string;
  isMobile: boolean;
}

export const generateGameUrl = ({ lang, isMobile }: GameUrlParams): string => {
  const params = new URLSearchParams({
    gameId: "n2-novomatic-book-of-ra-deluxe",
    channel: isMobile ? "mobile" : "desktop",
    partnerKey: process.env.PARTNER_KEY || "0wl",
    lobbyUrl: "https://chinchincasino.com",
    mode: "demo",
    language: lang,
  });

  return `${BASE_URL}?${params.toString()}`;
};
