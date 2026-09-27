import React, { useState } from 'react';
import { 
  Maximize2, 
  CheckCircle2, 
  Bed, 
  Sofa, 
  UtensilsCrossed, 
  Bath, 
  Shirt, 
  DoorOpen, 
  Eye, 
  Wifi, 
  HeartPulse, 
  Sparkles,
  Info,
  Image as ImageIcon,
  Layers
} from 'lucide-react';
import { SmartProjectImage } from './SmartProjectImage';

export const VillaFloorPlanBlueprint: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [showSeniorOverlay, setShowSeniorOverlay] = useState<boolean>(true);
  const [viewTab, setViewTab] = useState<'model' | 'blueprint' | 'split'>('model');

  const rooms = [
    {
      id: 'dorm1',
      name: 'Dormitorio 1 (Principal)',
      area: '10.0 m²',
      icon: Bed,
      color: 'bg-emerald-600',
      description: 'Cama de dos plazas, veladores dobles, clóset empotrado, ventana panorámica y libre radio de giro para andador o silla de ruedas.',
      seniorFeature: 'Sensor de presencia e iluminación nocturna guía hacia el baño sin deslumbramiento.'
    },
    {
      id: 'dorm2',
      name: 'Dormitorio 2',
      area: '8.0 m²',
      icon: Bed,
      color: 'bg-teal-600',
      description: 'Habitación para visitas, acompañante, cuidador o estudio. Cama individual, velador y clóset funcional.',
      seniorFeature: 'Ventilación cruzada natural y conexión al circuito de emergencia.'
    },
    {
      id: 'sala-comedor',
      name: 'Sala - Comedor',
      area: '12.0 m²',
      icon: Sofa,
      color: 'bg-sky-600',
      description: 'Espacio integrado de convivencia con sofá de 3 cuerpos, sillón auxiliar, mesa de centro, centro de entretenimiento TV y comedor para 4 comensales.',
      seniorFeature: 'Piso cerámico antideslizante nivelado, sin alfombras con bordes elevados que provoquen tropiezos.'
    },
    {
      id: 'cocina',
      name: 'Cocina',
      area: '5.0 m²',
      icon: UtensilsCrossed,
      color: 'bg-amber-600',
      description: 'Mesón ergonómico en L de fácil alcance, fregadero inox, cocina empotrada, refrigerador y ventana directa de iluminación.',
      seniorFeature: 'Corte automático de seguridad y mesones adaptados para evitar esfuerzos lumbares.'
    },
    {
      id: 'bano',
      name: 'Baño Gerontológico',
      area: '5.0 m²',
      icon: Bath,
      color: 'bg-rose-600',
      description: 'Ducha a ras de piso con mampara de cristal templado, inodoro ergonómico, lavamanos suspendido y ventilación exterior.',
      seniorFeature: 'Cero gradas o bordes en ducha, barras de apoyo inox fijas y suelo con rugosidad antideslizante certificada.'
    },
    {
      id: 'lavanderia',
      name: 'Lavandería',
      area: '2.0 m²',
      icon: Shirt,
      color: 'bg-indigo-600',
      description: 'Espacio ventilado con lavadero independiente y conexiones para lavadora.',
      seniorFeature: 'Acceso directo sin desniveles y grifería de palanca monomando suave.'
    },
    {
      id: 'porche',
      name: 'Porche de Ingreso',
      area: '3.0 m²',
      icon: DoorOpen,
      color: 'bg-slate-700',
      description: 'Transición cubierta hacia el exterior con jardineras ornamentales frontales y rampa suave de acceso.',
      seniorFeature: 'Ingreso a nivel de acera sin gradas (cero barreras arquitectónicas).'
    }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Bar */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              Plano Oficial Arquitectónico
            </span>
            <span className="text-xs text-slate-400">Escala 5.00 m × 8.00 m</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display mt-1 text-white">
            Distribución Detallada: Villa Tipo Suite (40 m²)
          </h2>
        </div>

        {/* Toggle Mode & View Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
            <button
              onClick={() => setViewTab('model')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewTab === 'model'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Modelo de Villa (villa.jpg/png)</span>
            </button>
            <button
              onClick={() => setViewTab('blueprint')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewTab === 'blueprint'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Plano Técnico 2D</span>
            </button>
            <button
              onClick={() => setViewTab('split')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewTab === 'split'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Vista Doble</span>
            </button>
          </div>

          {viewTab !== 'model' && (
            <button
              onClick={() => setShowSeniorOverlay(!showSeniorOverlay)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all border border-slate-700 cursor-pointer ${
                showSeniorOverlay 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              <span>{showSeniorOverlay ? 'Filtro Senior Activo' : 'Plano Neutro'}</span>
            </button>
          )}
        </div>
      </div>

      {/* VISTA 1: MODELO VISUAL 3D (villa.jpg / villa.png) */}
      {viewTab === 'model' && (
        <div className="p-6 sm:p-8 space-y-6">
          <SmartProjectImage
            imageKey="villa"
            title="Modelo Oficial de la Villa Vita Senior"
            subtitle="Suite Unifamiliar de 40 m² con Porche Frontal y 20 m² de Jardín Privado • Tisaleo"
            aspectRatio="aspect-[16/10] min-h-[380px] sm:min-h-[480px]"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rooms.slice(0, 4).map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${r.color} text-white`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">{r.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700">{r.area}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">{r.description}</p>
                  <div className="text-[11px] text-emerald-800 font-semibold flex items-start gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{r.seniorFeature}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#f0f7f3] p-5 rounded-2xl border border-[#cde3d4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2e5d3c] text-white flex items-center justify-center font-bold text-base">
                0
              </div>
              <div>
                <span className="font-bold text-[#1a3d24] text-sm block">Vivienda 100% Accesible en 1 Sola Planta</span>
                <span className="text-[#3b6647]">Cero gradas, puertas anchas de 0.90 m, baño gerontológico y sensor de iluminación guía nocturna.</span>
              </div>
            </div>
            <button
              onClick={() => setViewTab('blueprint')}
              className="px-4 py-2 rounded-xl bg-[#2e5d3c] hover:bg-[#23482e] text-white font-bold cursor-pointer transition-colors shadow-2xs text-xs whitespace-nowrap"
            >
              Ver Distribución Técnica en Plano 2D →
            </button>
          </div>
        </div>
      )}

      {/* VISTA 2 O SPLIT: PLANO ARQUITECTÓNICO 2D */}
      {(viewTab === 'blueprint' || viewTab === 'split') && (
        <div className="p-6 sm:p-8 space-y-6">
          {viewTab === 'split' && (
            <div className="mb-6">
              <SmartProjectImage
                imageKey="villa"
                title="Modelo Oficial de la Villa Vita Senior"
                subtitle="Suite Unifamiliar de 40 m² con Porche Frontal y 20 m² de Jardín Privado • Tisaleo"
                aspectRatio="aspect-[16/9] min-h-[300px] sm:min-h-[400px]"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: High-Precision Visual Architectural Blueprint */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/90 relative shadow-inner">
            
            {/* Top Dimension Ruler: 5.00 m */}
            <div className="relative w-full max-w-[460px] mx-auto mb-3 flex items-center justify-between text-xs font-mono font-bold text-slate-600 border-b-2 border-slate-400 pb-1">
              <span className="text-[10px]">|</span>
              <span className="bg-slate-200 px-2 py-0.5 rounded text-[11px]">← 5.00 m →</span>
              <span className="text-[10px]">|</span>
            </div>

            <div className="flex items-center max-w-[480px] mx-auto">
              
              {/* Left Dimension Ruler: 8.00 m */}
              <div className="flex flex-col items-center justify-between h-[520px] text-xs font-mono font-bold text-slate-600 border-r-2 border-slate-400 pr-2 mr-3 py-1">
                <span className="text-[10px]">—</span>
                <span className="bg-slate-200 px-1 py-1 rounded text-[11px] [writing-mode:vertical-lr] rotate-180">
                  ↕ 8.00 m
                </span>
                <span className="text-[10px]">—</span>
              </div>

              {/* Main Architectural Floor Plan Drawing */}
              <div className="w-full bg-[#fbf9f5] rounded-xl border-[5px] border-slate-900 shadow-xl overflow-hidden relative select-none">
                
                {/* 2-Column Top Section: Bedrooms */}
                <div className="grid grid-cols-12 border-b-[4px] border-slate-900">
                  
                  {/* Dormitorio 1 (Principal): 10.0 m² */}
                  <div 
                    onClick={() => setSelectedRoom(selectedRoom === 'dorm1' ? null : 'dorm1')}
                    className={`col-span-7 p-3 border-r-[4px] border-slate-900 min-h-[140px] bg-[#f4ece1] relative cursor-pointer transition-all ${
                      selectedRoom === 'dorm1' ? 'ring-4 ring-emerald-500 bg-emerald-50/90' : 'hover:bg-[#ede3d5]'
                    }`}
                  >
                    {/* Window at top */}
                    <div className="absolute top-0 left-6 right-6 h-1.5 bg-sky-300 border-x-2 border-slate-700" />
                    
                    {/* Bed Graphic */}
                    <div className="w-24 h-24 bg-white rounded-lg border-2 border-slate-400 shadow-xs p-1.5 relative mb-2">
                      <div className="w-full h-7 bg-[#a3b18a] rounded-t-sm flex items-center justify-around">
                        <div className="w-7 h-4 bg-white/90 rounded-xs shadow-xs" />
                        <div className="w-7 h-4 bg-white/90 rounded-xs shadow-xs" />
                      </div>
                      <div className="w-full h-12 bg-slate-100 rounded-b-sm border-t border-slate-300" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-slate-900 block leading-tight">Dormitorio 1 (Principal)</span>
                        <span className="text-[10px] font-bold text-slate-600 font-mono">10.0 m²</span>
                      </div>
                      {showSeniorOverlay && (
                        <span className="text-[9px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded shadow-xs">
                          Sensor Caída
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dormitorio 2: 8.0 m² */}
                  <div 
                    onClick={() => setSelectedRoom(selectedRoom === 'dorm2' ? null : 'dorm2')}
                    className={`col-span-5 p-3 min-h-[140px] bg-[#f4ece1] relative cursor-pointer transition-all ${
                      selectedRoom === 'dorm2' ? 'ring-4 ring-emerald-500 bg-emerald-50/90' : 'hover:bg-[#ede3d5]'
                    }`}
                  >
                    {/* Window at top */}
                    <div className="absolute top-0 left-4 right-4 h-1.5 bg-sky-300 border-x-2 border-slate-700" />

                    {/* Single Bed Graphic */}
                    <div className="w-14 h-22 bg-white rounded-lg border-2 border-slate-400 shadow-xs p-1 relative ml-auto mb-2">
                      <div className="w-full h-5 bg-[#a3b18a] rounded-t-sm flex items-center justify-center">
                        <div className="w-6 h-3 bg-white/90 rounded-xs" />
                      </div>
                      <div className="w-full h-13 bg-slate-100 rounded-b-sm border-t border-slate-300" />
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-slate-900 block leading-tight">Dormitorio 2</span>
                      <span className="text-[10px] font-bold text-slate-600 font-mono">8.0 m²</span>
                    </div>
                  </div>

                </div>

                {/* Middle Section: Bathroom, Laundry, Living-Dining */}
                <div className="grid grid-cols-12 border-b-[4px] border-slate-900">
                  
                  {/* Left Column: Baño & Lavandería */}
                  <div className="col-span-5 border-r-[4px] border-slate-900 flex flex-col">
                    
                    {/* Baño 5.0 m² */}
                    <div 
                      onClick={() => setSelectedRoom(selectedRoom === 'bano' ? null : 'bano')}
                      className={`p-3 bg-[#e9ecef] border-b-[3px] border-slate-900 relative cursor-pointer transition-all ${
                        selectedRoom === 'bano' ? 'ring-4 ring-rose-500 bg-rose-50' : 'hover:bg-[#dee2e6]'
                      }`}
                    >
                      {/* Left wall window */}
                      <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-sky-300 border-y-2 border-slate-700" />

                      <div className="flex items-center justify-between mb-2">
                        {/* Shower Enclosure */}
                        <div className="w-14 h-14 bg-sky-50 border-2 border-sky-400 rounded flex items-center justify-center text-[9px] font-semibold text-sky-800">
                          Ducha 0 cm
                        </div>
                        {/* Toilet */}
                        <div className="w-6 h-9 bg-white border border-slate-400 rounded-b-full flex items-center justify-center text-[8px] font-bold text-slate-500">
                          WC
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-bold text-slate-900 block leading-tight">Baño Adaptado</span>
                          <span className="text-[10px] font-bold text-slate-600 font-mono">5.0 m²</span>
                        </div>
                        {showSeniorOverlay && (
                          <span className="text-[8px] bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded">
                            Barras
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Lavandería 2.0 m² */}
                    <div 
                      onClick={() => setSelectedRoom(selectedRoom === 'lavanderia' ? null : 'lavanderia')}
                      className={`p-2.5 bg-[#f1f3f5] relative cursor-pointer transition-all ${
                        selectedRoom === 'lavanderia' ? 'ring-4 ring-indigo-500 bg-indigo-50' : 'hover:bg-[#e9ecef]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="w-8 h-8 bg-white border border-slate-400 rounded flex items-center justify-center text-[8px] font-bold text-slate-600">
                          LAV
                        </div>
                        <div className="w-8 h-8 bg-slate-200 border border-slate-400 rounded flex items-center justify-center text-[8px] font-bold text-slate-600">
                          LAVAD
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-900 block">Lavandería: 2.0 m²</span>
                    </div>

                  </div>

                  {/* Right Column: Sala - Comedor 12.0 m² */}
                  <div 
                    onClick={() => setSelectedRoom(selectedRoom === 'sala-comedor' ? null : 'sala-comedor')}
                    className={`col-span-7 p-3 bg-[#fdfbf7] flex flex-col justify-between relative cursor-pointer transition-all min-h-[220px] ${
                      selectedRoom === 'sala-comedor' ? 'ring-4 ring-sky-500 bg-sky-50/90' : 'hover:bg-[#f8f5ee]'
                    }`}
                  >
                    {/* Sofa + Living Setup */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="w-12 h-20 bg-slate-200 border border-slate-400 rounded-md p-1 flex flex-col justify-around">
                        <div className="w-full h-4 bg-white rounded-xs" />
                        <div className="w-full h-4 bg-white rounded-xs" />
                        <div className="w-full h-4 bg-white rounded-xs" />
                      </div>
                      <div className="w-10 h-10 bg-amber-100 border border-amber-300 rounded shadow-xs" />
                      <div className="w-6 h-22 bg-amber-950/20 border border-amber-900/40 rounded text-[8px] text-center font-bold writing-vertical">
                        TV
                      </div>
                    </div>

                    {/* Dining Table Graphic */}
                    <div className="w-24 h-12 bg-amber-200/80 border-2 border-amber-800/60 rounded-md mx-auto flex items-center justify-around my-2">
                      <div className="w-4 h-4 bg-amber-800/40 rounded-full" />
                      <div className="w-4 h-4 bg-amber-800/40 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[11px] font-bold text-slate-900 block leading-tight">Sala - Comedor</span>
                        <span className="text-[10px] font-bold text-slate-600 font-mono">12.0 m²</span>
                      </div>
                      {showSeniorOverlay && (
                        <span className="text-[8px] bg-sky-600 text-white font-bold px-1.5 py-0.5 rounded">
                          0 Desniveles
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Bottom Section: Cocina & Porche de Ingreso */}
                <div className="grid grid-cols-12">
                  
                  {/* Cocina 5.0 m² */}
                  <div 
                    onClick={() => setSelectedRoom(selectedRoom === 'cocina' ? null : 'cocina')}
                    className={`col-span-6 p-3 border-r-[4px] border-slate-900 bg-[#f8f9fa] relative cursor-pointer transition-all ${
                      selectedRoom === 'cocina' ? 'ring-4 ring-amber-500 bg-amber-50' : 'hover:bg-[#f1f3f5]'
                    }`}
                  >
                    {/* Window */}
                    <div className="absolute bottom-0 left-4 right-4 h-1.5 bg-sky-300 border-x-2 border-slate-700" />

                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-16 h-8 bg-slate-300 border border-slate-500 rounded flex items-center justify-around px-1">
                        <div className="w-3 h-3 rounded-full bg-slate-700" />
                        <div className="w-3 h-3 rounded-full bg-slate-700" />
                      </div>
                      <div className="w-9 h-10 bg-slate-200 border border-slate-400 rounded text-[8px] text-center font-bold flex items-center justify-center">
                        REFRI
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-slate-900 block leading-tight">Cocina Funcional</span>
                      <span className="text-[10px] font-bold text-slate-600 font-mono">5.0 m²</span>
                    </div>
                  </div>

                  {/* Porche de Ingreso 3.0 m² */}
                  <div 
                    onClick={() => setSelectedRoom(selectedRoom === 'porche' ? null : 'porche')}
                    className={`col-span-6 p-3 bg-slate-200 relative cursor-pointer transition-all ${
                      selectedRoom === 'porche' ? 'ring-4 ring-slate-700 bg-slate-300' : 'hover:bg-slate-300'
                    }`}
                  >
                    {/* Planter foliage bottom */}
                    <div className="absolute -bottom-2 left-0 right-0 h-3 bg-emerald-700 rounded-b flex items-center justify-around">
                      <span className="text-[8px] text-emerald-200">🌿🌿🌿</span>
                      <span className="text-[8px] text-emerald-200">🌿🌿🌿</span>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <div className="w-full h-4 bg-slate-400/50 rounded flex items-center justify-center text-[8px] font-bold text-slate-700">
                        Acceso Nivelado 0.90m
                      </div>
                    </div>

                    <div className="mt-2">
                      <span className="text-[11px] font-bold text-slate-900 block leading-tight">Porche de Ingreso</span>
                      <span className="text-[10px] font-bold text-slate-600 font-mono">3.0 m²</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <p className="text-[11px] text-slate-500 text-center mt-3">
              💡 Haz clic en cualquier estancia (dormitorios, baño, sala, cocina) para consultar su adaptación gerontológica.
            </p>
          </div>

          {/* Right Column: Exact Data Card from Uploaded Sheet */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Dark Navy Header Card (matching the image) */}
            <div className="bg-[#0f274a] text-white p-5 rounded-2xl shadow-lg border border-slate-700">
              <div className="text-center pb-3 border-b border-blue-900/80">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wider uppercase font-display text-white">
                  VILLA TIPO SUITE
                </h3>
                <span className="text-3xl font-extrabold text-white block mt-0.5 font-display">
                  40 m²
                </span>
                <p className="text-xs text-blue-200 mt-1 font-medium">
                  2 Dormitorios | 1 Baño | Sala - Comedor | Cocina | Lavandería | Porche de ingreso
                </p>
              </div>

              {/* Room by Room Metrics List */}
              <div className="py-4 space-y-2.5">
                {rooms.map((room) => {
                  const Icon = room.icon;
                  const isSelected = selectedRoom === room.id;

                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoom(isSelected ? null : room.id)}
                      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-blue-800 text-white font-bold ring-2 ring-emerald-400' 
                          : 'hover:bg-blue-950/60 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-blue-900/80 flex items-center justify-center text-blue-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium">{room.name}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-300">{room.area}</span>
                    </div>
                  );
                })}
              </div>

              {/* Total Area */}
              <div className="pt-3 border-t border-blue-900/80 flex justify-between items-center">
                <span className="text-xs uppercase font-bold tracking-wider text-blue-200">
                  Área Total Cubierta:
                </span>
                <span className="text-xl font-extrabold font-mono text-white">
                  40.0 m²
                </span>
              </div>
            </div>

            {/* Senior Specific Features Box (exact copy from image) */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-emerald-600" />
                <span>Características para Adulto Mayor</span>
              </h4>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Circulación amplia y sin barreras:</strong> radios de giro de 1.50 m en todas las áreas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Puertas de mínimo 0.90 m:</strong> paso libre y cómodo con silla de ruedas o andador.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Baño con ducha antideslizante:</strong> mampara de acceso plano y barras de apoyo fijas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Piso antideslizante certificado:</strong> máxima fricción en seco y mojado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Iluminación natural y ventilación cruzada:</strong> ventanales en todas las estancias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Espacios funcionales y seguros:</strong> sin gradas ni bordes elevados en toda la villa.</span>
                </li>
              </ul>
            </div>

            {/* If room selected, show detailed card */}
            {selectedRoom && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs animate-in fade-in">
                <span className="font-bold text-emerald-950 block">
                  {rooms.find(r => r.id === selectedRoom)?.name} ({rooms.find(r => r.id === selectedRoom)?.area})
                </span>
                <p className="text-slate-700 mt-1">
                  {rooms.find(r => r.id === selectedRoom)?.description}
                </p>
                <div className="mt-2 text-emerald-800 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{rooms.find(r => r.id === selectedRoom)?.seniorFeature}</span>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
      )}

    </div>
  );
};
