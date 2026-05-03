import React from 'react';

export const LogoSvg = ({ size = 44, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 400 400"
    width={size}
    height={size}
    style={{ borderRadius: '50%', display: 'block', flexShrink: 0, ...style }}
  >
    <circle cx="200" cy="200" r="200" fill="#1c2742" />
    <circle cx="200" cy="200" r="164" fill="#ee7a3a" />
    <circle cx="260" cy="160" r="50" fill="#e8b14a" />
    <path d="M40,260 L110,180 L160,230 L220,150 L290,220 L360,180 L360,300 L40,300 Z" fill="#2f6f6e" />
    <path d="M40,290 L100,240 L170,280 L240,230 L310,280 L360,260 L360,320 L40,320 Z" fill="#1c2742" />
  </svg>
);

export const Mountains = ({ style }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 800 360" width="100%" style={style} preserveAspectRatio="none">
    <defs>
      <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--accent-2)" />
        <stop offset=".55" stopColor="var(--accent)" />
        <stop offset="1" stopColor="var(--accent-4)" />
      </linearGradient>
      <linearGradient id="mtn-back" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--accent-3)" stopOpacity=".55" />
        <stop offset="1" stopColor="var(--ink)" stopOpacity=".75" />
      </linearGradient>
      <linearGradient id="mtn-front" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--accent-3)" />
        <stop offset="1" stopColor="var(--ink)" />
      </linearGradient>
    </defs>
    <rect width="800" height="360" fill="url(#sky-grad)" />
    <circle cx="560" cy="170" r="62" fill="var(--accent-2)" opacity={0.95} />
    <circle cx="560" cy="170" r="92" fill="var(--accent-2)" opacity={0.25} />
    <g fill="var(--paper)" opacity={0.75}>
      <ellipse cx="120" cy="80" rx="46" ry="10" />
      <ellipse cx="160" cy="72" rx="34" ry="8" />
      <ellipse cx="660" cy="100" rx="38" ry="8" />
      <ellipse cx="700" cy="92" rx="26" ry="6" />
    </g>
    <path d="M0,260 L80,180 L150,230 L220,160 L300,220 L380,150 L460,210 L540,170 L620,220 L700,180 L800,240 L800,360 L0,360 Z" fill="url(#mtn-back)" />
    <path d="M0,300 L70,240 L140,290 L210,220 L290,280 L370,230 L460,290 L540,250 L630,300 L720,260 L800,300 L800,360 L0,360 Z" fill="url(#mtn-front)" />
    <path d="M210,220 l18,16 l-9,5 l9,5 l-18,4 l-16,-7 l8,-6 z" fill="var(--paper)" opacity={0.9} />
    <path d="M370,230 l18,18 l-10,6 l10,4 l-20,5 l-15,-9 l9,-7 z" fill="var(--paper)" opacity={0.9} />
    <path d="M540,250 l16,14 l-8,5 l9,3 l-18,4 l-14,-6 l8,-6 z" fill="var(--paper)" opacity={0.9} />
  </svg>
);

export const StarBurst = ({
  size = 60,
  color = 'var(--accent-2)',
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg viewBox="-50 -50 100 100" width={size} height={size} style={style}>
    <path
      d="M0,-46 L10,-12 L46,-10 L18,10 L28,44 L0,24 L-28,44 L-18,10 L-46,-10 L-10,-12 Z"
      fill={color}
      stroke="var(--ink)"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);

export const TopoPattern = ({
  style,
  opacity = 0.25,
}: {
  style?: React.CSSProperties;
  opacity?: number;
}) => (
  <svg width="100%" height="100%" style={style} preserveAspectRatio="none">
    <defs>
      <pattern id="topo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="var(--ink)" strokeWidth="1" opacity={opacity}>
          <path d="M0,60 Q30,30 60,60 T120,60" />
          <path d="M0,80 Q30,50 60,80 T120,80" />
          <path d="M0,100 Q30,70 60,100 T120,100" />
          <path d="M0,40 Q30,10 60,40 T120,40" />
          <path d="M0,20 Q30,-10 60,20 T120,20" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#topo)" />
  </svg>
);

export const Hookah = ({ size = 110, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 160" width={size} style={style}>
    <path
      d="M58,8 q-10,8 0,16 q10,8 0,16"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="3"
      strokeLinecap="round"
      opacity={0.5}
    />
    <ellipse cx="50" cy="48" rx="14" ry="6" fill="var(--accent-4)" stroke="var(--ink)" strokeWidth="3" />
    <rect x="44" y="50" width="12" height="10" fill="var(--accent-4)" stroke="var(--ink)" strokeWidth="3" />
    <rect x="46" y="60" width="8" height="50" fill="var(--accent)" stroke="var(--ink)" strokeWidth="3" />
    <ellipse cx="50" cy="130" rx="26" ry="22" fill="var(--accent-2)" stroke="var(--ink)" strokeWidth="3" />
    <ellipse cx="50" cy="124" rx="22" ry="6" fill="var(--accent)" opacity={0.7} />
    <path
      d="M62,90 q 30,10 26,40 q -2,18 -16,16"
      fill="none"
      stroke="var(--accent-4)"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

export const Polaroid = ({
  children,
  rotate = -3,
  style,
  caption,
}: {
  children: React.ReactNode;
  rotate?: number;
  style?: React.CSSProperties;
  caption?: string;
}) => (
  <div
    style={{
      background: 'var(--paper)',
      padding: '14px 14px 68px',
      border: '3px solid var(--ink)',
      boxShadow: '8px 10px 0 var(--ink)',
      transform: `rotate(${rotate}deg)`,
      position: 'relative',
      ...style,
    }}
  >
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        border: '2px solid var(--ink)',
      }}
    >
      {children}
    </div>
    {caption && (
      <div
        className="mono"
        style={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 13,
          color: 'var(--ink)',
          fontWeight: 500,
        }}
      >
        {caption}
      </div>
    )}
  </div>
);

