import { Link } from "react-router-dom";
import { PHONE, PHONE_HREF, SERVICES, CITIES } from "../data/cities";
import QuoteForm from "../components/QuoteForm";

const ncCities = CITIES.filter(c => c.state === "NC");
const scCities = CITIES.filter(c => c.state === "SC");

const FAQ_ITEMS = [
  {
    q: "Do you serve both North Carolina and South Carolina?",
    a: "Yes — Carolina Blacktop is licensed in both NC and SC. We serve Charlotte and the entire Mecklenburg County metro, plus Rock Hill, Fort Mill, Indian Land, York, Clover, Lake Wylie, and Tega Cay in South Carolina's York and Lancaster counties.",
  },
  {
    q: "How much does asphalt paving cost in Charlotte, NC?",
    a: "Residential driveways in the Charlotte area typically run $3–$6 per square foot depending on base conditions, thickness, and access. Commercial parking lots vary based on scope. We provide free, detailed written estimates — call (704) 707-5050 or submit our online form.",
  },
  {
    q: "How long does asphalt paving last in the Carolinas?",
    a: "Properly installed asphalt in the Carolinas lasts 20–30 years. Sealcoating every 3–5 years, crack filling as needed, and prompt pothole repair can significantly extend pavement life. The freeze-thaw cycles in the Charlotte area make proactive maintenance especially valuable.",
  },
  {
    q: "Do you do sealcoating and crack repair, or just new paving?",
    a: "We handle the full spectrum — new asphalt, full resurfacing, sealcoating, hot-pour crack filling, pothole patching, and parking lot striping. Many of our clients start with sealcoating and end up scheduling a full replacement. We'll give you an honest assessment.",
  },
  {
    q: "Are you licensed for commercial paving in Charlotte, NC?",
    a: "Yes — Carolina Blacktop holds active contractor licenses in both North Carolina and South Carolina. We are fully insured for commercial and residential paving projects of any size.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 60%, #0f0f0f 100%)",
        color: "var(--white)",
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(245,166,35,0.03) 40px, rgba(245,166,35,0.03) 80px)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "var(--amber)", color: "var(--black)", padding: "6px 16px", borderRadius: 20, fontSize: "0.85rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: 24 }}>
            📍 Charlotte, NC &amp; Greater Carolinas
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16, lineHeight: 1.2 }}>
            Charlotte's Asphalt Paving<br /><span style={{ color: "var(--amber)" }}>Experts — NC &amp; SC</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.8)", maxWidth: 640, margin: "0 auto 32px" }}>
            Commercial parking lots, residential driveways, sealcoating, and crack repair. Serving Charlotte NC, Rock Hill SC, Fort Mill, Indian Land, and the full Carolinas metro. Free estimates.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={PHONE_HREF} className="btn-primary">📞 Get a Free Estimate</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "var(--amber)", padding: "16px 24px", display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
        {["✓ Licensed NC & SC Contractor","✓ Commercial & Residential","✓ Charlotte Metro & York County SC","✓ Free Written Estimates"].map(t => (
          <span key={t} style={{ color: "var(--black)", fontWeight: "bold", fontSize: "0.9rem" }}>{t}</span>
        ))}
      </div>

      {/* WHY CAROLINA BLACKTOP */}
      <section style={{ background: "linear-gradient(135deg, #1a2a1a 0%, #0f1a0f 100%)", color: "white", padding: "64px 24px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: 16 }}>Built for the Carolinas</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: 720, margin: "0 auto 40px" }}>
            The Charlotte region's climate — hot, humid summers and freeze-thaw winter cycles — is uniquely demanding on asphalt. Carolina Blacktop uses mix designs and installation practices matched to our specific conditions. We're not a national chain. We live here. We pave here.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, maxWidth: 860, margin: "0 auto" }}>
            {[
              ["NC + SC", "Dual Licensed"],
              ["Charlotte Metro", "Primary Market"],
              ["York County SC", "Rock Hill · Fort Mill · Indian Land"],
              ["Free Estimates", "Written & Detailed"],
            ].map(([num, lbl]) => (
              <div key={lbl} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: 24 }}>
                <span style={{ fontSize: "1.6rem", fontWeight: "bold", color: "var(--amber)", display: "block", marginBottom: 6 }}>{num}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <h2>Asphalt Paving &amp; Sealing Services</h2>
          <p className="lead">Full-service paving and sealing for commercial and residential clients throughout Charlotte, NC and the Carolinas metro.</p>
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

      {/* NC LOCATIONS */}
      <section id="locations" style={{ background: "var(--light-gray)" }}>
        <div className="container">
          <h2>North Carolina Service Areas</h2>
          <p className="lead">Serving Charlotte and surrounding Mecklenburg, Cabarrus, Gaston, Iredell, and Union County communities.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14, marginTop: 28 }}>
            {ncCities.map(c => (
              <Link key={c.slug} to={`/${c.slug}`} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 8, padding: 18, textDecoration: "none", color: "var(--text)", transition: "all 0.2s", display: "block" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                <h3 style={{ fontSize: "1rem", color: "var(--black)", marginBottom: 4 }}>{c.name}, NC</h3>
                <p style={{ fontSize: "0.82rem", color: "#888" }}>{c.county}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ marginTop: 48 }}>South Carolina Service Areas</h2>
          <p className="lead">Serving Rock Hill, Fort Mill, Indian Land, York, Clover, Lake Wylie, and Tega Cay in York &amp; Lancaster County, SC.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14, marginTop: 28 }}>
            {scCities.map(c => (
              <Link key={c.slug} to={`/${c.slug}`} style={{ background: "var(--white)", border: "2px solid var(--border)", borderRadius: 8, padding: 18, textDecoration: "none", color: "var(--text)", transition: "all 0.2s", display: "block" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                <h3 style={{ fontSize: "1rem", color: "var(--black)", marginBottom: 4 }}>{c.name}, SC</h3>
                <p style={{ fontSize: "0.82rem", color: "#888" }}>{c.county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: "var(--black)" }}>
        <div className="container">
          <h2 style={{ color: "var(--white)" }}>Charlotte's Paving Contractor — NC &amp; SC Licensed</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: 20 }}>
            Carolina Blacktop is Charlotte's asphalt paving specialist — serving both sides of the state line. From South End commercial parking lots to Fort Mill residential driveways to Rock Hill shopping centers, we bring the same precision and accountability to every project.
          </p>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            We are licensed contractors in both North Carolina and South Carolina. Fully insured. Free written estimates. Call {PHONE}.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={PHONE_HREF} className="btn-primary">📞 Call for Free Estimate</a>
            <a href="#quote" className="btn-outline">Online Quote Form</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "var(--light-gray)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
          <p className="lead" style={{ textAlign: "center" }}>Common questions about asphalt paving in Charlotte, NC and the Carolinas.</p>
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 8, padding: "0" }}>
                <summary style={{ padding: "20px 24px", cursor: "pointer", fontWeight: "bold", fontSize: "1rem", color: "var(--black)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {item.q}
                  <span style={{ color: "var(--amber)", fontSize: "1.4rem", flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <div style={{ padding: "0 24px 20px", color: "#555", lineHeight: 1.8 }}>{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 style={{ textAlign: "center" }}>Get a Free Estimate</h2>
          <p className="lead" style={{ textAlign: "center" }}>Commercial or residential — free detailed written estimates for all Charlotte NC and Carolinas paving projects.</p>
          <QuoteForm />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--amber)", textAlign: "center", padding: "80px 24px" }}>
        <div className="container">
          <h2 style={{ color: "var(--black)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: 16 }}>Ready to Get Your Project Done?</h2>
          <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "1.1rem", marginBottom: 36 }}>Charlotte, NC · Rock Hill, SC · Fort Mill, SC · Indian Land, SC · and throughout the Carolinas metro</p>
          <a href={PHONE_HREF} className="btn-dark">📞 Call {PHONE}</a>
        </div>
      </section>
    </>
  );
}
