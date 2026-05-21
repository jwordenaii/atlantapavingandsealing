import { Link } from "react-router-dom";
import { PHONE, PHONE_HREF, CITIES, DOMAIN } from "../data/cities";

const topCities = ["Charlotte", "Rock Hill", "Fort Mill", "Indian Land", "Concord", "Huntersville", "Mooresville", "Gastonia"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", color: "rgba(255,255,255,0.6)", padding: "48px 24px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, maxWidth: 1100, margin: "0 auto 40px" }}>
        <div>
          <h4 style={{ color: "var(--amber)", marginBottom: 16, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 1 }}>
            Carolina Blacktop
          </h4>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8 }}>
            Professional asphalt paving and sealing serving Charlotte, NC, Rock Hill, SC, and the greater Carolinas metro.
          </p>
          <p style={{ marginTop: 12, color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            Licensed NC &amp; SC Contractor · Fully Insured
          </p>
        </div>
        <div>
          <h4 style={{ color: "var(--amber)", marginBottom: 16, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 1 }}>Services</h4>
          {["Commercial Parking Lots","Residential Driveways","Asphalt Sealcoating","Crack Filling & Repair","Parking Lot Striping","HOA & Subdivision Paving"].map(s => (
            <Link key={s} to="/#services" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8, display: "block", textDecoration: "none" }}
              onMouseEnter={e => e.target.style.color="var(--amber)"} onMouseLeave={e => e.target.style.color="rgba(255,255,255,0.6)"}>
              {s}
            </Link>
          ))}
        </div>
        <div>
          <h4 style={{ color: "var(--amber)", marginBottom: 16, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 1 }}>Service Areas</h4>
          {topCities.map(name => {
            const city = CITIES.find(c => c.name === name);
            return city ? (
              <Link key={name} to={`/${city.slug}`} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8, display: "block", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color="var(--amber)"} onMouseLeave={e => e.target.style.color="rgba(255,255,255,0.6)"}>
                {name}, {city.state}
              </Link>
            ) : null;
          })}
        </div>
        <div>
          <h4 style={{ color: "var(--amber)", marginBottom: 16, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 1 }}>Contact</h4>
          <a href={PHONE_HREF} style={{ color: "var(--amber)", fontSize: "1rem", lineHeight: 1.8, display: "block", textDecoration: "none", fontWeight: "bold" }}>
            {PHONE}
          </a>
          <p style={{ marginTop: 12, color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            Mon–Fri 7am–6pm<br />Sat 7am–2pm<br />Emergency: Call anytime
          </p>
          <p style={{ marginTop: 12, color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
            Serving Charlotte metro,<br />Rock Hill, Fort Mill,<br />Indian Land &amp; all of York County
          </p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", maxWidth: 1100, margin: "0 auto" }}>
        <p>© {new Date().getFullYear()} Carolina Blacktop · Serving Charlotte NC &amp; Carolinas · Licensed &amp; Insured · <a href={DOMAIN} style={{ color: "rgba(255,255,255,0.4)" }}>carolinablacktop.com</a></p>
      </div>
    </footer>
  );
}
