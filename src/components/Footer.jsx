import { Link } from "react-router-dom";
import { BUSINESS_NAME, CONTACT_HREF, CONTACT_LABEL, CITIES } from "../data/cities";

const topCities = ["Charlotte", "Rock Hill", "York", "Indian Land", "Fort Mill", "Matthews", "Pineville", "Huntersville"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", color: "rgba(255,255,255,0.6)", padding: "48px 24px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, maxWidth: 1100, margin: "0 auto 40px" }}>
        <div>
          <h4 style={{ color: "var(--amber)", marginBottom: 16, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 1 }}>
            {BUSINESS_NAME}
          </h4>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8 }}>
            Asphalt paving, driveway paving, parking lot paving, sealcoating, resurfacing, and asphalt repair for Charlotte and nearby Carolinas service areas.
          </p>
          <p style={{ marginTop: 12, color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            Built for local SEO and ready for verified Google Business Profile details.
          </p>
        </div>
        <div>
          <h4 style={{ color: "var(--amber)", marginBottom: 16, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 1 }}>Services</h4>
          {["Commercial Parking Lots", "Residential Driveways", "Asphalt Sealcoating", "Crack Filling & Repair", "Milling & Resurfacing"].map(s => (
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
                {name}
              </Link>
            ) : null;
          })}
        </div>
        <div>
          <h4 style={{ color: "var(--amber)", marginBottom: 16, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 1 }}>Contact</h4>
          <a href={CONTACT_HREF} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8, display: "block", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color="var(--amber)"} onMouseLeave={e => e.target.style.color="rgba(255,255,255,0.6)"}>
            {CONTACT_LABEL}
          </a>
          <p style={{ marginTop: 12, color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            Add verified phone, hours, and email after checking Google Business Profile.
          </p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", maxWidth: 1100, margin: "0 auto" }}>
        <p>© {new Date().getFullYear()} {BUSINESS_NAME} · Serving Charlotte NC, Rock Hill SC, York SC, Indian Land SC, and nearby Carolinas communities · All Rights Reserved</p>
      </div>
    </footer>
  );
}
