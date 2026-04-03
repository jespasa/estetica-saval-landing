/**
 * Composable para datos estructurados Schema.org
 * Mejora el SEO proporcionando información estructurada a Google
 */

export const useSchemaOrg = () => {
  const config = useRuntimeConfig();
  const siteUrl =
    config.public.siteUrl || "https://estetica-saval-landing.vercel.app";

  // Schema LocalBusiness para la página principal
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteUrl}/#organization`,
    name: "Estética Saval",
    alternateName: "Centro Estética Saval",
    description:
      "Centro de estética avanzada en Callosa d'en Sarrià. Especialistas en tratamientos faciales y corporales de alta gama con tecnología Indiba, fotodepilación y más.",
    url: siteUrl,
    logo: `${siteUrl}/logo_white.webp`,
    image: `${siteUrl}/img/hero_img.webp`,
    telephone: ["+34965881733", "+34681939492"],
    email: "info@esteticasaval.es",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Rafael Couchoud, 10",
      addressLocality: "Callosa d'en Sarrià",
      addressRegion: "Alicante",
      postalCode: "03510",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6511,
      longitude: -0.1219,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    areaServed: [
      {
        "@type": "City",
        name: "Callosa d'en Sarrià",
      },
      {
        "@type": "City",
        name: "Altea",
      },
      {
        "@type": "City",
        name: "Benidorm",
      },
      {
        "@type": "City",
        name: "La Nucía",
      },
      {
        "@type": "AdministrativeArea",
        name: "Marina Baixa",
      },
    ],
    sameAs: [
      "https://www.facebook.com/p/CENTRO-EST%C3%89TICA-SAVAL-100063517870433/",
      "https://www.instagram.com/centroesteticasaval/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Estética",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Indiba",
            description:
              "Tratamiento de radiofrecuencia regenerativa que reafirma la piel y reduce la grasa localizada.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fotorejuvenecimiento",
            description:
              "Tratamiento con luz pulsada para eliminar manchas y estimular el colágeno.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fotodepilación",
            description:
              "Eliminación del vello de forma duradera mediante tecnología de luz.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cavitación",
            description:
              "Técnica no invasiva para modelar la figura mediante ultrasonidos.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Presoterapia",
            description:
              "Masaje de compresión que mejora la circulación y elimina toxinas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tratamientos faciales y corporales",
            description:
              "Rituales personalizados con alta cosmética y técnicas manuales exclusivas.",
          },
        },
      ],
    },
  };

  // Schema WebSite para mejora de búsqueda
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Centro Estética Saval",
    description: "Centro de estética en Callosa d'en Sarrià",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "es-ES",
  };

  // Schema BreadcrumbList para navegación
  const getBreadcrumbSchema = (
    items: Array<{ name: string; url: string }>,
  ) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  });

  // Schema Service para páginas de servicios individuales
  const getServiceSchema = (service: {
    name: string;
    description: string;
    image?: string;
    url: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${service.url}/#service`,
    name: service.name,
    description: service.description,
    image: service.image ? `${siteUrl}${service.image}` : undefined,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Marina Baixa, Alicante",
    },
    serviceType: "Tratamiento estético",
  });

  // Schema FAQPage para preguntas frecuentes (AEO/GEO - featured snippets)
  const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });

  // Función para inyectar el schema en el head
  const injectSchema = (schema: object | object[]) => {
    const schemas = Array.isArray(schema) ? schema : [schema];

    useHead({
      script: schemas.map((s) => ({
        type: "application/ld+json",
        innerHTML: JSON.stringify(s),
      })),
    });
  };

  return {
    localBusinessSchema,
    websiteSchema,
    getBreadcrumbSchema,
    getServiceSchema,
    getFAQSchema,
    injectSchema,
  };
};
