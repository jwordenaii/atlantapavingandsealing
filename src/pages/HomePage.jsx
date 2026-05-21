import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BUSINESS_NAME,
  CONTACT_HREF,
  CONTACT_LABEL,
  DOMAIN,
  FAQS,
  GOOGLE_BUSINESS_CHECKLIST,
  PRIMARY_MARKET,
  SERVICES,
  CITIES,
} from "../data/cities";
import QuoteForm from "../components/QuoteForm";
import { buildBusinessSchema, buildFaqSchema, setSeo } from "../utils/seo";

export default function HomePage() {
  useEffect(() => {
    setSeo({
      title: "Carolina Blacktop | Asphalt Paving Charlotte NC, Rock Hill SC",
      description:
        "Carolina Blacktop provides asphalt paving, driveway paving, parking lot paving, sealcoating, resurfacing, and asphalt repair in Charlotte, Rock Hill, York, Indian Land, and nearby Carolinas service areas.",
      canonical: DOMAIN,
      schema: [buildBusinessSchema(), buildFaqSchema()],
    });
  }, []);

  return (
    <>
      <section style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 60%, #0f0f0f 100%)",
        color: "var(--white)",
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(245,166,35,0.03) 40px, rgba(245,166,35,0.03) 80px)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "var(--amber)", color: "var(--black)", padding: "6px 16px", borderRadius: 20, fontSize: "0.85rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: 24 }}>
            Charlotte NC, Rock Hill SC, York SC, Indian Land SC
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16, lineHeight: 1.2 }}>
            Asphalt Paving in the Carolinas<br /><span style={{ color: "var(--amber)" }}>Built for Driveways, Lots &amp; Local Search</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto 32px" }}>
            {BUSINESS_NAME} serves Charlotte and surrounding North Carolina and South Carolina communities with asphalt paving, driveway paving, commercial parking lots, sealcoating, resurfacing, and asphalt repair.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={CONTACT_HREF} className="btn-primary">{CONTACT_LABEL}</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>
      </section>

      <div style={{ background: "var(--amber)", padding: "16px 24px", display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
        {["Charlotte Metro", "North Carolina & South Carolina", "Residential & Commercial", "Free Estimate Requests"].map(t => (
          <span key={t} style={{ color: "var(--black)", fontWeight: "bold", fontSize: "0.9rem" }}>{t}</span>
        ))}
      </div>

      <section style={{ background: "linear-gradient(135deg, #8B0000 0%, #c0392b 100%)", color: "white", padding: "64px 24px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "white", fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 16 }}>Local Asphalt Paving Built Around Search Intent</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: 700, margin: "0 auto 40px" }}>
            The site targets the services and cities customers actually search for: asphalt paving Charlotte NC, driveway paving Rock Hill SC, parking lot paving York SC, sealcoating Indian Land SC, and surrounding service-area searches.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, maxWidth: 800, margin: "0 auto" }}>
            {[["16", "Priority City Pages"], ["2", "States Covered"], ["6", "Core Services"], ["FAQ", "Structured Data"]].map(([num, lbl]) => (
              <div key={lbl} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: 24 }}>
                <span style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--amber)", display: "block" }}>{num}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2>Asphalt Paving &amp; Maintenance Services</h2>
          <p className="lead">Full-service asphalt paving and pavement maintenance for homeowners, businesses, property managers, HOAs, churches, and commercial properties across {PRIMARY_MARKET}.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 32 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 32, borderLeft: "4px solid var(--amber)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: 12 }}>{s.icon} {s.title}</h3>
                <p style={{ color: "#666" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" style={{ background: "var(--light-gray)" }}>
        <div className="container">
          <h2>Charlotte Metro &amp; Carolinas Service Areas</h2>
          <p className="lead">Dedicated local pages help customers and search engines understand exactly where {BUSINESS_NAME} works.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 32 }}>
            {CITIES.map(c => (
              <Link key={c.slug} to={`/${c.slug}`} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 8, padding: 20, textDecoration: "none", color: "var(--text)", transition: "all 0.2s", display: "block" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                <h3 style={{ fontSize: "1rem", color: "var(--black)", marginBottom: 4 }}>{c.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "#888" }}>{c.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--black)" }}>
        <div className="container">
          <h2 style={{ color: "var(--white)" }}>What Google Needs from the Business Profile</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: 24 }}>
            The website is structured for local SEO, but the Google Business Profile still needs exact, verified business details. After you log in, match the profile's name, phone, website, hours, categories, services, service areas, and photos to this site.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {GOOGLE_BUSINESS_CHECKLIST.map(item => (
              <div key={item} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: 18, color: "rgba(255,255,255,0.76)" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" style={{ background: "var(--light-gray)" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 style={{ textAlign: "center" }}>Request a Free Asphalt Estimate</h2>
          <p className="lead" style={{ textAlign: "center" }}>Commercial or residential, send the property location and project details for asphalt paving, sealcoating, resurfacing, or repair.</p>
          <QuoteForm />
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2>Frequently Asked Questions</h2>
          <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
            {FAQS.map(faq => (
              <div key={faq.question} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 24 }}>
                <h3 style={{ marginBottom: 8, fontSize: "1.1rem" }}>{faq.question}</h3>
                <p style={{ color: "#555" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--amber)", textAlign: "center", padding: "80px 24px" }}>
        <div className="container">
          <h2 style={{ color: "var(--black)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: 16 }}>Ready to Quote Your Asphalt Project?</h2>
          <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "1.1rem", marginBottom: 36 }}>Tell {BUSINESS_NAME} where the property is, what condition the pavement is in, and what you want fixed or installed.</p>
          <a href={CONTACT_HREF} className="btn-dark">{CONTACT_LABEL}</a>
        </div>
      </section>
    </>
  );
}
