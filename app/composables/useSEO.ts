export const useAppSEO = (
  title?: string,
  description?: string,
  image?: string
) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  // URL base de tu sitio (configúrala en nuxt.config o hardcodeada)
  const siteUrl = "https://jespasa.github.io/estetica-saval-landing";

  const seoTitle = title
    ? `${title} | Estética Saval`
    : "Estética Saval | Bienestar y Alta Gama";
  const seoDesc =
    description ||
    "Tu refugio de bienestar y belleza. Especialistas en tratamientos faciales y corporales.";
  const seoImg = image ? `${siteUrl}${image}` : `${siteUrl}/logo_white.png`;

  useSeoMeta({
    title: seoTitle,
    ogTitle: seoTitle,
    description: seoDesc,
    ogDescription: seoDesc,
    ogImage: seoImg,
    ogUrl: `${siteUrl}${route.path}`,
    twitterCard: "summary_large_image",
    ogType: "website",
    ogLocale: "es_ES",
  });
};
