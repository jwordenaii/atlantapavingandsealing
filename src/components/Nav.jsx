import { Link } from "react-router-dom";
import { PHONE, PHONE_HREF, BUSINESS_NAME } from "../data/cities";

export default function Nav() {
  return (
    <nav style={{
      background: "var(--black)",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 70,
      position: "sticky",
      top: 0,
      zIndex: 100,
      borderBottom: "3px solid var(--amber)",
    }}>
      <Link to="/" style={{
        color: "var(--white)",
        fontSize: "1.15rem",
        fontWeight: "bold",
        textDecoration: "none",
        letterSpacing: "0.5px",
      }}>
        <span style={{ color: "var(--amber)" }}>Carolina</span> Blacktop
      </Link>
      <a href={PHONE_HREF} style={{
        color: "var(--black)",
        textDecoration: "none",
        fontWeight: "bold",
        background: "var(--amber)",
        padding: "10px 20px",
        borderRadius: 4,
        fontSize: "0.95rem",
      }}>
        📞 {PHONE}
      </a>
    </nav>
  );
}
