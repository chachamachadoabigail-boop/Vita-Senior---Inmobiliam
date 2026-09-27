import React, { useState } from 'react';
import { 
  Building2, 
  Trees, 
  HeartPulse, 
  Coffee, 
  Sparkles, 
  MapPin, 
  Maximize2, 
  Eye, 
  Users, 
  Car, 
  Sun,
  ShieldCheck,
  CheckCircle2,
  Image as ImageIcon,
  Layers
} from 'lucide-react';
import { SmartProjectImage } from './SmartProjectImage';

interface Hotspot {
  id: string;
  name: string;
  badge: string;
  x: string; // percentage from left
  y: string; // percentage from top
  description: string;
}

export const ConjuntoRenderHero: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'render' | 'interactive'>('render');

  const hotspots: Hotspot[] = [
    {
      id: 'club-social',
      name: 'Club Social & Comedor Central',
      badge: '170 m² Huella',
      x: '66%',
      y: '48%',
      description: 'Edificio central comunitario con terraza exterior de madera, pérgola, salón social, cafetería y comedor asistido.'
    },
    {
      id: 'huertos',
      name: 'Huertos Terapéuticos & Pérgola',
      badge: 'Zonas Biofílicas',
      x: '50%',
      y: '62%',
      description: 'Bancales elevados de flores y plantas medicinales adaptados a la altura del adulto mayor, con senderos nivelados y bancas de descanso.'
    },
    {
      id: 'villas-norte',
      name: 'Villas Residenciales Tipo Suite',
      badge: '8 Unidades (40 m² c/u)',
      x: '20%',
      y: '68%',
      description: 'Villas unifamiliares en una sola planta con techos oscuros contemporáneos, amplios ventanales, terrazas privadas y cero gradas.'
    },
    {
      id: 'parqueos',
      name: 'Acceso & Parqueaderos Ecológicos',
      badge: 'Retiro Frontal 5,00 m',
      x: '76%',
      y: '88%',
      description: 'Área de estacionamiento vehicular y garita de acceso controlado 24/7 con adoquinado y franjas de jardinería.'
    },
    {
      id: 'entorno',
      name: 'Paisaje Andino de Tisaleo',
      badge: 'Aire Puro & Tranquilidad',
      x: '64%',
      y: '14%',
      description: 'Vistas panorámicas hacia el Volcán Tungurahua y los valles andinos. Clima templado ideal para la salud respiratoria.'
    }
  ];

  return (
    <div className="w-full bg-[#0a192f] rounded-3xl border-2 border-amber-500/40 shadow-2xl overflow-hidden relative">
      
      {/* Top Bar Banner with View Switcher */}
      <div className="bg-[#071324] px-4 sm:px-6 py-4 border-b border-blue-900/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-sm sm:text-base font-extrabold text-white font-display">
            Diseño Completo del Conjunto Vita Senior
          </span>
          <span className="text-xs bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-400/40">
            Tisaleo, Tungurahua
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-blue-900 self-start md:self-auto">
          <button
            onClick={() => setViewMode('render')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'render'
                ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Imagen Render (render.jpg/png)</span>
          </button>
          <button
            onClick={() => setViewMode('interactive')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'interactive'
                ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Esquema 3D & Puntos Clave</span>
          </button>
        </div>
      </div>

      {/* Main Canvas View: Either Smart Project Image (render.*) or Interactive 3D SVG */}
      {viewMode === 'render' ? (
        <div className="p-3 sm:p-4 bg-slate-950">
          <SmartProjectImage
            imageKey="render"
            title="Render Arquitectónico del Conjunto Vita Senior"
            subtitle="Tisaleo, Tungurahua • 8 Villas, Club Social 170 m² y 80% Áreas Verdes"
            aspectRatio="aspect-[16/9] min-h-[380px] sm:min-h-[500px]"
          />
        </div>
      ) : (
        /* Realistic 3D Architectural Scene Rendering (Vector & Rich Illustrated Landscape matching the image) */
        <div className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[500px] bg-gradient-to-b from-[#87CEEB] via-[#9ad0ec] to-[#5a9c4e] overflow-hidden select-none">
          
          {/* SVG Detailed Architectural Masterpiece */}
          <svg 
            viewBox="0 0 1600 900"  
          className="w-full h-full object-cover" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Sky gradient */}
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7ec8e3" />
              <stop offset="40%" stopColor="#b5e2fa" />
              <stop offset="100%" stopColor="#d8f3dc" />
            </linearGradient>

            {/* Distant mountain gradient */}
            <linearGradient id="mountDistant" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8395a7" />
              <stop offset="50%" stopColor="#576574" />
              <stop offset="100%" stopColor="#404040" />
            </linearGradient>

            {/* Volcano Chimborazo/Tungurahua gradient */}
            <linearGradient id="volcanoGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a69bd" />
              <stop offset="25%" stopColor="#60a3bc" />
              <stop offset="100%" stopColor="#38ada9" />
            </linearGradient>

            {/* Hillside agricultural terraces gradient */}
            <linearGradient id="hillsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#788a44" />
              <stop offset="50%" stopColor="#556b2f" />
              <stop offset="100%" stopColor="#3b5323" />
            </linearGradient>

            {/* Compound lush grass lawn */}
            <linearGradient id="compoundLawn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#407a34" />
              <stop offset="60%" stopColor="#336628" />
              <stop offset="100%" stopColor="#254d1d" />
            </linearGradient>

            {/* Villa modern dark roof */}
            <linearGradient id="villaRoof" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#222f3e" />
              <stop offset="50%" stopColor="#1b263b" />
              <stop offset="100%" stopColor="#0d1b2a" />
            </linearGradient>

            {/* Concrete wall finish */}
            <linearGradient id="concreteWall" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d2d7df" />
              <stop offset="100%" stopColor="#b0b8c4" />
            </linearGradient>

            {/* Wooden sun deck */}
            <linearGradient id="woodDeck" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c59b6d" />
              <stop offset="50%" stopColor="#b38758" />
              <stop offset="100%" stopColor="#966f44" />
            </linearGradient>

            {/* Stone walkway */}
            <linearGradient id="walkwayStone" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f1f2f6" />
              <stop offset="100%" stopColor="#ced6e0" />
            </linearGradient>

            {/* Asphalt parking */}
            <linearGradient id="asphalt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#57606f" />
              <stop offset="100%" stopColor="#2f3542" />
            </linearGradient>
          </defs>

          {/* 1. SKY */}
          <rect width="1600" height="900" fill="url(#skyGrad)" />
          
          {/* Soft Clouds */}
          <path d="M 120,80 Q 180,40 250,70 Q 320,50 380,85 Q 420,110 370,130 Q 300,140 220,135 Q 140,140 100,110 Z" fill="#ffffff" opacity="0.65" />
          <path d="M 850,60 Q 920,20 1000,50 Q 1080,30 1140,75 Q 1180,100 1120,120 Q 1040,125 960,120 Q 880,125 830,95 Z" fill="#ffffff" opacity="0.6" />

          {/* 2. MAJESTIC ANDEAN MOUNTAINS WITH SNOW PEAKS */}
          {/* Distant background mountains */}
          <polygon points="-50,380 150,210 380,320 600,190 780,290 1050,160 1300,310 1500,220 1650,380 1650,550 -50,550" fill="url(#mountDistant)" opacity="0.7" />
          
          {/* Snow peaks on Tungurahua volcano */}
          <polygon points="1050,160 970,250 1130,250" fill="#ffffff" opacity="0.9" />
          <polygon points="600,190 550,245 650,245" fill="#ffffff" opacity="0.85" />
          <polygon points="150,210 100,260 200,260" fill="#ffffff" opacity="0.8" />

          {/* Terraced Agricultural Foothills */}
          <path d="M -50,420 Q 200,340 500,390 T 1100,350 T 1650,430 L 1650,580 L -50,580 Z" fill="url(#hillsGrad)" />
          <path d="M -50,470 Q 280,410 650,440 T 1250,420 T 1650,480 L 1650,650 L -50,650 Z" fill="#4d662b" />
          
          {/* Valley Town Settlements in Distance (Tisaleo/Ambato lights & houses) */}
          <g opacity="0.55">
            <rect x="750" y="320" width="8" height="6" fill="#f8f9fa" />
            <rect x="780" y="325" width="10" height="7" fill="#ffeaa7" />
            <rect x="820" y="318" width="9" height="5" fill="#ffffff" />
            <rect x="860" y="328" width="12" height="6" fill="#f8f9fa" />
            <rect x="910" y="322" width="10" height="8" fill="#ffeaa7" />
            <rect x="950" y="330" width="8" height="6" fill="#ffffff" />
          </g>

          {/* 3. COMPOUND GROUND (2.800 m² Plateau with 80% Green) */}
          <path d="M -50,540 C 300,500 800,510 1650,520 L 1650,950 L -50,950 Z" fill="url(#compoundLawn)" />

          {/* Surrounding Perimeter Trees and Dense Foliage */}
          <g fill="#1e4620">
            <ellipse cx="60" cy="520" rx="90" ry="70" />
            <ellipse cx="180" cy="510" rx="80" ry="60" />
            <ellipse cx="1480" cy="490" rx="100" ry="80" />
            <ellipse cx="1580" cy="510" rx="90" ry="70" />
            <ellipse cx="20" cy="650" rx="100" ry="90" />
            <ellipse cx="1590" cy="720" rx="110" ry="90" />
          </g>

          {/* 4. CURVED SMOOTH STONE ACCESSIBLE WALKWAYS (ZERO STEPS) */}
          <path 
            d="M 1250,880 C 1100,820 950,750 900,680 C 850,610 820,540 750,500 C 650,460 550,500 480,560 C 420,620 450,720 540,770 C 630,810 750,820 920,800 C 1050,790 1150,840 1250,880 Z" 
            fill="url(#walkwayStone)" 
            stroke="#a4b0be" 
            strokeWidth="3"
          />
          {/* Pathway connecting central circle to villas */}
          <path d="M 480,560 C 400,550 320,560 250,590" fill="none" stroke="url(#walkwayStone)" strokeWidth="48" strokeLinecap="round" />
          <path d="M 540,770 C 440,780 340,790 280,820" fill="none" stroke="url(#walkwayStone)" strokeWidth="48" strokeLinecap="round" />
          <path d="M 900,680 C 980,670 1080,660 1150,680" fill="none" stroke="url(#walkwayStone)" strokeWidth="48" strokeLinecap="round" />
          <path d="M 750,500 C 760,450 780,420 850,430" fill="none" stroke="url(#walkwayStone)" strokeWidth="42" strokeLinecap="round" />

          {/* 5. CENTRAL BIO-GARDENS & PERGOLA PLAZA (RAISED BEDS) */}
          <g transform="translate(620, 520)">
            {/* Wooden Pergola Structure */}
            <rect x="130" y="40" width="16" height="70" fill="#6d4c41" />
            <rect x="230" y="40" width="16" height="70" fill="#6d4c41" />
            <rect x="110" y="30" width="160" height="14" fill="#8d6e63" rx="4" />
            <line x1="130" y1="25" x2="130" y2="45" stroke="#5d4037" strokeWidth="6" />
            <line x1="160" y1="25" x2="160" y2="45" stroke="#5d4037" strokeWidth="6" />
            <line x1="190" y1="25" x2="190" y2="45" stroke="#5d4037" strokeWidth="6" />
            <line x1="220" y1="25" x2="220" y2="45" stroke="#5d4037" strokeWidth="6" />
            <line x1="250" y1="25" x2="250" y2="45" stroke="#5d4037" strokeWidth="6" />

            {/* Geometric Raised Planter Beds */}
            {/* Row 1 */}
            <rect x="30" y="60" width="70" height="32" rx="6" fill="#a1887f" stroke="#5d4037" strokeWidth="3" />
            <rect x="34" y="64" width="62" height="24" rx="4" fill="#2e7d32" />
            <circle cx="50" cy="76" r="5" fill="#fbc531" />
            <circle cx="70" cy="76" r="6" fill="#e84118" />

            <rect x="270" y="60" width="70" height="32" rx="6" fill="#a1887f" stroke="#5d4037" strokeWidth="3" />
            <rect x="274" y="64" width="62" height="24" rx="4" fill="#2e7d32" />
            <circle cx="290" cy="76" r="6" fill="#9c88ff" />
            <circle cx="315" cy="76" r="5" fill="#4cd137" />

            {/* Row 2 */}
            <rect x="60" y="110" width="80" height="36" rx="6" fill="#a1887f" stroke="#5d4037" strokeWidth="3" />
            <rect x="64" y="114" width="72" height="28" rx="4" fill="#388e3c" />
            <circle cx="85" cy="128" r="6" fill="#e84118" />
            <circle cx="115" cy="128" r="7" fill="#fbc531" />

            <rect x="230" y="110" width="80" height="36" rx="6" fill="#a1887f" stroke="#5d4037" strokeWidth="3" />
            <rect x="234" y="114" width="72" height="28" rx="4" fill="#388e3c" />
            <circle cx="255" cy="128" r="7" fill="#44bd32" />
            <circle cx="285" cy="128" r="6" fill="#e84118" />

            {/* Benches */}
            <rect x="140" y="125" width="45" height="10" rx="3" fill="#8d6e63" />
            <rect x="200" y="125" width="45" height="10" rx="3" fill="#8d6e63" />
          </g>

          {/* 6. CENTRAL COMMUNITY SOCIAL CLUB (170 m² Main Building) */}
          <g transform="translate(860, 410)">
            {/* Shadow */}
            <polygon points="10,120 380,120 360,140 -10,140" fill="#000000" opacity="0.25" />
            
            {/* Concrete Structure */}
            <polygon points="20,40 340,30 350,110 30,120" fill="url(#concreteWall)" />
            {/* Dark Modern Roof */}
            <polygon points="0,35 360,20 340,5 0,15" fill="url(#villaRoof)" />
            
            {/* Glass Wall Windows with Reflections */}
            <rect x="40" y="55" width="90" height="55" fill="#74b9ff" opacity="0.65" stroke="#2d3436" strokeWidth="3" />
            <rect x="145" y="55" width="100" height="55" fill="#74b9ff" opacity="0.65" stroke="#2d3436" strokeWidth="3" />
            
            {/* Outdoor Wooden Deck Terrace */}
            <polygon points="260,60 380,55 420,135 280,140" fill="url(#woodDeck)" stroke="#6d4c41" strokeWidth="2" />
            {/* Pergola Roof over deck */}
            <polygon points="270,30 400,25 410,50 280,55" fill="#2d3436" opacity="0.8" />
            
            {/* Outdoor Tables and Chairs on Terrace */}
            <circle cx="340" cy="95" r="14" fill="#ffffff" stroke="#636e72" strokeWidth="2" />
            <circle cx="320" cy="95" r="5" fill="#2d3436" />
            <circle cx="360" cy="95" r="5" fill="#2d3436" />
            <circle cx="340" cy="78" r="5" fill="#2d3436" />
            <circle cx="340" cy="112" r="5" fill="#2d3436" />
          </g>

          {/* 7. THE 8 MODERN SENIOR RESIDENTIAL VILLAS (SINGLE FLOOR, 40 m²) */}
          
          {/* Villa 1: Front Left Foreground (Largest, high detail) */}
          <g transform="translate(130, 560)">
            <polygon points="10,190 280,170 290,210 20,230" fill="#000000" opacity="0.3" />
            <polygon points="20,60 260,40 270,180 30,200" fill="url(#concreteWall)" />
            <polygon points="0,55 280,30 260,5 0,25" fill="url(#villaRoof)" />
            {/* Wooden Porch Deck */}
            <polygon points="140,120 270,110 280,180 150,190" fill="url(#woodDeck)" />
            {/* Sliding Glass Doors */}
            <rect x="50" y="90" width="75" height="95" fill="#81ecec" opacity="0.75" stroke="#2d3436" strokeWidth="4" />
            <rect x="160" y="100" width="90" height="75" fill="#81ecec" opacity="0.75" stroke="#2d3436" strokeWidth="4" />
            {/* Front Planter */}
            <rect x="40" y="195" width="100" height="15" rx="4" fill="#a1887f" />
            <circle cx="60" cy="195" r="8" fill="#e84118" />
            <circle cx="85" cy="195" r="9" fill="#fbc531" />
            <circle cx="110" cy="195" r="8" fill="#4cd137" />
          </g>

          {/* Villa 2: Middle Left */}
          <g transform="translate(140, 460)">
            <polygon points="15,45 200,30 210,130 25,145" fill="url(#concreteWall)" />
            <polygon points="0,40 220,20 200,5 0,20" fill="url(#villaRoof)" />
            <rect x="40" y="70" width="60" height="65" fill="#81ecec" opacity="0.7" stroke="#2d3436" strokeWidth="3" />
            <polygon points="110,80 200,75 205,125 115,135" fill="url(#woodDeck)" />
          </g>

          {/* Villa 3: Far Left Upper */}
          <g transform="translate(300, 400)">
            <polygon points="10,35 160,25 170,105 20,115" fill="url(#concreteWall)" />
            <polygon points="0,30 180,15 165,0 0,15" fill="url(#villaRoof)" />
            <rect x="30" y="55" width="50" height="50" fill="#81ecec" opacity="0.65" stroke="#2d3436" strokeWidth="2.5" />
          </g>

          {/* Villa 4: Back Left */}
          <g transform="translate(500, 360)">
            <polygon points="10,30 140,20 150,90 20,100" fill="url(#concreteWall)" />
            <polygon points="0,25 155,10 140,0 0,10" fill="url(#villaRoof)" />
            <rect x="25" y="45" width="45" height="45" fill="#81ecec" opacity="0.65" stroke="#2d3436" strokeWidth="2" />
          </g>

          {/* Villa 5: Back Center-Right */}
          <g transform="translate(710, 350)">
            <polygon points="10,30 135,20 145,85 20,95" fill="url(#concreteWall)" />
            <polygon points="0,25 150,10 135,0 0,10" fill="url(#villaRoof)" />
            <rect x="25" y="45" width="40" height="40" fill="#81ecec" opacity="0.65" stroke="#2d3436" strokeWidth="2" />
          </g>

          {/* Villa 6: Right Middle */}
          <g transform="translate(1160, 470)">
            <polygon points="15,45 210,30 220,140 25,155" fill="url(#concreteWall)" />
            <polygon points="0,40 230,20 210,5 0,20" fill="url(#villaRoof)" />
            <rect x="40" y="70" width="70" height="70" fill="#81ecec" opacity="0.7" stroke="#2d3436" strokeWidth="3" />
            <polygon points="120,80 210,75 215,135 125,145" fill="url(#woodDeck)" />
          </g>

          {/* Villa 7: Front Right Lower (High detail) */}
          <g transform="translate(1110, 560)">
            <polygon points="10,190 280,170 290,210 20,230" fill="#000000" opacity="0.3" />
            <polygon points="20,60 260,40 270,180 30,200" fill="url(#concreteWall)" />
            <polygon points="0,55 280,30 260,5 0,25" fill="url(#villaRoof)" />
            <polygon points="40,110 170,100 180,180 50,190" fill="url(#woodDeck)" />
            <rect x="175" y="90" width="80" height="90" fill="#81ecec" opacity="0.75" stroke="#2d3436" strokeWidth="4" />
          </g>

          {/* 8. PAVED ECOLOGICAL PARKING LOT & CARS (Bottom Right) */}
          <g transform="translate(980, 720)">
            {/* Asphalt Lot */}
            <polygon points="10,50 350,20 400,180 40,210" fill="url(#asphalt)" stroke="#747d8c" strokeWidth="2" />
            {/* White Parking Stall Lines */}
            <line x1="110" y1="50" x2="130" y2="130" stroke="#ffffff" strokeWidth="3" strokeDasharray="8,4" />
            <line x1="180" y1="45" x2="200" y2="125" stroke="#ffffff" strokeWidth="3" strokeDasharray="8,4" />
            <line x1="250" y1="40" x2="270" y2="120" stroke="#ffffff" strokeWidth="3" strokeDasharray="8,4" />
            <line x1="320" y1="35" x2="340" y2="115" stroke="#ffffff" strokeWidth="3" strokeDasharray="8,4" />

            {/* Parked Cars (3D perspective top-down) */}
            {/* Silver Car 1 */}
            <g transform="translate(60, 65)">
              <rect x="0" y="0" width="55" height="30" rx="8" fill="#dcdde1" stroke="#2f3542" strokeWidth="2" />
              <rect x="12" y="5" width="28" height="20" rx="4" fill="#718093" />
            </g>
            {/* White SUV Car 2 */}
            <g transform="translate(130, 58)">
              <rect x="0" y="0" width="60" height="32" rx="8" fill="#ffffff" stroke="#2f3542" strokeWidth="2" />
              <rect x="14" y="6" width="30" height="20" rx="4" fill="#2f3542" />
            </g>
            {/* Dark Blue Car 3 */}
            <g transform="translate(200, 50)">
              <rect x="0" y="0" width="56" height="30" rx="8" fill="#192a56" stroke="#000000" strokeWidth="2" />
              <rect x="12" y="5" width="28" height="20" rx="4" fill="#40739e" />
            </g>
            {/* Grey Sedan Car 4 */}
            <g transform="translate(270, 42)">
              <rect x="0" y="0" width="54" height="28" rx="8" fill="#7f8c8d" stroke="#2c3e50" strokeWidth="2" />
              <rect x="12" y="5" width="26" height="18" rx="4" fill="#34495e" />
            </g>
          </g>

          {/* 9. STROLLING ELDERLY RESIDENTS (Sense of Peaceful Community Life) */}
          <g fill="#2d3436">
            {/* Couple strolling on left path */}
            <circle cx="490" cy="540" r="5" fill="#fbc531" />
            <path d="M 488,545 L 492,562" stroke="#2f3542" strokeWidth="4" />
            <circle cx="505" cy="542" r="5" fill="#e84118" />
            <path d="M 503,547 L 507,562" stroke="#2f3542" strokeWidth="4" />

            {/* Resident walking near pergola */}
            <circle cx="630" cy="680" r="6" fill="#00a8ff" />
            <path d="M 628,686 L 632,708" stroke="#192a56" strokeWidth="4" />
            <circle cx="645" cy="682" r="6" fill="#9c88ff" />
            <path d="M 643,688 L 647,708" stroke="#192a56" strokeWidth="4" />
          </g>
        </svg>

        {/* INTERACTIVE HOTSPOTS OVERLAY */}
        {hotspots.map((spot) => {
          const isSelected = activeHotspot === spot.id;

          return (
            <div
              key={spot.id}
              style={{ left: spot.x, top: spot.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
            >
              <button
                onClick={() => setActiveHotspot(isSelected ? null : spot.id)}
                className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 shadow-xl cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 scale-125 ring-4 ring-amber-300/80 animate-bounce'
                    : 'bg-[#0a192f]/90 text-amber-300 border-2 border-amber-400/90 hover:scale-110 hover:bg-amber-400 hover:text-slate-950'
                }`}
                title={spot.name}
              >
                <Sparkles className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
              </button>

              {/* Tooltip Card when clicked or hovered */}
              {isSelected && (
                <div className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-64 sm:w-72 bg-[#071324]/95 backdrop-blur-md text-white p-4 rounded-2xl border-2 border-amber-400 shadow-2xl z-30 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between gap-2 border-b border-blue-900 pb-2 mb-2">
                    <span className="text-xs font-bold text-amber-300 font-display">
                      {spot.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                      {spot.badge}
                    </span>
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    {spot.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Legend Overlay at bottom left */}
        <div className="absolute bottom-4 left-4 z-10 bg-[#071324]/90 backdrop-blur-md p-3 rounded-2xl border border-amber-500/40 text-xs text-white max-w-xs hidden sm:block shadow-lg">
          <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
            <Eye className="w-4 h-4" />
            <span>Perspectiva Panorámica Real</span>
          </div>
          <p className="text-[11px] text-blue-200 leading-tight">
            Haz clic en los puntos dorados para explorar el Club Social, las 8 villas y los huertos terapéuticos de Vita Senior.
          </p>
        </div>

      </div>
      )}

      {/* Bottom Features Strip */}
      <div className="bg-[#071324] p-4 sm:p-5 border-t border-blue-900/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-white">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span><strong>8 Villas en 1 sola planta</strong> (Cero gradas)</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span><strong>Club Social de 170 m²</strong> con comedor</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span><strong>Enfermería</strong> y Domótica integrada</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span><strong>80% de naturaleza</strong> (2.240 m² libres)</span>
        </div>
      </div>

    </div>
  );
};
