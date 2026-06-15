import React, { useEffect, useRef } from 'react';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');

  .cs-root {
    font-family: 'Inter', sans-serif;
    background: #f8fafc;
    color: #0f172a;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 1.5rem;
  }

  /* ── Soft decorative blobs ── */
  .cs-blob {
    position: fixed;
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
    z-index: 0;
  }
  .cs-blob-1 {
    width: 520px; height: 520px;
    background: rgba(249,115,22,0.10);
    top: -160px; right: -120px;
  }
  .cs-blob-2 {
    width: 420px; height: 420px;
    background: rgba(251,191,36,0.08);
    bottom: -120px; left: -120px;
  }
  .cs-blob-3 {
    width: 300px; height: 300px;
    background: rgba(249,115,22,0.06);
    top: 50%; left: 35%;
    transform: translate(-50%,-50%);
  }

  /* ── Canvas ── */
  .cs-canvas {
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }

  /* ── Content layers above canvas ── */
  .cs-header,
  .cs-hero,
  .cs-footer {
    position: relative;
    z-index: 10;
  }

  /* ── Header ── */
  .cs-header {
    width: 100%;
    max-width: 960px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: csFadeDown 0.7s ease both;
  }
  .cs-logo {
    font-size: 1.6rem;
    font-weight: 900;
    color: #f97316;
    letter-spacing: -0.5px;
  }
  .cs-logo-sub {
    color: #64748b;
    font-weight: 400;
    font-size: 1.2rem;
  }
  .cs-badge {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 100px;
    padding: 0.38rem 0.9rem;
    font-size: 0.72rem;
    font-weight: 700;
    color: #64748b;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }
  .cs-badge-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #f97316;
    animation: csPulse 2s ease infinite;
  }
  @keyframes csPulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.45; transform:scale(0.8); }
  }

  /* ── Hero ── */
  .cs-hero {
    width: 100%;
    max-width: 780px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;
    animation: csFadeUp 0.8s ease 0.15s both;
  }

  .cs-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #f97316;
    padding: 0.45rem 1.1rem;
    background: #fff7ed;
    border: 1px solid #fed7aa;
    border-radius: 100px;
  }
  .cs-sun-icon {
    width: 13px; height: 13px;
    animation: csSpin 12s linear infinite;
  }
  @keyframes csSpin { to { transform: rotate(360deg); } }

  .cs-headline {
    font-size: clamp(2.6rem, 7.5vw, 5rem);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -2px;
    color: #0f172a;
  }
  .cs-highlight {
    background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cs-divider {
    width: 52px; height: 3px;
    background: linear-gradient(90deg, #f97316, #fbbf24);
    border-radius: 100px;
  }

  .cs-subtext {
    font-size: clamp(0.95rem, 2.2vw, 1.1rem);
    font-weight: 400;
    color: #64748b;
    max-width: 500px;
    line-height: 1.75;
  }

  /* Contact chip */
  .cs-contact {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.7rem 1.4rem;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 100px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    font-size: 0.85rem;
    font-weight: 600;
    color: #334155;
    text-decoration: none;
    transition: box-shadow 0.25s, border-color 0.25s, transform 0.2s;
  }
  .cs-contact:hover {
    border-color: #fdba74;
    box-shadow: 0 4px 20px rgba(249,115,22,0.15);
    transform: translateY(-1px);
    color: #f97316;
  }
  .cs-contact svg { flex-shrink: 0; }

  /* ── Footer ── */
  .cs-footer {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    animation: csFadeUp 0.8s ease 0.4s both;
  }
  .cs-copy {
    font-size: 0.75rem;
    color: #94a3b8;
    font-weight: 400;
  }
  .cs-dev-name {
    color: #f97316;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s;
  }
  .cs-dev-name:hover { color: #ea580c; }

  /* ── Animations ── */
  @keyframes csFadeUp {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes csFadeDown {
    from { opacity:0; transform:translateY(-16px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ── Responsive ── */
  @media (max-width: 520px) {
    .cs-headline { letter-spacing: -1px; }
  }
`;

const ComingSoon = () => {
  const canvasRef = useRef(null);

  /* ── Subtle light particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    const rand = (a, b) => a + Math.random() * (b - a);
    const COUNT = 35;

    const particles = Array.from({ length: COUNT }, () => {
      const p = {};
      const reset = () => {
        p.x = rand(0, W);
        p.y = rand(0, H);
        p.r = rand(1.2, 3);
        p.vx = rand(-0.15, 0.15);
        p.vy = rand(-0.4, -0.1);
        p.alpha = rand(0.06, 0.22);
        p.hue = rand(22, 42);
        p.reset = reset;
      };
      reset();
      return p;
    });

    let raf;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.alpha -= 0.0005;
        if (p.y < -8 || p.alpha <= 0) p.reset();
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.hue},88%,55%)`;
        ctx.shadowColor = `hsl(${p.hue},88%,55%)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      });
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <div className="cs-root">
      <style>{css}</style>

      {/* Blobs */}
      <div className="cs-blob cs-blob-1" aria-hidden="true" />
      <div className="cs-blob cs-blob-2" aria-hidden="true" />
      <div className="cs-blob cs-blob-3" aria-hidden="true" />

      {/* Particles */}
      <canvas ref={canvasRef} className="cs-canvas" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="cs-header">
        <span className="cs-logo">
          CTone<span className="cs-logo-sub"> Solar</span>
        </span>
        <div className="cs-badge">
          <span className="cs-badge-dot" />
          Coming Soon
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="cs-hero" id="main-content">

        <div className="cs-eyebrow">
          <svg className="cs-sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" />
            <line x1="16.95" y1="16.95" x2="19.78" y2="19.78" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="19.78" x2="7.05" y2="16.95" />
            <line x1="16.95" y1="7.05" x2="19.78" y2="4.22" />
          </svg>
          Clean Energy · Solar Solutions
        </div>

        <h1 className="cs-headline">
          Something<br />
          <span className="cs-highlight">Powerful</span><br />
          is Coming.
        </h1>

        <div className="cs-divider" />

        <p className="cs-subtext">
          We're crafting a smarter, cleaner future with premium solar energy
          solutions for homes, businesses &amp; industries.
          <br />Our website is launching soon — stay tuned.
        </p>

        {/* Simple contact link */}
        <a href="mailto:ctonesolarpower@gmail.com" className="cs-contact">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          ctonesolarpower@gmail.com
        </a>

      </main>

      {/* ── Footer ── */}
      <footer className="cs-footer">
        <p className="cs-copy">
          &copy; {new Date().getFullYear()} CTone Solar. All rights reserved.
          &nbsp;&middot;&nbsp;
          Developed by{' '}
          <a
            href="https://www.visiontechx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-dev-name"
          >
            Vision TechX
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ComingSoon;
