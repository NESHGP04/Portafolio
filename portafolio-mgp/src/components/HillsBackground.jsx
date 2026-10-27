// Fondo vectorial: colinas, flores amarillas y nubes. Escala a cualquier pantalla sin perder nitidez.
import '@styles/Background.css';

const HillsBackground = () => (
  <svg
    className="hills-bg"
    viewBox="0 0 1600 900"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#2b6aa3" />
        <stop offset="0.5" stopColor="#4a8dbf" />
        <stop offset="1" stopColor="#86b6d6" />
      </linearGradient>

      <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#5b8a4a" />
        <stop offset="1" stopColor="#6f9a3f" />
      </linearGradient>

      <linearGradient id="hillRight" x1="0.2" y1="1" x2="0.9" y2="0">
        <stop offset="0" stopColor="#97ad3b" />
        <stop offset="1" stopColor="#6f9140" />
      </linearGradient>

      <linearGradient id="hillLeft" x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0" stopColor="#8fa04a" />
        <stop offset="0.6" stopColor="#a3b13c" />
        <stop offset="1" stopColor="#b6bf33" />
      </linearGradient>

      <radialGradient id="cloudShade" cx="0.5" cy="0.35" r="0.7">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.65" stopColor="#e6ebf2" />
        <stop offset="1" stopColor="#b9c4d6" />
      </radialGradient>

      <filter id="cloudBlur" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="26" />
      </filter>

      <filter id="wispBlur" x="-30%" y="-60%" width="160%" height="220%">
        <feGaussianBlur stdDeviation="14" />
      </filter>

      {/* Ruido fino para dar textura de pasto */}
      <filter id="grassNoise" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="3" seed="7" />
        <feColorMatrix
          type="matrix"
          values="0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0 0 0 0 1"
        />
      </filter>

      {/* Manchas de flores amarillas: bordes irregulares + puntitos */}
      <filter id="flowers" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed="3" result="warp" />
        <feDisplacementMap in="SourceGraphic" in2="warp" scale="110" xChannelSelector="R" yChannelSelector="G" result="blob" />
        <feTurbulence type="fractalNoise" baseFrequency="0.16" numOctaves="2" seed="11" result="speck" />
        <feColorMatrix
          in="speck"
          type="matrix"
          values="0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 6 -2.4"
          result="speckMask"
        />
        <feComposite in="blob" in2="speckMask" operator="in" result="dots" />
        <feGaussianBlur in="dots" stdDeviation="1.4" result="dotsSoft" />
        <feGaussianBlur in="blob" stdDeviation="14" result="glow" />
        <feComponentTransfer in="glow" result="glowFaint">
          <feFuncA type="linear" slope="0.5" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="glowFaint" />
          <feMergeNode in="dotsSoft" />
        </feMerge>
      </filter>

      <clipPath id="hillsClip">
        <path d="M0 400 C300 330 600 300 900 360 C1200 420 1450 330 1600 380 V900 H0 Z" />
      </clipPath>
    </defs>

    {/* Cielo */}
    <rect width="1600" height="900" fill="url(#sky)" />

    {/* Nubes */}
    <g filter="url(#cloudBlur)">
      <ellipse cx="800" cy="150" rx="190" ry="130" fill="url(#cloudShade)" />
      <ellipse cx="700" cy="230" rx="170" ry="100" fill="url(#cloudShade)" />
      <ellipse cx="900" cy="250" rx="190" ry="95" fill="url(#cloudShade)" />
      <ellipse cx="820" cy="320" rx="260" ry="70" fill="#e9eef5" />
    </g>
    <g filter="url(#wispBlur)" opacity="0.85">
      <ellipse cx="250" cy="170" rx="170" ry="26" fill="#ffffff" />
      <ellipse cx="1380" cy="120" rx="200" ry="30" fill="#ffffff" />
      <ellipse cx="1290" cy="250" rx="150" ry="20" fill="#ffffff" opacity="0.7" />
    </g>

    {/* Colinas */}
    <path
      d="M0 400 C300 330 600 300 900 360 C1200 420 1450 330 1600 380 V900 H0 Z"
      fill="url(#hillFar)"
    />

    <path
      d="M380 900 C620 640 960 470 1230 395 C1380 352 1500 330 1600 335 V900 Z"
      fill="url(#hillRight)"
    />

    <path
      d="M0 300 C220 350 430 540 720 900 H0 Z"
      fill="url(#hillLeft)"
    />

    {/* Flores amarillas (recortadas dentro de las colinas) */}
    <g clipPath="url(#hillsClip)" filter="url(#flowers)" fill="#e8e22c">
      <path d="M1000 470 C1150 430 1350 420 1600 400 V620 C1400 640 1150 640 960 700 Z" />
      <path d="M0 560 C150 600 300 700 420 900 H0 Z" opacity="0.9" />
      <path d="M560 780 C700 720 900 700 1080 760 L1160 900 H620 Z" opacity="0.85" />
      <path d="M1250 640 C1380 620 1500 640 1600 700 V900 H1300 Z" opacity="0.9" />
    </g>

    {/* Textura de pasto */}
    <g clipPath="url(#hillsClip)" style={{ mixBlendMode: 'soft-light' }} opacity="0.55">
      <rect width="1600" height="900" filter="url(#grassNoise)" />
    </g>

    {/* Sombra suave para que el texto blanco se lea */}
    <rect width="1600" height="900" fill="#0b2a1a" opacity="0.2" />
  </svg>
);

export default HillsBackground;
