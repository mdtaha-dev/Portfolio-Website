import "./Home.css";
import skills from "../data/skills";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message broadcast initiated.");
    };

    return (
        <div className="terminal-root">
            <div className="noise-overlay" />
            <div className="dot-grid" style={{ position: "fixed", inset: 0, pointerEvents: "none" }} />

            <Navbar />

            <main>
                {/* Hero */}
                <section
                    style={{
                        position: "relative", minHeight: "100vh",
                        display: "flex", flexDirection: "column",
                        justifyContent: "center", alignItems: "center",
                        padding: "0 24px", overflow: "hidden",
                        paddingTop: 80,
                    }}
                >
                    <div className="orbital-ring" style={{ width: 600, height: 600, top: "50%", left: "50%" }} />
                    <div className="orbital-ring" style={{ width: 900, height: 900, top: "50%", left: "50%", opacity: 0.5 }} />

                    <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
                        <p style={{ color: "#888", letterSpacing: "0.4em", fontSize: "0.6875rem", marginBottom: 16, textTransform: "uppercase" }}>
                            System.Initialize (User: Dev_Designer)
                        </p>
                        <h1 style={{ fontSize: "clamp(3rem, 10vw, 6rem)", fontWeight: 700, letterSpacing: "-0.05em", marginBottom: 24, textTransform: "uppercase" }}>
                            Mohammed Taha
                        </h1>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: "clamp(1rem, 3vw, 1.5rem)", marginBottom: 48 }}>
                            <span style={{ fontWeight: 300, textTransform: "uppercase", letterSpacing: "-0.025em" }}>
                                FULL-STACK DEVELOPER | Cybersecurity Enthusiast
                            </span>
                            <span className="cursor-blink">█</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
                            <a href="#work" className="hero-btn-primary">[ EXPLORE ARCHIVE ]</a>
                            <a href="#contact" className="hero-btn-secondary">
                                <span className="material-symbols-outlined" style={{ marginRight: 8 }}>terminal</span>
                                Establish Connection
                            </a>
                        </div>
                    </div>

                    <div style={{ position: "absolute", bottom: 40, left: 24, fontSize: "0.6rem", color: "#888", letterSpacing: "0.1em", lineHeight: 1.8 }}>
                        DATA_STREAM: ACTIVE<br />
                        UPTIME: 99.99%<br />
                        ENCRYPTION: AES-256
                    </div>
                </section>

                <div style={{ width: "100%", height: 1, background: "#fff", opacity: 0.2 }} />

                {/* About */}
                <section id="about" style={{ padding: "6rem 24px" }}>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 700, textTransform: "uppercase", marginBottom: 64, letterSpacing: "-0.025em" }}>
                        &gt; ABOUT_ME
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 64, alignItems: "start" }}>
                        <div>
                            <p style={{ color: "#888", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>
                                Biography.txt
                            </p>
                            <p style={{ fontSize: "1.125rem", lineHeight: 1.625, marginBottom: 16 }}>
                                I'm Mohammed Taha, a final-year BCA student at the Indian Institute of Business Management, Patna, with hands-on experience in full-stack development and AI engineering.
                            </p>
                            <p style={{ color: "#888", lineHeight: 1.625, marginBottom: 24 }}>
                                Outside of development, I bring four years of freelance video editing experience and a genuine interest in how AI tools are reshaping creative workflows. I am currently looking for internship or entry-level opportunities in full-stack development or AI engineering where I can contribute meaningfully from day one.
                            </p>
                            <div style={{ paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: 48 }}>
                                {[["5+", "Deployments"], ["04", "Specializations"], ["00", "Failed_Logs"]].map(([v, l]) => (
                                    <div key={l}>
                                        <span style={{ display: "block", fontWeight: 700, fontSize: "1.25rem" }}>{v}</span>
                                        <span style={{ color: "#888", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ position: "relative", maxWidth: 300 }}>
                            <div className="portrait-corner-tl" />
                            <div className="portrait-corner-br" />
                            <div className="portrait-wrapper">
                                <img
                                    alt="Portrait"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt-7kwkjy2AttWjDWexfymkn-9fYg10mAz4e7IlL5VKlVnhOYQOljmgi__ILzhTub0ExaBJLrazMqLKKLm8e2WulcQvKqYnnaGCE8uivQPIwiLZaY-RItjSP9-A6x6nAs3Apl0Kli9L5RgTUBeNUhdAhVRdmb8E3faBiynJjejiBIFP39DkGEoFJhbEfti6mCkgiCJfsczECctjejLkgToRXvoMuscA_ROjw0-lH0HejS3BS8VJj3EaP-hN7SSHExLRsB--FZ2sDg"
                                    style={{ filter: "grayscale(100%) brightness(75%) contrast(125%)", width: "100%", maxWidth: 260, objectFit: "cover", aspectRatio: "1/1", display: "block" }}
                                />
                            </div>
                            <div style={{ marginTop: 16, fontSize: "0.6rem", color: "#888", textAlign: "right", letterSpacing: "0.2em" }}>
                                REF_ID: PORTRAIT_V1.JPG [4.2MB]
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section
                    id="work"
                    style={{ padding: "6rem 24px", background: "rgba(19,19,19,0.3)", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, gap: 16, flexWrap: "wrap" }}>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.025em" }}>
                            &gt; PROJECTS
                        </h2>
                        <span style={{ color: "#888", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                            Viewing 01-0{projects.length} of 0{projects.length}
                        </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.2)" }}>
                        {projects.map((p) => (
                            <div key={p.id} className="project-card">
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
                                    <span style={{ color: "#888", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                                        Project.{p.id}
                                    </span>
                                    <span className="material-symbols-outlined proj-arrow">north_east</span>
                                </div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, textTransform: "uppercase", marginBottom: 16, letterSpacing: "-0.025em" }}>
                                    {p.title}
                                </h3>
                                <p style={{ color: "#888", fontSize: "0.875rem", marginBottom: 32, lineHeight: 1.625 }}>
                                    {p.desc}
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {p.tags.map((t) => (
                                        <span key={t} className="proj-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section style={{ padding: "6rem 24px" }}>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 700, textTransform: "uppercase", marginBottom: 64, letterSpacing: "-0.025em" }}>
                        &gt; CORE_COMPETENCIES
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", columnGap: 48, rowGap: 32, maxWidth: 896 }}>
                        {skills.map((s) => (
                            <div key={s.id} className="skill-item">
                                <span style={{ display: "block", color: "#888", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                                    {s.id}
                                </span>
                                <span className="skill-name" style={{ fontSize: "1.25rem", fontWeight: 700, display: "inline-block", transition: "transform 0.1s" }}>
                                    {s.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" style={{ padding: "6rem 24px", background: "#131313" }}>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 700, textTransform: "uppercase", marginBottom: 64, letterSpacing: "-0.025em" }}>
                        &gt; ESTABLISH_LINK
                    </h2>
                    <div style={{ maxWidth: 672, border: "1px solid rgba(255,255,255,0.2)", padding: 32 }}>
                        <div style={{ marginBottom: 32, fontSize: "0.875rem" }}>
                            <p style={{ color: "#888", marginBottom: 8 }}>visitor@portfolio:~$ ping -c 1 dev_designer</p>
                            <p style={{ marginBottom: 8 }}>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.045 ms</p>
                            <p style={{ color: "#888" }}>visitor@portfolio:~$ contact --mode active</p>
                        </div>
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                            {[
                                { label: "Subject_Identity", key: "name", placeholder: "NAME", type: "text" },
                                { label: "Transmission_Frequency", key: "email", placeholder: "EMAIL_ADDRESS", type: "email" },
                            ].map(({ label, key, placeholder, type }) => (
                                <div key={key}>
                                    <label style={{ fontSize: "0.6rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                                        {label}
                                    </label>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #fff", paddingBottom: 8 }}>
                                        <span style={{ color: "#888", whiteSpace: "nowrap", fontSize: "0.875rem" }}>visitor@portfolio:~$</span>
                                        <input
                                            type={type}
                                            className="contact-input"
                                            placeholder={placeholder}
                                            value={form[key]}
                                            onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div>
                                <label style={{ fontSize: "0.6rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                                    Data_Packet
                                </label>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, borderBottom: "1px solid #fff", paddingBottom: 8 }}>
                                    <span style={{ color: "#888", whiteSpace: "nowrap", marginTop: 4, fontSize: "0.875rem" }}>visitor@portfolio:~$</span>
                                    <textarea
                                        className="contact-textarea"
                                        placeholder="MESSAGE_CONTENT"
                                        rows={4}
                                        value={form.message}
                                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="submit-btn">[ BROADCAST_MESSAGE ]</button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Side labels */}
            <div className="desktop-only" style={{ position: "fixed", top: "50%", right: 24, transform: "rotate(90deg)", transformOrigin: "right center", pointerEvents: "none" }}>
                <span style={{ fontSize: "0.5rem", letterSpacing: "0.8em", color: "#888", textTransform: "uppercase", whiteSpace: "nowrap", opacity: 0.5 }}>
                    CRITICAL_INTERFACE_LAYER // SECTOR_07
                </span>
            </div>
            <div className="desktop-only" style={{ position: "fixed", top: "50%", left: 24, transform: "rotate(-90deg)", transformOrigin: "left center", pointerEvents: "none" }}>
                <span style={{ fontSize: "0.5rem", letterSpacing: "0.8em", color: "#888", textTransform: "uppercase", whiteSpace: "nowrap", opacity: 0.5 }}>
                    MANUAL_OVERRIDE_ACTIVE // USER_01
                </span>
            </div>
        </div>
    );
}