import React, { useState } from 'react';
import { 
  Building2, 
  Trees, 
  HeartPulse, 
  Coffee, 
  Compass, 
  Eye, 
  Sparkles, 
  Users, 
  ShieldCheck, 
  Droplets,
  Sun,
  CheckCircle2
} from 'lucide-react';

interface ZoneDetail {
  id: string;
  name: string;
  type: 'social' | 'health' | 'nature' | 'housing' | 'security';
  m2: string;
  description: string;
  highlights: string[];
}

export const ConjuntoHabitacionalVisualizer: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('social');

  const zones: Record<string, ZoneDetail> = {
    social: {
      id: 'social',
      name: 'Club Social & Centro Comunitario',
      type: 'social',
      m2: '170 m² huella',
      description: 'El corazón social de Vita Senior. Diseñado para compartir tertulias, celebrar cumpleaños y realizar actividades de estimulación cognitiva.',
      highlights: [
        'Salón de eventos y juegos de mesa adaptados',
        'Comedor comunitario y cafetería panorámica',
        'Terraza exterior cubierta con vista a los jardines',
        'Cero desniveles y puertas amplias de 1 metro'
      ]
    },
    clinic: {
      id: 'clinic',
      name: 'Módulo de Enfermería & Central Domótica',
      type: 'health',
      m2: '50 m² huella',
      description: 'Ubicado estratégicamente junto al acceso principal para control de triaje, signos vitales, recepción domótica y despacho de ambulancias en menos de 10 minutos.',
      highlights: [
        'Enfermera permanente viviendo en el conjunto',
        'Botiquín de primeros auxilios y telemedicina',
        'Central receptora de sensores domóticos de caída de las 8 villas',
        'Bahía de acceso directo para ambulancias'
      ]
    },
    lake: {
      id: 'lake',
      name: 'Bio-Lago & Jardines Terapéuticos (80% Verde)',
      type: 'nature',
      m2: '2.240 m² libres',
      description: 'Entorno natural biofílico que favorece la salud respiratoria y emocional gracias al aire puro y el clima templado de Tisaleo.',
      highlights: [
        'Lago paisajístico con fuente de agua relajante',
        'Senderos biosaludables nivelados con pasamanos de apoyo',
        'Bancales elevados de hierbas aromáticas y flores',
        'Bancas de descanso bajo pérgolas con sombra'
      ]
    },
    villas: {
      id: 'villas',
      name: '8 Villas Residenciales en Planta Baja',
      type: 'housing',
      m2: '40 m² villa + 20 m² jardín',
      description: 'Conjunto exclusivo de una sola planta perimetralmente distribuidas alrededor del área verde para máxima privacidad y sol.',
      highlights: [
        'Villa Tipo Suite de 40 m² con 2 dormitorios y baño adaptado',
        'Jardín privado frontal y posterior a nivel de suelo',
        'Estructura sismorresistente en hormigón y metal',
        'Escritura pública legalizada individual en Registro de la Propiedad'
      ]
    },
    access: {
      id: 'access',
      name: 'Garita de Acceso & Parqueaderos Ecológicos',
      type: 'security',
      m2: 'Retiro 5.00 m',
      description: 'Control de seguridad peatonal y vehicular permanente con barrera de acceso y parqueaderos adoquinados sobre césped.',
      highlights: [
        'Guardia y control de visitantes 24/7',
        'Cámaras de vigilancia perimetrales conectadas a garita',
        'Parqueo ecológico para visitas y familiares',
        'Iluminación solar LED automatizada'
      ]
    }
  };

  const active = zones[selectedZone] || zones.social;

  return (
    <div className="bg-white rounded-3xl border border-blue-900/20 shadow-2xl overflow-hidden">
      
      {/* Top Header in Navy & Gold */}
      <div className="bg-gradient-to-r from-[#0a192f] via-[#0f294a] to-[#1e3a8a] text-white p-6 sm:p-8 border-b border-amber-500/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Modelo Arquitectónico del Conjunto Habitacional</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Conjunto Residencial Vita Senior — Tisaleo
            </h2>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 max-w-2xl font-medium">
              8 Villas exclusivas en una sola planta, Club Social, Enfermería con Domótica y 2.240 m² de bio-lagos y jardines terapéuticos sobre un predio matriz de 2.800 m².
            </p>
          </div>

          <div className="bg-[#071324]/80 backdrop-blur-md p-4 rounded-2xl border border-amber-400/30 text-right min-w-[210px]">
            <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">
              Distribución del Terreno
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
              20% <span className="text-white text-lg font-normal">COS</span> | 80% <span className="text-emerald-400 text-lg font-normal">Verde</span>
            </div>
            <span className="text-[10px] text-slate-300 block mt-0.5">
              560 m² construidos • 2.240 m² naturaleza
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        
        {/* Interactive Zone Buttons Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-200">
          <button
            onClick={() => setSelectedZone('social')}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedZone === 'social'
                ? 'bg-[#0f294a] text-amber-300 shadow-lg shadow-blue-950/20 ring-2 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Coffee className="w-4 h-4 text-amber-400" />
            <span>1. Club Social (170 m²)</span>
          </button>

          <button
            onClick={() => setSelectedZone('lake')}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedZone === 'lake'
                ? 'bg-[#0f294a] text-amber-300 shadow-lg shadow-blue-950/20 ring-2 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Droplets className="w-4 h-4 text-cyan-400" />
            <span>2. Bio-Lago & Jardines (80% Libre)</span>
          </button>

          <button
            onClick={() => setSelectedZone('villas')}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedZone === 'villas'
                ? 'bg-[#0f294a] text-amber-300 shadow-lg shadow-blue-950/20 ring-2 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>3. Las 8 Villas (40 m²)</span>
          </button>

          <button
            onClick={() => setSelectedZone('clinic')}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedZone === 'clinic'
                ? 'bg-[#0f294a] text-amber-300 shadow-lg shadow-blue-950/20 ring-2 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <HeartPulse className="w-4 h-4 text-rose-400" />
            <span>4. Enfermería & Domótica (50 m²)</span>
          </button>

          <button
            onClick={() => setSelectedZone('access')}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              selectedZone === 'access'
                ? 'bg-[#0f294a] text-amber-300 shadow-lg shadow-blue-950/20 ring-2 ring-amber-400'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>5. Garita & Retiro 5m</span>
          </button>
        </div>

        {/* Master Plan Visual Architectural Render Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Visual Illustration Canvas */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#0a192f] via-[#0f274a] to-[#122847] p-5 sm:p-7 rounded-3xl border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
            
            {/* Top Scenic Skyline: Tisaleo Mountains & Pure Sky */}
            <div className="flex items-center justify-between pb-3 border-b border-blue-900/60 text-xs text-blue-200 mb-4">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-300" />
                <span className="font-semibold text-amber-200">Sector Santa Lucía / La Libertad — Tisaleo</span>
              </div>
              <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-mono text-[11px] font-bold border border-amber-400/30">
                Lote Matriz 2.800 m²
              </span>
            </div>

            {/* Isometric / Axonometric Architectural Canvas */}
            <div className="w-full bg-[#071324] rounded-2xl p-4 border border-blue-800/60 relative">
              
              {/* Front Retiro 5.0m & Access Gate */}
              <div 
                onClick={() => setSelectedZone('access')}
                className={`w-full p-2.5 rounded-xl border-2 cursor-pointer transition-all duration-300 mb-3 flex items-center justify-between ${
                  selectedZone === 'access'
                    ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/50'
                    : 'bg-blue-950/40 border-blue-800/60 hover:bg-blue-900/40'
                }`}
              >
                <div className="flex items-center gap-2 text-xs">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-white">Ingreso Controlado & Garita 24/7 (Retiro Frontal 5,00 m)</span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                  Acceso Seguro
                </span>
              </div>

              {/* Main Compound Grid Layout */}
              <div className="grid grid-cols-12 gap-3 p-3 bg-gradient-to-b from-[#0b2240] to-[#07192f] rounded-xl border border-blue-800/40 relative min-h-[340px]">
                
                {/* 1. Módulo Clínico Enfermería (Top Left Entrance) */}
                <div 
                  onClick={() => setSelectedZone('clinic')}
                  className={`col-span-4 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    selectedZone === 'clinic'
                      ? 'bg-rose-950/90 border-rose-400 ring-2 ring-rose-400/50 shadow-lg scale-[1.02]'
                      : 'bg-rose-950/40 border-rose-800/60 hover:bg-rose-900/50 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <HeartPulse className="w-5 h-5 text-rose-400" />
                    <span className="text-[10px] font-bold bg-rose-500 text-white px-1.5 py-0.5 rounded">50 m²</span>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-white block">Enfermería & Domótica</span>
                    <span className="text-[10px] text-rose-200">Recepción y monitoreo</span>
                  </div>
                </div>

                {/* 2. Centro Comunitario & Club Social (Top Center & Right) */}
                <div 
                  onClick={() => setSelectedZone('social')}
                  className={`col-span-8 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    selectedZone === 'social'
                      ? 'bg-amber-950/90 border-amber-400 ring-2 ring-amber-400/50 shadow-lg scale-[1.02]'
                      : 'bg-blue-950/60 border-blue-700/60 hover:bg-blue-900/60 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Coffee className="w-5 h-5 text-amber-300" />
                      <span className="text-xs font-extrabold text-white">Club Social & Comedor Comunitario</span>
                    </div>
                    <span className="text-[10px] font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-mono">170 m²</span>
                  </div>
                  <p className="text-[11px] text-amber-100/90 mt-1">
                    Salón de tertulias, cafetería con vistas panorámicas, talleres y comedor asistido.
                  </p>
                </div>

                {/* 3. Central Bio-Lake & Therapeutic Landscape (Middle 80% Green) */}
                <div 
                  onClick={() => setSelectedZone('lake')}
                  className={`col-span-12 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 my-1 ${
                    selectedZone === 'lake'
                      ? 'bg-teal-950/90 border-cyan-400 ring-2 ring-cyan-400/50 shadow-lg'
                      : 'bg-teal-950/40 border-teal-800/60 hover:bg-teal-900/50 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-cyan-400" />
                      <span className="text-xs font-extrabold text-cyan-200">
                        Gran Bio-Lago & Jardines Terapéuticos (80% del Terreno)
                      </span>
                    </div>
                    <span className="text-xs font-bold bg-cyan-600 text-white px-2.5 py-0.5 rounded font-mono">
                      2.240 m² Libres
                    </span>
                  </div>
                  
                  {/* Visual Lake & Walking Paths representation */}
                  <div className="flex items-center justify-between bg-cyan-900/30 p-2.5 rounded-lg border border-cyan-700/40 mt-2 text-[11px] text-cyan-100">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                      <span>Espejo de agua con fuente sonora para reducción de estrés y bienestar</span>
                    </div>
                    <span className="text-amber-300 font-semibold">Senderos 100% nivelados</span>
                  </div>
                </div>

                {/* 4. The 8 Senior Villas in single-floor layout (Bottom) */}
                <div 
                  onClick={() => setSelectedZone('villas')}
                  className={`col-span-12 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedZone === 'villas'
                      ? 'bg-blue-950/90 border-amber-400 ring-2 ring-amber-400/50 shadow-lg'
                      : 'bg-blue-950/50 border-blue-800/60 hover:bg-blue-900/50 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-amber-300" />
                      <span className="text-xs font-extrabold text-white">
                        8 Villas Residenciales Tipo Suite (40 m² c/u + 20 m² jardín privado)
                      </span>
                    </div>
                    <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-mono">
                      320 m² Huella Total
                    </span>
                  </div>

                  {/* 8 Villa Boxes */}
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <div 
                        key={num} 
                        className="bg-[#0f294a] p-2 rounded-lg border border-amber-400/40 text-center hover:border-amber-300 transition-colors"
                      >
                        <span className="text-xs font-bold text-amber-300 block">Villa {num}</span>
                        <span className="text-[10px] text-slate-300 block font-mono">40 m²</span>
                        <span className="text-[9px] text-emerald-400 block font-semibold">+20m² j</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Setbacks indicator */}
              <div className="flex justify-between items-center text-[10px] text-slate-400 mt-2 px-1">
                <span>Retiros perimetrales: 3,00 m laterales y posterior</span>
                <span className="text-amber-300 font-semibold">1 Sola Planta • Cero Gradas</span>
              </div>

            </div>

            <p className="text-[11px] text-blue-200/80 text-center mt-3">
              💡 Haz clic en los botones o zonas del modelo para inspeccionar cada espacio del conjunto.
            </p>
          </div>

          {/* Right Selected Zone Breakdown (in Luxury Gold/Navy Card) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-gradient-to-br from-[#0a192f] to-[#122847] text-white p-6 sm:p-7 rounded-3xl border-2 border-amber-500/50 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-blue-900/80 pb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  Zona Seleccionada
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-mono">
                  {active.m2}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {active.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 mt-2 leading-relaxed font-normal">
                  {active.description}
                </p>
              </div>

              <div className="pt-3 border-t border-blue-900/80 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Beneficios y Características Clave:
                </h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {active.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Value proposition pill */}
              <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200">
                <strong>Garantía Vita Senior:</strong> Cada propietario de las 8 villas es co-dueño en escritura pública de todas las zonas sociales, enfermería y áreas verdes.
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
