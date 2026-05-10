import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect, useRef } from 'react';
import { tripContent as content } from './content';
import './responsive.css';
import { Nav, Hero, Days, Gallery, Rsvp, Footer } from './sections';
import { StarBurst } from './svg-art';
import './App.css';

/* ── Parallax background shapes ── */

const PxDot = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 1 1">
    <circle cx=".5" cy=".5" r=".5" fill={color} />
  </svg>
);

const PxTriangle = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 86">
    <polygon points="50,0 100,86 0,86" fill={color} />
  </svg>
);

const PxDiamond = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <polygon points="50,0 100,50 50,100 0,50" fill={color} />
  </svg>
);

const PxCross = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <rect x="42" y="0" width="16" height="100" fill={color} rx="8" />
    <rect x="0" y="42" width="100" height="16" fill={color} rx="8" />
  </svg>
);

// x/y = starting viewport %, sY/sX = drift-per-scrollY-px, r0 = initial rotation, rS = rotation-per-scrollY-px
const BG_ITEMS = [
  { id: 'a', x: '3%',  y: '8%',  sY: 0.04,  sX:  0.005, r0:   0, rS:  0,      shape: <PxDot      size={120} color="var(--accent-3)"  />, opacity: 0.07 },
  { id: 'b', x: '86%', y: '5%',  sY: 0.10,  sX: -0.010, r0:  20, rS:  0.008,  shape: <StarBurst  size={80}  color="var(--accent-2)"  />, opacity: 0.22 },
  { id: 'c', x: '73%', y: '22%', sY: 0.07,  sX:  0.008, r0:   8, rS:  0,      shape: <PxTriangle size={64}  color="var(--accent-4)"  />, opacity: 0.10 },
  { id: 'd', x: '11%', y: '37%', sY: 0.14,  sX:  0.005, r0:   0, rS:  0,      shape: <PxDot      size={44}  color="var(--accent)"    />, opacity: 0.18 },
  { id: 'e', x: '57%', y: '15%', sY: 0.06,  sX: -0.004, r0:   0, rS:  0.005,  shape: <PxCross    size={50}  color="var(--ink)"       />, opacity: 0.07 },
  { id: 'f', x: '91%', y: '44%', sY: 0.11,  sX:  0,     r0:  45, rS:  0.012,  shape: <PxDiamond  size={40}  color="var(--accent-2)"  />, opacity: 0.20 },
  { id: 'g', x: '3%',  y: '62%', sY: 0.08,  sX:  0.006, r0: -12, rS:  0,      shape: <PxTriangle size={78}  color="var(--accent-3)"  />, opacity: 0.09 },
  { id: 'h', x: '44%', y: '51%', sY: 0.17,  sX: -0.010, r0: -20, rS: -0.006,  shape: <StarBurst  size={52}  color="var(--accent)"    />, opacity: 0.14 },
  { id: 'i', x: '77%', y: '67%', sY: 0.05,  sX:  0.004, r0:   0, rS:  0,      shape: <PxDot      size={64}  color="var(--accent-4)"  />, opacity: 0.10 },
  { id: 'j', x: '20%', y: '79%', sY: 0.09,  sX: -0.007, r0:  45, rS:  0.007,  shape: <PxCross    size={42}  color="var(--accent-2)"  />, opacity: 0.13 },
  { id: 'k', x: '51%', y: '87%', sY: 0.03,  sX:  0,     r0:   0, rS:  0,      shape: <PxDot      size={96}  color="var(--accent)"    />, opacity: 0.06 },
  { id: 'l', x: '34%', y: '27%', sY: 0.13,  sX:  0.003, r0: -45, rS:  0.010,  shape: <PxDiamond  size={32}  color="var(--accent-3)"  />, opacity: 0.14 },
];

function ParallaxBg() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {BG_ITEMS.map(item => (
        <div
          key={item.id}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            opacity: item.opacity,
            transform: `translateY(${scrollY * item.sY}px) translateX(${scrollY * item.sX}px) rotate(${item.r0 + scrollY * item.rS}deg)`,
            willChange: 'transform',
          }}
        >
          {item.shape}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <ParallaxBg />
      <Nav content={content.nav} />
      <Hero content={content.hero} />
      <Days content={content.days} />
      {/* <Why content={content.why} /> */}
      <Gallery content={content.gallery} />
      <Rsvp content={content.rsvp} />
      <Footer content={content.footer} />
      <Analytics />
    </>
  );
}

export default App;
