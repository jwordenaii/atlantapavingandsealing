import { BUSINESS_NAME, DOMAIN, FAQS, SERVICES, CITIES, PHONE } from "../data/cities";

const DEFAULT_DESCRIPTION =
  "Carolina Blacktop provides asphalt paving, driveway paving, commercial parking lot paving, sealcoating, resurfacing, and asphalt repair across Charlotte, NC and nearby South Carolina service areas.";

function setMeta(selector, attr, value) {
  if (!value) return;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    if (selector.includes("property=")) {
      element.setAttribute("property", selector.match(/property=['"]([^'"]+)/)?.[1] || "");
    } else {
      element.setAttribute("name", selector.match(/name=['"]([^'"]+)/)?.[1] || "");
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attr, value);
}

function setCanonical(url) {
  let link = document.head.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function setJsonLd(id, schema) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
}

export function pageUrl(path = "/") {
  return `${DOMAIN}${path}`;
}

export function buildBusinessSchema({ city, url = DOMAIN } = {}) {
  const areaServed = city
    ? [{ "@type": "City", name: city.name, addressRegion: city.state }]
    : CITIES.map((place) => ({
        "@type": "City",
        name: place.name,
        addressRegion: place.state,
      }));

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${DOMAIN}/#localbusiness`,
    name: BUSINESS_NAME,
    url: DOMAIN,
    description: city
      ? `${BUSINESS_NAME} provides asphalt paving, sealcoating, resurfacing, and asphalt repair in ${city.name}, ${city.state}.`
      : DEFAULT_DESCRIPTION,
    areaServed,
    knowsAbout: [
      "Asphalt paving",
      "Driveway paving",
      "Parking lot paving",
      "Sealcoating",
      "Asphalt repair",
      "Pavement resurfacing",
      "Line striping",
    ],
    makesOffer: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        areaServed,
      },
    })),
    potentialAction: {
      "@type": "ContactAction",
      target: `${url}#quote`,
      name: "Request a free asphalt paving estimate",
    },
  };

  if (PHONE) {
    schema.telephone = PHONE;
  }

  return schema;
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function setSeo({
  title = `${BUSINESS_NAME} | Asphalt Paving Charlotte NC & SC`,
  description = DEFAULT_DESCRIPTION,
  canonical = DOMAIN,
  schema = [],
}) {
  document.title = title;
  setMeta("meta[name='description']", "content", description);
  setMeta("meta[property='og:title']", "content", title);
  setMeta("meta[property='og:description']", "content", description);
  setMeta("meta[property='og:url']", "content", canonical);
  setMeta("meta[property='og:type']", "content", "website");
  setMeta("meta[name='twitter:card']", "content", "summary_large_image");
  setCanonical(canonical);

  if (schema.length) {
    setJsonLd("page-schema", schema);
  }
}
