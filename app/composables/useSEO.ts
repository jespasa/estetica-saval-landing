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
    : "Estética Saval | Bienestar y Alta Gama";
  const seoDesc =
    description ||
    "Tu refugio de bienestar y belleza. Especialistas en tratamientos faciales y corporales.";
  const seoImg = image ? `${siteUrl}${image}` : `${siteUrl}/logo_white.webp`;

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
