import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Trees,
  HeartPulse,
  Scale,
  TrendingUp,
  Award,
  Keyboard,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECT_DETAILS } from '../data/projectData';
import { ConjuntoRenderHero } from './ConjuntoRenderHero';
import { VillaFloorPlanBlueprint } from './VillaFloorPlanBlueprint';

interface PitchDeckViewProps {
  onOpenCostModal: () => void;
  onOpenEmergencyModal: () => void;
  onOpenDossierModal: () => void;
}

export const PitchDeckView: React.FC<PitchDeckViewProps> = ({
  onOpenCostModal,
  onOpenEmergencyModal,
  onOpenDossierModal,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isExteriorBreakdownOpen, setIsExteriorBreakdownOpen] = useState<boolean>(false);

  // 5 Essential Slides for a clean, peaceful and high-impact 8-minute defense
  const slides = [
    { id: 0, title: 'Triple Impacto' },
    { id: 1, title: 'Modelo del Conjunto' },
    { id: 2, title: 'Prototipo de Villa' },
    { id: 3, title: 'Normativa GAD' },
    { id: 4, title: 'Retorno Financiero' },
  ];

  const paginate = (newDirection: number) => {
    const nextSlide = activeSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setActiveSlide(nextSlide);
    }
  };

  const goToSlide = (idx: number) => {
    if (idx === activeSlide) return;
    setDirection(idx > activeSlide ? 1 : -1);
    setActiveSlide(idx);
  };

  // Keyboard navigation with left/right arrows and spacebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (activeSlide < slides.length - 1) {
          paginate(1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (activeSlide > 0) {
          paginate(-1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, slides.length]);

  // Framer Motion slide transition variants (smooth directional glide with soft blur and scale)
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.985,
      filter: 'blur(4px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.35, ease: 'easeOut' as const },
        scale: { duration: 0.35, ease: 'easeOut' as const },
        filter: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.985,
      filter: 'blur(4px)',
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.22, ease: 'easeIn' as const },
        scale: { duration: 0.22, ease: 'easeIn' as const },
        filter: { duration: 0.18 },
      },
    }),
  };

  // Staggered reveal for internal slide metrics
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring' as const, 
        stiffness: 280, 
        damping: 24 
      } 
    },
  };

  // Progress percentage
  const progressPercent = ((activeSlide + 1) / slides.length) * 100;

  return (
    <div className="space-y-4">
      
      {/* Top Slide Control Bar in Soft Pastel Sage & Slate */}
      <div className="bg-[#f0f6f2] rounded-3xl border border-[#d2e4d8] p-3 sm:p-4 shadow-xs relative overflow-hidden">
        
        {/* Animated Slide Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#2d5a3c] via-[#438a5b] to-[#2d5a3c]"
          initial={false}
          animate={{ width: `${progressPercent}%` }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        />

        <div className="flex flex-col gap-3">
          {/* Upper row: title, pace indicator and arrows */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Slide Counter & Single Slide Name */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <motion.div 
                key={activeSlide}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="w-11 h-11 rounded-2xl bg-[#cbe4d3] text-[#1c4028] flex items-center justify-center font-mono font-black text-base shadow-2xs border border-[#b2d8be]"
              >
                0{activeSlide + 1}
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1a3823] font-display tracking-tight">
                {slides[activeSlide].title}
              </h2>
            </div>

            {/* Navigation Arrows & Keyboard Hint */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <div className="hidden lg:flex items-center gap-1 text-[11px] font-bold text-[#4e7159] bg-[#e4ede6] px-2.5 py-1.5 rounded-xl border border-[#cde0d2]">
                <Keyboard className="w-3.5 h-3.5 text-[#3b734c]" />
                <span>Teclas ← / →</span>
              </div>

              <button
                onClick={() => paginate(-1)}
                disabled={activeSlide === 0}
                className="p-2.5 rounded-xl border border-[#c5dbcc] text-[#2e563a] hover:bg-[#e1ede4] active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                title="Diapositiva anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => paginate(1)}
                disabled={activeSlide === slides.length - 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2d5a3c] hover:bg-[#234830] active:scale-95 text-white font-bold text-sm disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs cursor-pointer"
                title="Diapositiva siguiente"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Lower row: Interactive Framer Motion pill tabs for instant smooth switching */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 border-t border-[#d8e8dc]">
            {slides.map((s, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer z-10 ${
                    isActive ? 'text-white' : 'text-[#395e45] hover:text-[#183622]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSlideIndicator"
                      className="absolute inset-0 bg-[#2d5a3c] rounded-xl -z-10 shadow-xs"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{idx + 1}. {s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Animated Slide Canvas with Framer Motion transitions */}
      <div className="relative overflow-hidden min-h-[580px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            
            {/* SLIDE 0: TRIPLE IMPACTO (Huge numbers, concise punchy text) */}
            {activeSlide === 0 && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="bg-gradient-to-br from-[#ffffff] via-[#f7faf8] to-[#edf4f0] text-[#1c3825] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#cfe2d5] shadow-xs space-y-8"
              >
                
                {/* Header Title */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f3ea] text-[#295635] text-xs font-black tracking-wide border border-[#cbe4d3]">
                    <Sparkles className="w-4 h-4 text-[#3b734c]" />
                    <span>DEFENSA OFICIAL 8 MINUTOS • INMOBI LIAM</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-display text-[#15341f] leading-none">
                    VITA SENIOR: <br />
                    <span className="text-[#2b6b3e]">TRIPLE IMPACTO</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl font-bold text-[#355940]">
                    Enfermería & Domótica • Rigor Normativo GAD • Rentabilidad Blindada
                  </p>
                </motion.div>

                {/* 3 Massive Pillar Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  
                  {/* 1. Impacto Social & Salud */}
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-[#f2f8f4] p-6 sm:p-7 rounded-3xl border-2 border-[#cce4d4] flex flex-col justify-between space-y-4 shadow-2xs"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-black uppercase text-[#356743] tracking-wider block">
                        1. Impacto Social & Salud
                      </span>
                      <div className="text-5xl sm:text-6xl font-black font-mono text-[#183622] leading-none">
                        &lt;10<span className="text-2xl sm:text-3xl font-bold ml-1">min</span>
                      </div>
                      <div className="text-lg font-black text-[#8c3535] leading-tight">
                        Respuesta Médica Garantizada
                      </div>
                    </div>
                    <ul className="text-sm font-semibold text-[#3b5e46] space-y-1.5 border-t border-[#d8ebe0] pt-4">
                      <li>• Enfermería y domótica in situ (50 m²)</li>
                      <li>• Sensores de caídas invisibles</li>
                      <li>• Cero gradas en todo el conjunto</li>
                    </ul>
                  </motion.div>

                  {/* 2. Impacto Urbano & GAD */}
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-[#edf5fa] p-6 sm:p-7 rounded-3xl border-2 border-[#cfe2ee] flex flex-col justify-between space-y-4 shadow-2xs"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-black uppercase text-[#235378] tracking-wider block">
                        2. Impacto Urbano & Normativa
                      </span>
                      <div className="text-5xl sm:text-6xl font-black font-mono text-[#173e5f] leading-none">
                        20%<span className="text-2xl sm:text-3xl font-bold ml-1">COS</span>
                      </div>
                      <div className="text-lg font-black text-[#2a6d40] leading-tight">
                        80% Áreas Verdes Libres
                      </div>
                    </div>
                    <ul className="text-sm font-semibold text-[#3b586c] space-y-1.5 border-t border-[#d7e7f1] pt-4">
                      <li>• 560 m² construidos sobre 2.800 m²</li>
                      <li>• Cumple Código GAD Tisaleo 5A2-20</li>
                      <li>• Propiedad Horizontal unificada</li>
                    </ul>
                  </motion.div>

                  {/* 3. Impacto Financiero */}
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-[#fbf7f0] p-6 sm:p-7 rounded-3xl border-2 border-[#ede2d2] flex flex-col justify-between space-y-4 shadow-2xs"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-black uppercase text-[#7d562b] tracking-wider block">
                        3. Impacto Financiero Liam
                      </span>
                      <div className="text-5xl sm:text-6xl font-black font-mono text-[#5c3e1e] leading-none">
                        25%<span className="text-2xl sm:text-3xl font-bold ml-1">Neto</span>
                      </div>
                      <div className="text-lg font-black text-[#2f683e] leading-tight">
                        $80.000 Utilidad Neta
                      </div>
                    </div>
                    <ul className="text-sm font-semibold text-[#66503c] space-y-1.5 border-t border-[#ebdcc8] pt-4">
                      <li>• Precio final: $40.000 por villa</li>
                      <li>• $10.000 de ganancia neta por unidad</li>
                      <li>• Escritura individual legalizada</li>
                    </ul>
                  </motion.div>

                </div>

                {/* Bottom Quick Action */}
                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#cfe2d5]">
                  <span className="text-sm font-bold text-[#3d6349]">
                    Modelo optimizado para 8 familias • Tisaleo, Tungurahua
                  </span>

                  <button
                    onClick={() => paginate(1)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2d5a3c] hover:bg-[#234830] text-white font-black text-sm shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <span>Ver Modelo del Conjunto</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>

              </motion.div>
            )}

            {/* SLIDE 1: MODELO DEL CONJUNTO HABITACIONAL */}
            {activeSlide === 1 && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-4"
              >
                {/* Header metrics strip with giant numbers */}
                <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-[#cfe2d5] text-center shadow-2xs">
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-500 block">Capacidad</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#193a24] block">8 VILLAS</span>
                    <span className="text-xs font-bold text-[#2d6f42]">1 Sola Planta</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-500 block">Club Social</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#235378] block">170 m²</span>
                    <span className="text-xs font-bold text-[#235378]">Comedor & Terraza</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-500 block">Naturaleza Libre</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#2d6f42] block">80%</span>
                    <span className="text-xs font-bold text-[#2d6f42]">2.240 m² Bio-huertos</span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <ConjuntoRenderHero />
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-between items-center px-2">
                  <button
                    onClick={() => paginate(-1)}
                    className="text-sm font-bold text-[#446650] hover:text-[#183622] cursor-pointer"
                  >
                    ← Volver a Triple Impacto
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2d5a3c] text-white font-bold text-sm shadow-xs hover:bg-[#234830] transition-all cursor-pointer active:scale-95"
                  >
                    <span>Ver Prototipo de Villa (40 m²)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* SLIDE 2: PROTOTIPO DE VILLA (40 m²) */}
            {activeSlide === 2 && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-4"
              >
                {/* Header metrics strip with giant numbers */}
                <motion.div variants={itemVariants} className="grid grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-[#cfe2d5] text-center shadow-2xs">
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-500 block">Área Útil</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#193a24] block">40 m²</span>
                    <span className="text-xs font-bold text-[#2d6f42]">Suite Unifamiliar</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-500 block">Dimensiones</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#235378] block">5×8 m</span>
                    <span className="text-xs font-bold text-[#235378]">Rectangular</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-500 block">Accesibilidad</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#8c3535] block">0</span>
                    <span className="text-xs font-bold text-[#8c3535]">Cero Gradas</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-500 block">Distribución</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#7d562b] block">2 DORM</span>
                    <span className="text-xs font-bold text-[#7d562b]">Baño Adaptado</span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <VillaFloorPlanBlueprint />
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-between items-center px-2">
                  <button
                    onClick={() => paginate(-1)}
                    className="text-sm font-bold text-[#446650] hover:text-[#183622] cursor-pointer"
                  >
                    ← Volver al Conjunto
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2d5a3c] text-white font-bold text-sm hover:bg-[#234830] transition-all cursor-pointer active:scale-95"
                  >
                    <span>Siguiente: Normativa GAD Tisaleo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* SLIDE 3: NORMATIVA GAD TISALEO & BLINDAJE LEGAL */}
            {activeSlide === 3 && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#cfe2d5] shadow-xs space-y-8"
              >
                
                <motion.div variants={itemVariants} className="space-y-2">
                  <span className="text-xs font-black uppercase text-[#356b44] tracking-wider block">
                    CAPÍTULO LEGAL Y MUNICIPAL • CÓDIGO GAD 5A2-20
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-[#173822] font-display leading-tight">
                    BLINDAJE NORMATIVO GAD TISALEO
                  </h2>
                  <p className="text-base sm:text-lg font-bold text-[#396147]">
                    Solución a la restricción del lote mínimo rural (750 m²) mediante Propiedad Horizontal
                  </p>
                </motion.div>

                {/* High Contrast Comparison Box */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-6 rounded-3xl bg-[#fdf5f5] border-2 border-[#f3d4d4] space-y-2 shadow-2xs">
                    <span className="text-xs font-black text-[#8f3636] uppercase tracking-wider block">
                      Restricción Rural Tradicional
                    </span>
                    <div className="text-4xl sm:text-5xl font-black font-mono text-[#8f3636]">
                      750 m²
                    </div>
                    <p className="text-sm font-bold text-[#6f2e2e] leading-snug">
                      Prohíbe fraccionamientos menores. La subdivisión individual de lotes es ilegal.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-[#edf5fa] border-2 border-[#b5d5e9] space-y-2 shadow-2xs">
                    <span className="text-xs font-black text-[#1b4363] uppercase tracking-wider block">
                      Solución Aprobada: Propiedad Horizontal
                    </span>
                    <div className="text-4xl sm:text-5xl font-black font-mono text-[#1b4363]">
                      100% LEGAL
                    </div>
                    <p className="text-sm font-bold text-[#234e70] leading-snug">
                      Predio matriz de 2.800 m² indiviso. Cada villa cuenta con su propia <strong>escritura pública inscrita</strong>.
                    </p>
                  </div>
                </motion.div>

                {/* 4 Massive Parameter Cards */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-5 bg-[#f4f8f5] rounded-2xl border border-[#dce8e0]">
                    <span className="text-xs font-black text-[#4f705b] uppercase block">COS Planta Baja</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#193b24] block mt-1">20%</span>
                    <span className="text-xs font-bold text-[#2d6f42]">560 m² Huella</span>
                  </div>

                  <div className="p-5 bg-[#f4f8f5] rounded-2xl border border-[#dce8e0]">
                    <span className="text-xs font-black text-[#4f705b] uppercase block">Naturaleza Libre</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#2d6f42] block mt-1">80%</span>
                    <span className="text-xs font-bold text-[#2d6f42]">2.240 m² Verdes</span>
                  </div>

                  <div className="p-5 bg-[#f4f8f5] rounded-2xl border border-[#dce8e0]">
                    <span className="text-xs font-black text-[#4f705b] uppercase block">Retiro Frontal</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#193b24] block mt-1">5,00 m</span>
                    <span className="text-xs font-bold text-slate-600">Parqueaderos</span>
                  </div>

                  <div className="p-5 bg-[#f4f8f5] rounded-2xl border border-[#dce8e0]">
                    <span className="text-xs font-black text-[#4f705b] uppercase block">Retiro Perimetral</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#193b24] block mt-1">3,00 m</span>
                    <span className="text-xs font-bold text-slate-600">Laterales Libres</span>
                  </div>
                </motion.div>

                {/* Bottom Buttons */}
                <motion.div variants={itemVariants} className="flex justify-between items-center pt-2 border-t border-[#cfe2d5]">
                  <button
                    onClick={() => paginate(-1)}
                    className="text-sm font-bold text-[#446650] hover:text-[#183622] cursor-pointer"
                  >
                    ← Volver a Prototipo de Villa
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2d5a3c] text-white font-bold text-sm shadow-xs hover:bg-[#234830] transition-all cursor-pointer active:scale-95"
                  >
                    <span>Siguiente: Retorno Financiero 25%</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>

              </motion.div>
            )}

            {/* SLIDE 4: RETORNO FINANCIERO 25% & CIERRE */}
            {activeSlide === 4 && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="bg-gradient-to-br from-[#ffffff] via-[#f7faf8] to-[#edf4f0] text-[#1a3823] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#cfe2d5] shadow-xs space-y-8"
              >
                
                <motion.div variants={itemVariants} className="space-y-2">
                  <span className="text-xs font-black uppercase text-[#356b44] tracking-wider block">
                    CIERRE DE INVERSIÓN • MODELO INMOBI LIAM
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-[#173822] font-display leading-tight">
                    RETORNO NETO: 25.0% ($80.000)
                  </h2>
                  <p className="text-base sm:text-lg font-bold text-[#355c41]">
                    Estructura de costos optimizada a $400/m² con precio popular de $40.000
                  </p>
                </motion.div>

                {/* 4 Huge Financial KPI Metric Cards */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  
                  <div className="bg-[#f5f9f6] p-5 sm:p-6 rounded-3xl border-2 border-[#d0e4d7]">
                    <span className="text-xs font-black uppercase text-[#5c7a67] block">Precio por Villa</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#1a3b24] block mt-1">
                      $40k
                    </span>
                    <span className="text-xs font-bold text-[#356b44] block mt-1">$1.000 / m²</span>
                  </div>

                  <div className="bg-[#edf5fa] p-5 sm:p-6 rounded-3xl border-2 border-[#cfe2ee]">
                    <span className="text-xs font-black uppercase text-[#557891] block">Ventas Brutas</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#194060] block mt-1">
                      $320k
                    </span>
                    <span className="text-xs font-bold text-[#2c5f85] block mt-1">8 Unidades Vendidas</span>
                  </div>

                  <div className="bg-[#f8f9fa] p-5 sm:p-6 rounded-3xl border-2 border-[#dbe2e6]">
                    <span className="text-xs font-black uppercase text-[#6a7c86] block">Costo Total Obras</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#324550] block mt-1">
                      $240k
                    </span>
                    <span className="text-xs font-bold text-[#6a7c86] block mt-1">Terreno + Obras GAD</span>
                  </div>

                  <div className="bg-[#e8f5ec] p-5 sm:p-6 rounded-3xl border-2 border-[#a8deb6]">
                    <span className="text-xs font-black uppercase text-[#2d6f42] block">Utilidad Neta Liam</span>
                    <span className="text-3xl sm:text-5xl font-black font-mono text-[#1a5b2f] block mt-1">
                      $80k
                    </span>
                    <span className="text-xs font-black text-[#2d6f42] block mt-1">25.0% Margen Neto</span>
                  </div>

                </motion.div>

                {/* Detailed Construction Costs Breakdown for the Jury */}
                <motion.div variants={itemVariants} className="bg-white p-5 sm:p-6 rounded-3xl border border-[#cfe2d5] shadow-2xs space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#e2ede5]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2d5a3c]" />
                      <span className="text-xs sm:text-sm font-black uppercase text-[#183622] tracking-wide">
                        Desglose Técnico de Costos de Construcción (Norma NEC-15)
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#2d5a3c] bg-[#eaf4ee] px-2.5 py-0.5 rounded-full border border-[#cbe3d3]">
                      Costo Total: $240.000
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div className="p-3.5 bg-[#f8fbf9] rounded-2xl border border-[#dce8e0]">
                      <span className="text-[#597b65] block font-bold text-[11px]">8 Villas (320 m² @ $400/m²)</span>
                      <span className="text-xl font-black font-mono text-[#183622] block mt-0.5">$128.000</span>
                      <span className="text-[10px] text-[#4f705b] block mt-0.5">$16.000 de costo por villa</span>
                    </div>

                    <div className="p-3.5 bg-[#f8fbf9] rounded-2xl border border-[#dce8e0]">
                      <span className="text-[#597b65] block font-bold text-[11px]">Club Social (170 m² @ $200/m²)</span>
                      <span className="text-xl font-black font-mono text-[#235378] block mt-0.5">$34.000</span>
                      <span className="text-[10px] text-[#4f705b] block mt-0.5">Comedor, salón y enfermería</span>
                    </div>

                    {/* Obras Exteriores Card with interactive breakdown toggle */}
                    <div className={`p-3.5 rounded-2xl border transition-all ${
                      isExteriorBreakdownOpen 
                        ? 'bg-[#eef6f1] border-[#2d5a3c] ring-1 ring-[#2d5a3c]' 
                        : 'bg-[#f8fbf9] border-[#dce8e0]'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[#597b65] font-bold text-[11px]">Obras Exteriores & Huertos</span>
                      </div>
                      <span className="text-xl font-black font-mono text-[#2d6f42] block mt-0.5">$23.000</span>
                      <button
                        type="button"
                        onClick={() => setIsExteriorBreakdownOpen(!isExteriorBreakdownOpen)}
                        className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#2d5a3c] hover:text-[#183622] underline cursor-pointer"
                      >
                        <span>{isExteriorBreakdownOpen ? 'Ocultar desglose' : 'Ver desglose detallado'}</span>
                        {isExteriorBreakdownOpen ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="p-3.5 bg-[#f8fbf9] rounded-2xl border border-[#dce8e0]">
                      <span className="text-[#597b65] block font-bold text-[11px]">Terreno 2.800 m² (Tisaleo)</span>
                      <span className="text-xl font-black font-mono text-[#7d562b] block mt-0.5">$47.000</span>
                      <span className="text-[10px] text-[#4f705b] block mt-0.5">$5.875 por villa • Santa Lucía</span>
                    </div>
                  </div>

                  {/* Interactive Expandable Breakdown for Obras Exteriores & Huertos Terapéuticos */}
                  <AnimatePresence>
                    {isExteriorBreakdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-[#f4f9f6] rounded-2xl border border-[#cbe2d3] space-y-3">
                          <div className="flex items-center justify-between border-b border-[#d8ebe0] pb-2">
                            <span className="text-xs font-black uppercase text-[#234d31] tracking-wide flex items-center gap-1.5">
                              <Trees className="w-4 h-4 text-[#2d6f42]" />
                              <span>Desglose Específico: Obras Exteriores & Huertos Terapéuticos (2.240 m²)</span>
                            </span>
                            <span className="text-xs font-mono font-bold text-[#2d6f42]">
                              Subtotal: $23.000
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                            <div className="bg-white p-3 rounded-xl border border-[#d6e8dc]">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-[#183622]">1. Adoquinado & Senderos</span>
                                <span className="font-mono font-extrabold text-[#2d6f42]">$8.500</span>
                              </div>
                              <p className="text-[10px] text-slate-500 mt-0.5">
                                Pavimento peatonal antideslizante sin desniveles ni gradas (100% accesible).
                              </p>
                            </div>

                            <div className="bg-white p-3 rounded-xl border border-[#d6e8dc]">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-[#183622]">2. Bancales Elevados</span>
                                <span className="font-mono font-extrabold text-[#2d6f42]">$5.500</span>
                              </div>
                              <p className="text-[10px] text-slate-500 mt-0.5">
                                Huertos en madera tratada a 80 cm de altura para horticultura ergonómica senior.
                              </p>
                            </div>

                            <div className="bg-white p-3 rounded-xl border border-[#d6e8dc]">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-[#183622]">3. Pérgola & Mobiliario</span>
                                <span className="font-mono font-extrabold text-[#2d6f42]">$4.000</span>
                              </div>
                              <p className="text-[10px] text-slate-500 mt-0.5">
                                Pérgola central de madera curada, bancas de descanso con respaldo y sombra.
                              </p>
                            </div>

                            <div className="bg-white p-3 rounded-xl border border-[#d6e8dc]">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-[#183622]">4. Iluminación Solar LED</span>
                                <span className="font-mono font-extrabold text-[#2d6f42]">$3.000</span>
                              </div>
                              <p className="text-[10px] text-slate-500 mt-0.5">
                                Balizas de paso y luminarias solares con encendido crepuscular automático.
                              </p>
                            </div>

                            <div className="bg-white p-3 rounded-xl border border-[#d6e8dc] sm:col-span-2 lg:col-span-2">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-[#183622]">5. Cerramiento Vegetal & Riego por Goteo</span>
                                <span className="font-mono font-extrabold text-[#2d6f42]">$2.000</span>
                              </div>
                              <p className="text-[10px] text-slate-500 mt-0.5">
                                Setos vivos nativos como cortina rompeviento y red automatizada de microrriego para huertos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Powerful Takeaway Box */}
                <motion.div variants={itemVariants} className="p-6 rounded-3xl bg-[#eaf4ee] border-2 border-[#c6e2ce] text-base sm:text-lg font-bold text-[#1a4226] leading-relaxed shadow-2xs">
                  🎯 <strong>Ganancia Neta:</strong> Cada villa vendida a $40.000 genera exactamente <strong>$10.000 de utilidad líquida</strong> para Inmobi Liam, respaldado con el 80% de naturaleza protegida y escritura propia.
                </motion.div>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#cfe2d5]">
                  <button
                    onClick={() => paginate(-1)}
                    className="text-sm font-bold text-[#446650] hover:text-[#183622] cursor-pointer"
                  >
                    ← Volver a Normativa GAD
                  </button>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={onOpenDossierModal}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#2d5a3c] hover:bg-[#234830] active:scale-95 text-white font-black text-sm shadow-xs transition-all cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-[#cbe4d3]" />
                      <span>Ver Dossier Técnico Oficial Completo</span>
                    </button>
                    <button
                      onClick={onOpenCostModal}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#edf5fa] hover:bg-[#e0eff8] active:scale-95 text-[#1c486a] font-bold text-xs border border-[#c9dfec] transition-all cursor-pointer"
                    >
                      <span>Simulador de Ahorro</span>
                    </button>
                  </div>
                </motion.div>

              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};
