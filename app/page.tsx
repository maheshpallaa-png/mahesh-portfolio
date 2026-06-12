"use client";

import { useState, useEffect } from "react";

const skills = [
  { label: "Python Development", icon: "🐍", items: ["FastAPI", "Django", "Flask", "Automation", "Data Scripts"] },
  { label: "Graphic Design", icon: "🎨", items: ["UI/UX", "Branding", "Print", "Social Media", "Illustration"] },
  { label: "Video Editing", icon: "🎬", items: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics", "YouTube"] },
];

const projects = [
  {
    title: "Healthcare Partner Platform",
    desc: "SaaS membership management system for Telangana with agent hierarchies, commissions, and OTP login.",
    tags: ["FastAPI", "SQLAlchemy", "Tailwind CSS", "Alpine.js"],
    type: "Python App",
  },
  {
    title: "Brand Identity System",
    desc: "Complete visual identity including logo, color palette, typography, and social media templates.",
    tags: ["Branding", "Illustrator", "Print"],
    type: "Design",
  },
  {
    title: "Telecaller Dashboard",
    desc: "Gamified outbound calling dashboard with real-time performance analytics and leaderboards.",
    tags: ["FastAPI", "Jinja2", "Charts"],
    type: "Python App",
  },
  {
    title: "Promotional Video Series",
    desc: "Product launch videos with motion graphics, voiceover sync, and color-graded cinematics.",
    tags: ["Premiere Pro", "After Effects", "Motion"],
    type: "Video",
  },
];

const typeRoles = ["Python Developer", "Graphic Designer", "Video Editor"];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = typeRoles[roleIndex];
    let i = displayed.length;

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % typeRoles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: "#0d0d0d", color: "#e8e8e8", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px", backdropFilter: "blur(12px)", background: "rgba(13,13,13,0.85)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "0.04em", color: "#fff" }}>
          MP<span style={{ color: "#7c6aff" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          {["About", "Skills", "Work", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", letterSpacing: "0.03em", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#aaa")}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 48px 80px", maxWidth: "960px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", letterSpacing: "0.18em", color: "#7c6aff", textTransform: "uppercase", marginBottom: "24px", fontWeight: 600 }}>
          Available for freelance
        </p>
        <h1 style={{ fontSize: "clamp(42px, 7vw, 82px)", fontWeight: 900, lineHeight: 1.05, marginBottom: "24px", letterSpacing: "-0.03em" }}>
          Hi, I'm{" "}
          <span style={{ background: "linear-gradient(135deg, #7c6aff 0%, #c084fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Mahesh Palla
          </span>
        </h1>
        <div style={{ fontSize: "clamp(20px, 3.5vw, 32px)", fontWeight: 600, color: "#888", marginBottom: "32px", minHeight: "44px" }}>
          <span style={{ color: "#e8e8e8" }}>{displayed}</span>
          <span style={{ borderRight: "2px solid #7c6aff", marginLeft: "2px", animation: "blink 1s step-end infinite" }} />
        </div>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#888", maxWidth: "560px", marginBottom: "48px" }}>
          I build full-stack Python applications, craft clean visual identities, and edit videos that tell the right story — all from Hyderabad, India.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#work" style={{ padding: "14px 32px", background: "linear-gradient(135deg, #7c6aff, #c084fc)", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "15px", letterSpacing: "0.02em" }}>
            See My Work
          </a>
          <a href="#contact" style={{ padding: "14px 32px", border: "1px solid rgba(255,255,255,0.15)", color: "#e8e8e8", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
            Get in Touch
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "80px 48px", maxWidth: "960px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.18em", color: "#7c6aff", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>What I Do</p>
        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "48px", letterSpacing: "-0.02em" }}>Skills & Expertise</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {skills.map((skill) => (
            <div key={skill.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(124,106,255,0.5)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ fontSize: "32px", marginBottom: "14px" }}>{skill.icon}</div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "14px" }}>{skill.label}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skill.items.map((item) => (
                  <span key={item} style={{ fontSize: "12px", padding: "4px 10px", background: "rgba(124,106,255,0.12)", color: "#c4b8ff", borderRadius: "4px", fontWeight: 500 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" style={{ padding: "80px 48px", maxWidth: "960px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.18em", color: "#7c6aff", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>Portfolio</p>
        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "48px", letterSpacing: "-0.02em" }}>Selected Work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {projects.map((project) => (
            <div key={project.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px", cursor: "pointer", transition: "border-color 0.2s, transform 0.2s" }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(124,106,255,0.5)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c6aff", background: "rgba(124,106,255,0.12)", padding: "3px 10px", borderRadius: "4px" }}>
                {project.type}
              </span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "14px 0 10px" }}>{project.title}</h3>
              <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.65, marginBottom: "18px" }}>{project.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: "12px", padding: "3px 9px", border: "1px solid rgba(255,255,255,0.1)", color: "#aaa", borderRadius: "4px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 48px 120px", maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.18em", color: "#7c6aff", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>Let's Work Together</p>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "18px" }}>
          Have a project in mind?
        </h2>
        <p style={{ fontSize: "17px", color: "#888", marginBottom: "40px" }}>
          I'm open to freelance projects — Python apps, design work, or video editing.
        </p>
        <a href="mailto:mahesh@example.com" style={{ display: "inline-block", padding: "16px 40px", background: "linear-gradient(135deg, #7c6aff, #c084fc)", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "16px", letterSpacing: "0.02em" }}>
          mahesh@example.com
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ color: "#555", fontSize: "13px" }}>© 2026 Mahesh Palla</span>
        <span style={{ color: "#555", fontSize: "13px" }}>Hyderabad, India</span>
      </footer>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { cursor: pointer; }
      `}</style>
    </div>
  );
}