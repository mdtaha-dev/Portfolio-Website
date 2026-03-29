export default function Navbar() {
    return (
        <header
            style={{
                position: "fixed", top: 0, width: "100%", zIndex: 50,
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "16px 24px",
                background: "rgba(0,0,0,0.9)",
                backdropFilter: "blur(4px)",
                borderBottom: "1px solid #fff",
                fontFamily: "'Space Mono', monospace",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "0.6875rem",
            }}
        >
            <div style={{ fontWeight: 700, fontSize: "1.125rem", letterSpacing: "-0.05em" }}>
                &gt; TERMINAL_V.01
            </div>
            <nav className="nav-links mobile-hidden" style={{ display: "none", gap: 32 }}>
                {["work", "about", "contact"].map((s, i) => (
                    <a key={s} href={`#${s}`} className={`nav-link${i === 0 ? " active" : ""}`}>
                        &gt; {s.toUpperCase()}
                    </a>
                ))}
            </nav>
            <div className="desktop-only" style={{ fontSize: "0.6rem", color: "#888", letterSpacing: "0.1em" }}>
                LAT: 37.7749° N / LONG: 122.4194° W
            </div>
        </header>
    );
}