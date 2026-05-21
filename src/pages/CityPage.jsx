import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { CITIES, SERVICES, PHONE, PHONE_HREF, DOMAIN } from "../data/cities";
import QuoteForm from "../components/QuoteForm";

export default function CityPage() {
  const { slug } = useParams();
  const city = CITIES.find(c => c.slug === slug);

  useEffect(() => {
    if (city) {
      document.title = city.metaTitle;
      const meta = document.querySelector("meta[name='description']");
      if (meta) meta.setAttribute("content", city.metaDesc);

      const canonical = document.querySelector("link[rel='canonical']");
      if (canonical) canonical.setAttribute("href", `${DOMAIN}/${city.slug}`);

      const schemaEl = document.querySelector("#city-schema");
      if (schemaEl) {
        schemaEl.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
          "name": `Carolina Blacktop — ${city.name}`,
          "description": city.metaDesc,
          "url": `${DOMAIN}/${city.slug}`,
          "telephone": "+17047075050",
          "areaServed": { "@type": "City", "name": city.name, "addressRegion": city.state },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "07:00", "closes": "14:00" }
          ],
          "priceRange": "$$",
          "hasMap": `https://maps.google.com/?q=Carolina+Blacktop+${city.name}+${city.state}`,
        });
      }
    }
    window.scrollTo(0, 0);
  }, [city]);

  if (!city) return <Navigate to="/" replace />;

  const nearby = CITIES.filter(c => c.slug !== slug).slice(0, 8);
  const stateLabel = city.state === "NC" ? "North Carolina" : "South Carolina";
  const licenseNote = city.state === "NC" ? "Licensed NC Contractor" : "Licensed SC Contractor";

  return (
    <>
      {/* BREADCRUMB (schema.org BreadcrumbList injected via JSON-LD) */}
      <div style={{ padding: "14px 24px", background: "var(--light-gray)", fontSize: "0.9rem" }}>
        <div className="container">
          <Link to="/" style={{ color: "var(--amber)", textDecoration: "none" }}>Home</Link>
          {" → "}{city.name}, {city.state} Asphalt Paving
        </div>
      </div>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)", color: "var(--white)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "var(--amber)", color: "var(--black)", padding: "6px 16px", borderRadius: 20, fontSize: "0.85rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: 24 }}>
          📍 {city.badge}
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>
          Asphalt Paving &amp;<br /><span style={{ color: "var(--amber)" }}>Sealing in {city.name}, {city.state}</span>
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", maxWidth: 620, margin: "0 auto 32px" }}>
          {city.lead1.split(".")[0]}. {licenseNote}. Free estimates.
        </p>
        <a href={PHONE_HREF} className="btn-primary">📞 Get a Free Estimate</a>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "var(--amber)", padding: "14px 24px", display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
        {[`✓ ${licenseNote}`, "✓ Commercial & Residential", "✓ Fully Insured", "✓ Free Written Estimates"].map(t => (
          <span key={t} style={{ color: "var(--black)", fontWeight: "bold", fontSize: "0.9rem" }}>{t}</span>
        ))}
      </div>

      {/* CONTENT */}
      <section>
        <div className="container" style={{ maxWidth: 920 }}>
          <h2>Professional Asphalt Paving in {city.name}, {stateLabel}</h2>
          <p className="lead">{city.lead1}</p>
          <p className="lead">{city.lead2}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginTop: 32 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 24, borderLeft: "4px solid var(--amber)" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: 10 }}>{s.icon} {s.title}</h3>
                <p style={{ color: "#666", fontSize: "0.95rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: "var(--light-gray)" }}>
        <div className="container" style={{ maxWidth: 920 }}>
          <h2>Why {city.name} Chooses Carolina Blacktop</h2>
          <p className="lead">{city.why}</p>
          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: "📋", label: "Free Written Estimates", detail: "Detailed scope before any work begins" },
              { icon: "🏛", label: licenseNote, detail: `State-licensed in ${city.state}` },
              { icon: "🛡", label: "Fully Insured", detail: "Commercial general liability + workers comp" },
              { icon: "⚡", label: "Fast Response", detail: "Call back within 1 business hour" },
            ].map(item => (
              <div key={item.label} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 8, padding: 20, textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: "bold", marginBottom: 4, fontSize: "0.95rem" }}>{item.label}</div>
                <div style={{ color: "#777", fontSize: "0.85rem" }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 style={{ textAlign: "center" }}>Free Estimate for Your {city.name} Project</h2>
          <p className="lead" style={{ textAlign: "center" }}>Submit your project details and we'll call back within 1 business hour.</p>
          <QuoteForm city={`${city.name}, ${city.state}`} />
        </div>
      </section>

      {/* NEARBY */}
      <section style={{ background: "var(--light-gray)" }}>
        <div className="container">
          <h2>Other Carolinas Service Areas</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginTop: 24 }}>
            {nearby.map(c => (
              <Link key={c.slug} to={`/${c.slug}`} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 6, padding: "14px 16px", textDecoration: "none", color: "var(--text)", transition: "border-color 0.2s, color 0.2s", display: "block" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.querySelector("h3").style.color = "var(--amber)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.querySelector("h3").style.color = "var(--black)"; }}>
                <h3 style={{ fontSize: "0.95rem", color: "var(--black)", marginBottom: 2, transition: "color 0.2s" }}>{c.name}, {c.state}</h3>
                <p style={{ fontSize: "0.8rem", color: "#888" }}>{c.county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--amber)", textAlign: "center", padding: "64px 24px" }}>
        <div className="container">
          <h2 style={{ color: "var(--black)", marginBottom: 16 }}>Ready to Get Your {city.name} Project Started?</h2>
          <p style={{ color: "rgba(0,0,0,0.7)", marginBottom: 32 }}>Free estimates · {licenseNote} · Fully insured · Fast response</p>
          <a href={PHONE_HREF} className="btn-dark">📞 Call {PHONE}</a>
        </div>
      </section>

      {/* City-specific JSON-LD injected via useEffect above */}
      <script type="application/ld+json" id="city-schema" />
    </>
  );
}
