import React, { useState } from 'react';
import { 
  Building, 
  Trees, 
  Shield, 
  HeartPulse, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  Compass, 
  Eye, 
  Bed, 
  Bath, 
  Utensils, 
  Wifi, 
  Activity
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';
import { VillaFloorPlanBlueprint } from './VillaFloorPlanBlueprint';

export const ArchitecturalExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'masterplan' | 'villa' | 'normativa'>('masterplan');
  const [selectedAreaId, setSelectedAreaId] = useState<string>('villas');

  const areas = PROJECT_DETAILS.architecturalAreas;
  const currentArea = areas.find(a => a.id === selectedAreaId) || areas[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Top Bar with Navigation Tabs */}
      <div className="bg-slate-900 text-white p-6 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Tisaleo, Tungurahua • Terreno Matriz 2.800 m²</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              Arquitectura, Implantación & Huella COS 20%
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Diseño en una sola planta (cero gradas) respetando rigurosamente la ordenanza 5A2-20 del GAD Tisaleo: 560 m² construidos (20%) y 2.240 m² de áreas naturales libres (80%).
            </p>
          </div>

          {/* Sub-tabs */}
          <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveTab('masterplan')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'masterplan'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Master Plan (2.800 m²)
            </button>
            <button
              onClick={() => setActiveTab('villa')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'villa'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Planta Villa (40+20 m²)
            </button>
            <button
              onClick={() => setActiveTab('normativa')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'normativa'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Normativa GAD Tisaleo
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8">
        {activeTab === 'masterplan' && (
          <div className="space-y-8">
            {/* Visual KPI Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200/80">
                <span className="text-xs text-emerald-800 font-semibold block">Área Total del Predio</span>
                <span className="text-2xl font-bold text-emerald-950 font-mono">2.800 m²</span>
                <span className="text-[11px] text-emerald-700 block mt-0.5">Predio matriz Tisaleo</span>
              </div>
              <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-200/80">
                <span className="text-xs text-sky-800 font-semibold block">Huella Construida (COS)</span>
                <span className="text-2xl font-bold text-sky-950 font-mono">560 m² (20.0%)</span>
                <span className="text-[11px] text-sky-700 block mt-0.5">Límite exacto de ordenanza</span>
              </div>
              <div className="bg-teal-50/80 p-4 rounded-xl border border-teal-200/80">
                <span className="text-xs text-teal-800 font-semibold block">Naturaleza & Bio-Lagos</span>
                <span className="text-2xl font-bold text-teal-950 font-mono">2.240 m² (80.0%)</span>
                <span className="text-[11px] text-teal-700 block mt-0.5">Jardines terapéuticos</span>
              </div>
              <div className="bg-purple-50/80 p-4 rounded-xl border border-purple-200/80">
                <span className="text-xs text-purple-800 font-semibold block">Villas Exclusivas</span>
                <span className="text-2xl font-bold text-purple-950 font-mono">8 Unidades</span>
                <span className="text-[11px] text-purple-700 block mt-0.5">Una sola planta (0 gradas)</span>
              </div>
            </div>

            {/* Interactive Layout Map & Selector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Graphic representation of the 2,800 m² property */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-5 text-white border border-slate-800 relative shadow-inner">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2 border-b border-slate-800">
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    Diagrama de Zonificación e Implantación Aislada
                  </span>
                  <span className="text-[11px]">Escala esquemática 2.800 m²</span>
                </div>

                {/* SVG Visual Model of the Master Plan */}
                <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 relative overflow-hidden">
                  
                  {/* Front Setback Marker */}
                  <div className="w-full bg-amber-950/40 border-b-2 border-dashed border-amber-500/60 p-2 text-center text-[10px] text-amber-300 font-semibold mb-3 rounded">
                    Retiro Frontal Obligatorio: 5,00 m (Parqueaderos ecológicos, control de acceso vehicular y peatonal)
                  </div>

                  {/* Main Property Area */}
                  <div className="grid grid-cols-3 gap-3 relative min-h-[300px] p-2 bg-emerald-950/30 rounded-lg border border-emerald-800/40">
                    
                    {/* Entrance Clinic 50m2 */}
                    <div 
                      onClick={() => setSelectedAreaId('clinic')}
                      className={`cursor-pointer transition-all p-3 rounded-lg border flex flex-col justify-between ${
                        selectedAreaId === 'clinic'
                          ? 'bg-rose-900/80 border-rose-400 ring-2 ring-rose-400/50 scale-[1.02]'
                          : 'bg-rose-950/50 border-rose-800/70 hover:bg-rose-900/60 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <HeartPulse className="w-4 h-4 text-rose-400" />
                        <span className="text-[10px] font-bold bg-rose-600/40 text-rose-300 px-1 rounded">50 m²</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold block text-rose-100">Enfermería & Domótica</span>
                        <span className="text-[10px] text-rose-300">Junto al acceso principal</span>
                      </div>
                    </div>

                    {/* Community Center 170m2 */}
                    <div 
                      onClick={() => setSelectedAreaId('community-center')}
                      className={`col-span-2 cursor-pointer transition-all p-3 rounded-lg border flex flex-col justify-between ${
                        selectedAreaId === 'community-center'
                          ? 'bg-teal-900/80 border-teal-400 ring-2 ring-teal-400/50 scale-[1.02]'
                          : 'bg-teal-950/50 border-teal-800/70 hover:bg-teal-900/60 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Building className="w-4 h-4 text-teal-400" />
                        <span className="text-[10px] font-bold bg-teal-600/40 text-teal-300 px-1 rounded">170 m²</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold block text-teal-100">Centro Comunitario & Comedor</span>
                        <span className="text-[10px] text-teal-300">Salón social, cafetería, talleres cognitivos</span>
                      </div>
                    </div>

                    {/* Central Nature Reserve & Bio-Lakes (80%) */}
                    <div 
                      onClick={() => setSelectedAreaId('nature-reserve')}
                      className={`col-span-3 cursor-pointer transition-all p-4 rounded-xl border flex flex-col justify-between my-1 ${
                        selectedAreaId === 'nature-reserve'
                          ? 'bg-emerald-900/70 border-emerald-400 ring-2 ring-emerald-400/50'
                          : 'bg-emerald-950/40 border-emerald-800/60 hover:bg-emerald-900/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Trees className="w-5 h-5 text-emerald-400" />
                          <span className="text-xs font-bold text-emerald-200">
                            Reserva Natural, Lagos & Jardines Terapéuticos (80% del predio)
                          </span>
                        </div>
                        <span className="text-xs font-bold bg-emerald-700/50 text-emerald-300 px-2 py-0.5 rounded">
                          2.240 m² Libres
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-300/80 mt-2">
                        Senderos biosaludables continuos sin gradas, lagos paisajísticos con fuentes sonoras relajantes y huertos elevados adaptados a la tercera edad.
                      </p>
                    </div>

                    {/* 8 Residential Villas (320 m² total) */}
                    <div 
                      onClick={() => setSelectedAreaId('villas')}
                      className={`col-span-3 cursor-pointer transition-all p-3 rounded-xl border ${
                        selectedAreaId === 'villas'
                          ? 'bg-sky-900/80 border-sky-400 ring-2 ring-sky-400/50'
                          : 'bg-sky-950/50 border-sky-800/70 hover:bg-sky-900/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-sky-400" />
                          <span className="text-xs font-bold text-sky-100">
                            8 Villas Unifamiliares en Planta Baja
                          </span>
                        </div>
                        <span className="text-xs font-bold bg-sky-700/50 text-sky-300 px-2 py-0.5 rounded">
                          320 m² Huella (40 m² c/u)
                        </span>
                      </div>
                      {/* Grid of 8 individual villas */}
                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 text-center mt-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <div key={num} className="bg-sky-950/80 p-1.5 rounded border border-sky-800/60 text-[10px]">
                            <span className="font-bold text-sky-300 block">Villa {num}</span>
                            <span className="text-[9px] text-slate-400">40m²+20j</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Machinery Room 20m2 */}
                    <div 
                      onClick={() => setSelectedAreaId('machines-services')}
                      className={`col-span-3 cursor-pointer transition-all p-2 rounded-lg border flex items-center justify-between text-[11px] ${
                        selectedAreaId === 'machines-services'
                          ? 'bg-slate-800 border-slate-400 ring-2 ring-slate-400/50'
                          : 'bg-slate-900/80 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-slate-300 font-semibold">
                        Cuarto de Máquinas, Bombeo Hidráulico & Racks Domóticos
                      </span>
                      <span className="text-slate-400 font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded">
                        20 m²
                      </span>
                    </div>

                  </div>

                  {/* Rear & Lateral Setbacks Indicator */}
                  <div className="w-full bg-slate-900/90 border-t border-dashed border-slate-700 p-2 text-center text-[10px] text-slate-400 mt-2 rounded">
                    Retiros Laterales y Posterior Obligatorios: 3,00 m (Aislamiento acústico y ventilación cruzada natural)
                  </div>

                </div>

                <p className="text-[11px] text-slate-400 mt-3 text-center">
                  💡 Haz clic en cualquier área del plano para inspeccionar sus características técnicas y cumplimiento.
                </p>
              </div>

              {/* Right: Selected Area Technical Deep-Dive */}
              <div className="lg:col-span-5 space-y-5">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Detalle del Componente
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Huella: {currentArea.huellaM2} m² ({currentArea.percentageCOS.toFixed(1)}% del predio)
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {currentArea.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {currentArea.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Ventajas Técnicas y de Diseño Senior:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {currentArea.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Competitive Takeaway for Evaluators */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-300/40">
                  <span className="text-xs font-bold text-emerald-900 block uppercase tracking-wider">
                    ¿Por qué esto convence al jurado del concurso?
                  </span>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Muchos proyectos inmobiliarios saturan el suelo para maximizar ventas. Vita Senior <strong>respeta estrictamente el 20% de COS</strong> del GAD Tisaleo, ofreciendo un entorno biofílico del 80% que mejora la salud física y mental de los adultos mayores sin inflar los costos de inversión.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Individual Villa Layout (40 m² Suite + 20 m² Private Garden) */}
        {activeTab === 'villa' && (
          <div className="space-y-6">
            <VillaFloorPlanBlueprint />
          </div>
        )}

        {/* Tab 3: Legal & GAD Regulatory Compliance */}
        {activeTab === 'normativa' && (
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                Ficha Técnica de Conformidad Urbana (GAD Municipal de Tisaleo)
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                El proyecto ha sido concebido para cumplir al 100% con la normativa territorial de Tungurahua, evitando cualquier riesgo de paralización o rechazo administrativo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Zonificación</span>
                    <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">Código 5A2-20</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    Sectorización Agrícola Productiva con uso principal Agrícola-Residencial
                  </p>
                  <p className="text-xs text-slate-500">
                    Permite legalmente el emplazamiento residencial unifamiliar combinado con preservación paisajística y huertos.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Ocupación del Suelo (COS)</span>
                    <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">20% Máximo = 20% Usado</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    560 m² de huella construida sobre 2.800 m² totales
                  </p>
                  <p className="text-xs text-slate-500">
                    Deja intactos 2.240 m² (80%) para lagos y jardines terapéuticos, superando con creces los estándares ecológicos.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Retiros de Ordenanza</span>
                    <span className="text-xs font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">100% Respetados</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    Frontal: 5,00 m | Laterales y posterior: 3,00 m
                  </p>
                  <p className="text-xs text-slate-500">
                    Garantiza aislamiento perimetral, cero molestias vecinales, estacionamientos ecológicos y libre acceso a vehículos de emergencia.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase">Altura y Tipología</span>
                    <span className="text-xs font-mono font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">1 Sola Planta</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    Aislada en planta baja (cero gradas)
                  </p>
                  <p className="text-xs text-slate-500">
                    La ordenanza autoriza hasta 2 pisos / 6 metros. El proyecto elige voluntariamente 1 solo piso para garantizar accesibilidad universal total a los adultos mayores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
