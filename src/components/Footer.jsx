export default function Footer() {
    return (
        <footer
            style={{
                padding: "48px 32px",
                display: "flex", flexWrap: "wrap",
                justifyContent: "space-between", alignItems: "center",
                gap: 16,
                background: "#000",
                borderTop: "1px solid #fff",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6875rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
            }}
        >
            <div>© 2026 MOHAMMED_TAHA_AFZAL_HASHMI [ROOT@PORTFOLIO]</div>
            <div style={{ display: "flex", gap: 48 }}>
                {[
                    { label: "GITHUB", url: "https://github.com/mdtaha-dev" },
                    { label: "LINKEDIN", url: "https://www.linkedin.com/in/mohammedtahaa/" },
                ].map((l) => (
                    <a key={l.label} href={l.url} className="footer-link" target="_blank" rel="noreferrer">
                        {l.label}
                    </a>
                ))}
            </div>
            <div style={{ color: "rgba(136,136,136,0.5)" }}>SYSTEM_VER: 1.0.4-STABLE</div>
        </footer>

    );
}
