export const useAppSEO = (
  title?: string,
  description?: string,
  image?: string,
) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  // URL base de tu sitio (usa la configuración de runtimeConfig)
  const siteUrl =
    config.public.siteUrl || "https://estetica-saval-landing.vercel.app";

  const seoTitle = title
    ? `${title} | Estética Saval`
    : "Estética Saval | Centro de Belleza y Bienestar en Callosa d'en Sarrià";
  const seoDesc =
    description ||
    "Centro de estética en Callosa d'en Sarrià. Tratamientos faciales y corporales con Indiba, fotodepilación, Dermapen y cosmética Sothys. Diagnóstico gratuito.";
  const seoImg = image ? `${siteUrl}${image}` : `${siteUrl}/logo_white.webp`;
  const canonicalUrl = `${siteUrl}${route.path}`;

  useSeoMeta({
    title: seoTitle,
    ogTitle: seoTitle,
    description: seoDesc,
    ogDescription: seoDesc,
    ogImage: seoImg,
    ogUrl: canonicalUrl,
    ogSiteName: "Centro Estética Saval",
    twitterCard: "summary_large_image",
    twitterTitle: seoTitle,
    twitterDescription: seoDesc,
    twitterImage: seoImg,
    ogType: "website",
    ogLocale: "es_ES",
    robots:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  });

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
  });
};
