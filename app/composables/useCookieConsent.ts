export type ConsentStatus = "pending" | "accepted" | "rejected";

export const useCookieConsent = () => {
  const consent = useCookie<ConsentStatus>("cookie-consent", {
    default: () => "pending",
    maxAge: 60 * 60 * 24 * 365, // 1 año
    sameSite: "lax",
    path: "/",
  });

  const accept = () => {
    consent.value = "accepted";
  };

  const reject = () => {
    consent.value = "rejected";
  };

  return { consent, accept, reject };
};