export const SceneCanyon = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="none">
    <defs>
      <linearGradient id="canyon" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--accent-2)" />
        <stop offset="1" stopColor="var(--accent-4)" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#canyon)" />
    <circle cx="150" cy="60" r="22" fill="var(--paper)" opacity={0.9} />
    <path d="M0,140 L40,100 L80,150 L120,90 L160,140 L200,110 L200,200 L0,200 Z" fill="var(--ink)" opacity={0.7} />
    <path d="M0,170 L50,130 L100,170 L150,140 L200,170 L200,200 L0,200 Z" fill="var(--ink)" />
  </svg>
);

export const SceneCampfire = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="none">
    <rect width="200" height="200" fill="var(--ink)" />
    <circle cx="160" cy="40" r="2" fill="var(--paper)" />
    <circle cx="40" cy="50" r="1.5" fill="var(--paper)" />
    <circle cx="100" cy="30" r="2" fill="var(--paper)" />
    <circle cx="180" cy="80" r="1.5" fill="var(--paper)" />
    <circle cx="20" cy="100" r="1.5" fill="var(--paper)" />
    <path
      d="M0,150 L50,120 L100,140 L150,110 L200,140 L200,200 L0,200 Z"
      fill="var(--accent-3)"
      opacity={0.5}
    />
    <path
      d="M100,180 q-20,-30 0,-50 q10,15 0,25 q15,-5 10,20 q-2,8 -10,5 z"
      fill="var(--accent)"
    />
    <path
      d="M100,180 q-10,-20 0,-30 q5,10 0,15 q8,-3 5,12 q-1,4 -5,3 z"
      fill="var(--accent-2)"
    />
    <rect x="80" y="170" width="40" height="6" fill="var(--accent-4)" />
  </svg>
);

export const SceneVista = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="none">
    <defs>
      <linearGradient id="vista" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--accent)" />
        <stop offset="1" stopColor="var(--accent-3)" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#vista)" />
    <circle cx="100" cy="80" r="28" fill="var(--accent-2)" />
    <path
      d="M0,160 L40,110 L80,150 L120,100 L170,150 L200,130 L200,200 L0,200 Z"
      fill="var(--ink)"
      opacity={0.8}
    />
  </svg>
);

export const SceneLake = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="none">
    <rect width="200" height="100" fill="var(--accent-2)" />
    <rect y="100" width="200" height="100" fill="var(--accent-3)" />
    <circle cx="150" cy="40" r="20" fill="var(--paper)" opacity={0.95} />
    <path d="M0,100 L50,70 L100,95 L150,60 L200,95 L200,100 Z" fill="var(--ink)" opacity={0.8} />
    <path
      d="M20,140 q10,-4 20,0 M70,160 q10,-4 20,0 M130,150 q10,-4 20,0 M40,170 q10,-4 20,0"
      fill="none"
      stroke="var(--paper)"
      strokeWidth="2"
      opacity={0.7}
    />
  </svg>
);

export const ScenePines = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="none">
    <rect width="200" height="200" fill="var(--accent-2)" />
    <rect y="120" width="200" height="80" fill="var(--accent-3)" opacity={0.5} />
    {[20, 55, 90, 125, 160].map((x, i) => (
      <g key={i}>
        <path d={`M${x},60 L${x - 18},120 L${x + 18},120 Z`} fill="var(--accent-3)" stroke="var(--ink)" strokeWidth="2" />
        <path d={`M${x},80 L${x - 22},135 L${x + 22},135 Z`} fill="var(--accent-3)" stroke="var(--ink)" strokeWidth="2" />
        <rect x={x - 3} y="135" width="6" height="14" fill="var(--ink)" />
      </g>
    ))}
  </svg>
);
