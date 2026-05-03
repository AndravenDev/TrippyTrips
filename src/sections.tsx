import React from 'react';
import {
  LogoSvg,
  StarBurst,
  TopoPattern,
  Polaroid,
  SceneCanyon,
  SceneCampfire,
  SceneVista,
  SceneLake,
  ScenePines,
} from './svg-art';
import type {
  NavContent,
  HeroContent,
  WhyContent,
  DaysContent,
  GalleryContent,
  FooterContent,
  SceneKey,
} from './content';

/* padding uses CSS custom properties so media-query overrides in index.css apply */
const inner: React.CSSProperties = {
  maxWidth: 1240,
  margin: '0 auto',
  padding: '0 var(--pad-x)',
  position: 'relative',
};

const eyebrowStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  fontFamily: 'DM Mono, monospace',
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--accent-4)',
};

const sceneMap: Record<SceneKey, React.ReactElement> = {
  lake: <SceneLake />,
  pines: <ScenePines />,
  vista: <SceneVista />,
  canyon: <SceneCanyon />,
  campfire: <SceneCampfire />,
};

/* ─── NAV ─── */
export const Nav = ({ content }: { content: NavContent }) => (
  <nav
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'color-mix(in oklab, var(--bg) 88%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1.5px solid color-mix(in oklab, var(--ink) 18%, transparent)',
    }}
  >
    <div
      style={{
        ...inner,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px var(--pad-x)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <LogoSvg size={44} />
        <span className="display" style={{ fontSize: 24, color: 'var(--ink)' }}>
          {content.brand}
        </span>
      </div>
      <div className="nav-links">
        {content.links.map((link) => (
          <a key={link.href} href={link.href} style={{ color: 'var(--ink)', textDecoration: 'none' }}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

/* ─── HERO ─── */
export const Hero = ({ content }: { content: HeroContent }) => (
  <section id="trip" style={{ position: 'relative', width: '100%', overflow: 'hidden', paddingBottom: 0 }}>
    <div style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}>
      <TopoPattern opacity={0.18} />
    </div>
    <div style={{ ...inner, padding: 'clamp(40px, 5vw, 60px) var(--pad-x) 0', position: 'relative', zIndex: 1 }}>
      <div className="hero-grid">
        {/* Left copy */}
        <div>
          <div style={{ ...eyebrowStyle, marginBottom: 22 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent-4)',
                display: 'inline-block',
              }}
            />
            {content.eyebrow}
          </div>
          <h1
            className="display"
            style={{
              fontSize: 'clamp(44px, 7.4vw, 110px)',
              lineHeight: 0.92,
              margin: '0 0 24px',
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
            }}
          >
            {content.titleLine1}
            <br />
            <span style={{ color: 'var(--accent-4)' }}>{content.titleLine2Accent}</span>
            {content.titleLine2Suffix}
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2.4vw, 22px)',
              lineHeight: 1.45,
              color: 'var(--ink-soft)',
              maxWidth: 540,
              margin: '0 0 32px',
            }}
          >
            {content.description}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#days"
              style={{
                border: '2px solid var(--ink)',
                color: 'var(--ink)',
                padding: '14px 24px',
                borderRadius: 999,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 'clamp(15px, 1.6vw, 17px)',
                background: 'transparent',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              {content.cta} <span style={{ fontSize: 20 }}>→</span>
            </a>
          </div>
          {/* Stats */}
          <div
            className="hero-stats"
            style={{
              display: 'flex',
              gap: 36,
              marginTop: 44,
              paddingTop: 24,
              borderTop: '1.5px dashed color-mix(in oklab, var(--ink) 30%, transparent)',
            }}
          >
            {content.stats.map((s, i) => (
              <div key={i}>
                <div className="display" style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', lineHeight: 1, color: 'var(--accent-4)' }}>
                  {s.value}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--ink-soft)',
                    marginTop: 6,
                    textTransform: 'uppercase',
                    letterSpacing: '.08em',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero art — hidden on tablet/mobile via .hero-art CSS class */}
        <div className="hero-art" style={{ position: 'relative', height: 560 }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '4px solid var(--ink)',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '14px 14px 0 var(--accent-4)',
            }}
          >
            <img
              src="https://stroiinfo.com/wp-content/uploads/2020/04/%D0%9F%D0%B0%D0%BC%D0%B5%D1%82%D0%BD%D0%B8%D0%BA%D0%BD%D0%B0%D0%91%D1%83%D0%B7%D0%BB%D1%83%D0%B4%D0%B6%D0%B0_a3429bff1fc97fbba659184eca9160bf.jpg"
              alt="Бузлуджа"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ position: 'absolute', top: -22, right: -22 }}>
            <StarBurst size={88} />
          </div>
          <div style={{ position: 'absolute', bottom: -20, left: -20, transform: 'rotate(-6deg)' }}>
            <div
              style={{
                background: 'var(--paper)',
                border: '3px solid var(--ink)',
                padding: '10px 20px',
                borderRadius: 999,
                fontFamily: 'Caprasimo, serif',
                fontSize: 22,
                boxShadow: '4px 4px 0 var(--ink)',
                whiteSpace: 'nowrap',
              }}
            >
              Let's go!
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Marquee */}
    <div
      style={{
        marginTop: 'clamp(40px, 6vw, 80px)',
        padding: '18px 0',
        background: 'var(--ink)',
        color: 'var(--paper)',
        borderTop: '3px solid var(--ink)',
        borderBottom: '3px solid var(--ink)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: 'clamp(20px, 3vw, 40px)',
          alignItems: 'center',
          animation: 'marquee 60s linear infinite',
          fontFamily: 'Caprasimo, serif',
          fontSize: 'clamp(17px, 2.5vw, 28px)',
        }}
      >
        {Array.from({ length: 6 }).map((_, repeat) => (
          <React.Fragment key={repeat}>
            {content.marquee.map((item, j) => (
              <span key={j} style={item.highlighted ? { color: 'var(--accent-2)' } : {}}>
                {item.text}
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  </section>
);

/* ─── WHY ─── */
export const Why = ({ content }: { content: WhyContent }) => (
  <section
    style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      padding: 'var(--pad-section) 0 calc(var(--pad-section) * 0.5)',
    }}
  >
    <div style={inner}>
      <div className="why-grid">
        <div className="why-sticky" style={{ position: 'sticky', top: 100 }}>
          <div style={{ ...eyebrowStyle, marginBottom: 20 }}>{content.eyebrow}</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 72px)', lineHeight: 1, margin: '0 0 22px' }}>
            {content.heading}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0 }}>
            {content.description}
          </p>
        </div>
        <div className="why-cards">
          {content.cards.map((c, i) => (
            <div
              key={i}
              style={{
                background: 'var(--paper)',
                border: '2.5px solid var(--ink)',
                borderRadius: 20,
                padding: '24px 22px',
                boxShadow: i % 2 ? '6px 6px 0 var(--accent)' : '6px 6px 0 var(--accent-3)',
                transform: i === 1 ? 'rotate(1deg)' : i === 2 ? 'rotate(-1deg)' : 'none',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{c.emoji}</div>
              <h3 className="display" style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', margin: '0 0 8px' }}>
                {c.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── DAY CARD / SCENE sub-components ─── */
interface DayCardProps {
  label: string;
  title: string;
  subtitle: string;
  body: string;
  distance?: string;
  time?: string;
  image?: string;
  tags: string[];
  accent: string;
  side: 'left' | 'right';
}

const DayCard = ({ label, title, subtitle, body, distance, time, image, tags, accent, side }: DayCardProps) => (
  <div
    className={`day-card day-card--${side}`}
    style={{
      background: 'var(--paper)',
      border: '3px solid var(--ink)',
      borderRadius: 20,
      boxShadow: side === 'left' ? '-7px 8px 0 var(--ink)' : '7px 8px 0 var(--ink)',
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
    }}
  >
    {/* text content */}
    <div style={{ flex: 1, minWidth: 0, padding: '24px 26px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, gap: 8, flexWrap: 'wrap' }}>
        <span
          className="mono"
          style={{ background: accent, color: 'var(--ink)', padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600 }}
        >
          {label.toUpperCase()}
        </span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {time && (
            <span className="mono" style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', letterSpacing: '0.05em' }}>
              {time}
            </span>
          )}
          {distance && (
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>
              {distance}
            </span>
          )}
        </div>
      </div>
      <h3 className="display" style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', margin: '6px 0 4px', lineHeight: 1.05 }}>
        {title}
      </h3>
      <div style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--ink-soft)', marginBottom: 12 }}>{subtitle}</div>
      <p style={{ margin: '0 0 14px', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{body}</p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {tags.map((tag, j) => (
          <span
            key={j}
            style={{ fontSize: 12, fontWeight: 500, padding: '4px 10px', border: '1.5px solid var(--ink)', borderRadius: 999 }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* destination photo */}
    {image && (
      <div className="day-card__image" style={{ width: '30%', flexShrink: 0, borderLeft: '3px solid var(--ink)' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    )}
  </div>
);

// const DayScene = ({ sceneKey, accent, caption }: { sceneKey: SceneKey; accent: string; caption: string }) => (
//   <div
//     style={{
//       border: '3px solid var(--ink)',
//       borderRadius: 20,
//       overflow: 'hidden',
//       background: 'var(--ink)',
//       boxShadow: `8px 8px 0 ${accent}`,
//       height: 240,
//       position: 'relative',
//     }}
//   >
//     {sceneMap[sceneKey]}
//     <div
//       className="mono"
//       style={{
//         position: 'absolute',
//         bottom: 12,
//         left: 12,
//         background: 'var(--paper)',
//         color: 'var(--ink)',
//         padding: '4px 10px',
//         borderRadius: 6,
//         fontSize: 12,
//         fontWeight: 500,
//       }}
//     >
//       {caption}
//     </div>
//   </div>
// );

/* ─── DAYS ─── */
export const Days = ({ content }: { content: DaysContent }) => (
  <section id="days" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: 'var(--pad-section) 0' }}>
    <div style={inner}>
      <div style={{ marginBottom: 'clamp(36px, 5vw, 60px)', maxWidth: 700 }}>
        <div style={{ ...eyebrowStyle, marginBottom: 16 }}>{content.eyebrow}</div>
        <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 72px)', lineHeight: 1, margin: '0 0 18px' }}>
          {content.headingNormal}{' '}
          <span style={{ color: 'var(--accent-4)' }}>{content.headingAccent}</span>
        </h2>
        <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0 }}>
          {content.description}
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        {content.items.map((day, i) => (
          <div key={i} className="days-row">
            <div
              className="day-number"
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'var(--ink)',
                color: 'var(--paper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Caprasimo, serif',
                fontSize: 24,
                border: '4px solid var(--accent-2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                marginTop: 4,
              }}
            >
              {i + 1}
            </div>
            <div className="day-col is-card" style={{ flex: 1, minWidth: 0 }}>
              <DayCard {...day} side="right" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── GALLERY ─── */
const galleryLayouts = [
  { rotate: -4, marginTop: 30 },
  { rotate: 2, marginTop: 0 },
  { rotate: -2, marginTop: 40 },
  { rotate: 3, marginTop: 10 },
  { rotate: -3, marginTop: 30 },
];

export const Gallery = ({ content }: { content: GalleryContent }) => (
  <section
    id="gallery"
    style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      padding: 'var(--pad-section) 0 calc(var(--pad-section) * 0.67)',
    }}
  >
    <div style={inner}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(28px, 4vw, 50px)',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div style={{ ...eyebrowStyle, marginBottom: 16 }}>{content.eyebrow}</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 72px)', lineHeight: 1, margin: 0 }}>
            {content.heading}
          </h2>
        </div>
        <div className="mono" style={{ fontSize: 13, color: 'var(--ink-soft)', maxWidth: 320 }}>
          {content.subtitle}
        </div>
      </div>
      {/* grid-template-columns is dynamic; breakpoint overrides use !important in responsive.css */}
      <div
        className="gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
          alignItems: 'start',
        }}
      >
        {content.photos.map((photo, i) => {
          const layout = galleryLayouts[i % galleryLayouts.length];
          return (
            <div key={i} style={{ marginTop: layout.marginTop }}>
              <Polaroid rotate={layout.rotate} caption={photo.caption}>
                {photo.image
                  ? <img src={photo.image} alt={photo.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  : photo.sceneKey ? sceneMap[photo.sceneKey] : null
                }
              </Polaroid>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─── FOOTER ─── */
export const Footer = ({ content }: { content: FooterContent }) => (
  <footer style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '50px 0 30px' }} className="themed">
    <div
      className="footer-inner"
      style={{
        ...inner,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 20,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <LogoSvg size={48} />
        <div>
          <div className="display" style={{ fontSize: 24 }}>
            {content.brand}
          </div>
          <div className="mono" style={{ fontSize: 12, opacity: 0.7 }}>
            {content.tagline}
          </div>
        </div>
      </div>
      <div className="mono" style={{ fontSize: 12, opacity: 0.7 }}>
        {content.copyright}
      </div>
    </div>
  </footer>
);
