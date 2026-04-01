export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function initializeConsent() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };

  // Default: deny all
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function ensureGtag() {
  if (typeof window === "undefined") return;
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
}

export function grantConsent() {
  if (typeof window === "undefined") return;
  ensureGtag();

  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });

  // Load GA4 script dynamically
  if (GA_MEASUREMENT_ID && !document.getElementById("ga-script")) {
    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
  }
}

export function denyConsent() {
  if (typeof window === "undefined") return;
  ensureGtag();

  window.gtag("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
