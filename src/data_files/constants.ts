import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Digital Apes GmbH",
  tagline: "Problem solvers as a service",
  description: "Digital Apes is a web development agency specializing in high-quality web and app development services tailored to meet your unique business needs. Start exploring and contact our team to bring your digital vision to life with cutting-edge solutions and reliability.",
  description_short: "Digital Apes specializes in web and app development tailored to your business needs.",
  url: "https://digitalapes.ch",
  author: "Digital Apes GmbH",
};


export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Web & App Development Services`,
  description: "Empower your business with Digital Apes' expert web and app development services. Trusted by clients for our user-centric designs and innovative solutions, we bring simplicity, affordability, and reliability to every project. Discover the difference with Digital Apes today!",
  image: ogImageSrc,
};
