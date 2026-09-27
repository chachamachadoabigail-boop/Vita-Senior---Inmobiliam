import React, { useState } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Trees, 
  HeartPulse, 
  Building2, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  ChevronDown,
  DollarSign,
  Coffee,
  PhoneCall,
  FileText,
  Watch,
  Gift,
  BellRing,
  Activity
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';
import { CostComparatorTool } from './CostComparatorTool';
import { ConjuntoRenderHero } from './ConjuntoRenderHero';
import { VillaFloorPlanBlueprint } from './VillaFloorPlanBlueprint';
import { SmartProjectImage } from './SmartProjectImage';

interface BuyerTourViewProps {
  onOpenEmergencyModal: () => void;
  onOpenDossierModal: () => void;
}

export const BuyerTourView: React.FC<BuyerTourViewProps> = ({
  onOpenEmergencyModal,
  onOpenDossierModal,
}) => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿La casa es 100% propia o es un arriendo/asilo?',
      a: 'Es 100% de su propiedad. Cada comprador recibe su propia escritura pública legalizada e inscrita en el Registro de la Propiedad del Cantón Tisaleo. Es un bien raíz privado que puede vender cuando desee, hipotecar o dejar como herencia a sus hijos.'
    },
    {
      q: '¿Qué incluye exactamente la alícuota de $200 al mes?',
      a: 'Incluye la enfermera en el conjunto, el sistema de domótica con sensores de caída y respuesta en menos de 10 minutos, la seguridad perimetral con monitoreo 24 horas, el mantenimiento integral de los 2.240 m² de lagos y jardines, y el uso irrestricto del Club Social.'
    },
    {
      q: '¿Cómo funciona la asistencia médica ante una caída?',
      a: 'La villa cuenta con sensores invisibles que alertan automáticamente si el residente sufre una caída o deja de moverse. La enfermera in situ acude en segundos y se activa de inmediato el protocolo con la clínica privada aliada garantizando ambulancia o médico en menos de 10 minutos.'
    },
    {
      q: '¿Por qué las villas son de una sola planta sin gradas?',
      a: 'Porque las gradas representan el 85% de los accidentes graves en adultos mayores. En Vita Senior todo el conjunto, la villa, el baño gerontológico y los jardines están diseñados en una sola planta con puertas de 0.90 m y pisos antideslizantes.'
    },
    {
      q: '¿Qué regalo especial de salud recibo por la compra de la villa?',
      a: 'Por la compra de cada villa recibes GRATIS un reloj smartwatch inteligente que controla y registra tus signos vitales (ritmo cardíaco, presión arterial y oxigenación SpO2) las 24 horas. En caso de detectarse cualquier anomalía o alarma de salud, el reloj notifica de forma inmediata y automática al centro médico particular en convenio y a la enfermería in situ para acudir en tu auxilio.'
    }
  ];

  return (
    <div className="space-y-12">
      
      {/* Hero Banner in Tranquil Pastel Sage & Ivory Tones */}
      <div className="bg-gradient-to-br from-[#ffffff] via-[#f5f9f6] to-[#eaf2ec] text-[#1b3a24] rounded-3xl p-8 sm:p-14 border border-[#cde2d4] shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e3efe6] text-[#295736] text-xs font-bold border border-[#c4dcce]">
            <Sparkles className="w-3.5 h-3.5 text-[#3b734c]" />
            <span>Conjunto Residencial Exclusivo • Tisaleo, Tungurahua</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-[#15341f] leading-tight">
            La tranquilidad de saber que están bien cuidados, protegidos y felices.
          </h1>

          <p className="text-[#3b5f47] text-base leading-relaxed font-medium">
            Vita Senior es un conjunto de solo <strong>8 villas exclusivas en una sola planta</strong>. Un entorno campestre con aire puro, Club Social, bio-huertos terapéuticos, <strong>enfermería y domótica preventiva</strong>, por un precio final de <strong>$40.000 con escritura pública propia</strong>.
          </p>

          {/* Quick Highlight Badges in Pastel Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 bg-white/90 rounded-2xl border border-[#cde2d4] text-center shadow-2xs">
              <span className="text-[10px] uppercase text-[#476d54] font-bold block">Precio Final</span>
              <span className="text-xl font-bold text-[#1b3a24] font-mono">$40.000</span>
              <span className="text-[10px] text-[#476d54] block mt-0.5">Escritura propia</span>
            </div>

            <div className="p-4 bg-[#f2f8f4] rounded-2xl border border-[#c6e0cf] text-center shadow-2xs">
              <span className="text-[10px] uppercase text-[#2d6f42] font-bold block">Alícuota Todo Incluido</span>
              <span className="text-xl font-bold text-[#2d6f42] font-mono">$200 / mes</span>
              <span className="text-[10px] text-[#2d6f42] block mt-0.5">Enfermería y Domótica</span>
            </div>

            <div className="p-4 bg-[#edf5fa] rounded-2xl border border-[#cfe2ee] text-center shadow-2xs">
              <span className="text-[10px] uppercase text-[#235378] font-bold block">Naturaleza & Huertos</span>
              <span className="text-xl font-bold text-[#173e5f] font-mono">80% Libre</span>
              <span className="text-[10px] text-[#235378] block mt-0.5">2.240 m² verdes</span>
            </div>

            <div className="p-4 bg-[#fbf3f3] rounded-2xl border border-[#f3d2d2] text-center shadow-2xs">
              <span className="text-[10px] uppercase text-[#8c3535] font-bold block">Respuesta Médica</span>
              <span className="text-xl font-bold text-[#8c3535] font-mono">&lt; 10 min</span>
              <span className="text-[10px] text-[#8c3535] block mt-0.5">Sensores de caída</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300/80 font-bold text-xs shadow-2xs">
              <Gift className="w-4 h-4 text-amber-700" />
              <span>¡Regalo por tu compra! Reloj Smartwatch de control vital gratis</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={onOpenDossierModal}
              className="px-6 py-3.5 rounded-xl bg-[#2d5a3c] hover:bg-[#234830] text-white font-bold text-sm shadow-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#cbe4d3]" />
              <span>Ver Dossier Técnico Oficial</span>
            </button>
            <button
              onClick={onOpenEmergencyModal}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#fbf0f0] hover:bg-[#f6e1e1] text-[#7a2e2e] font-bold text-xs border border-[#f0c8c8] transition-all cursor-pointer"
            >
              <ShieldAlert className="w-4 h-4 text-[#a84444]" />
              <span>Demostrar Sensor de Caídas</span>
            </button>
          </div>

        </div>
      </div>

      {/* BENEFICIO ESPECIAL POR COMPRA: RELOJ SMARTWATCH DE MONITOREO VITAL */}
      <div className="bg-gradient-to-br from-[#13301d] via-[#1a4027] to-[#235334] text-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-400/40 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-4 right-4 p-4 opacity-10 pointer-events-none hidden md:block">
          <Watch className="w-52 h-52 text-white" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Gift className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>Beneficio Exclusivo por la Compra de tu Villa</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-snug">
              Reloj Smartwatch de Control Vital <span className="text-amber-300">GRATIS</span>
            </h3>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium">
              Por la compra de la villa, cada propietario recibe <strong>totalmente gratis un reloj smartwatch inteligente</strong> que controla de forma permanente sus signos vitales. En caso de una alarma o anomalía crítica, <strong>se notifica de inmediato al centro médico particular</strong> y al equipo de enfermería del conjunto para una atención médica oportuna.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <Activity className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span><strong>Monitoreo Continuo:</strong> Pulso, presión arterial y SpO2</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <BellRing className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span><strong>Alarma Inmediata:</strong> Alerta automática al centro médico particular</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <Watch className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                <span><strong>Tranquilidad Total:</strong> Cómodo, ergonómico y siempre conectado</span>
              </div>
            </div>
          </div>

          {/* Espacio interactivo para la imagen del Reloj Smartwatch */}
          <div className="w-full lg:w-[330px] flex-shrink-0 flex flex-col space-y-2.5">
            <SmartProjectImage
              imageKey="smartwatch"
              title="Smartwatch de Control Vital"
              subtitle="Regalo por la Compra de la Villa"
              aspectRatio="aspect-[4/3]"
              className="border-2 border-emerald-400/50 shadow-2xl"
            />
            
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-center">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-amber-300 flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-400" />
                  <span>100% GRATIS</span>
                </span>
                <span className="text-[11px] text-emerald-200 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Alerta a centro médico</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: Modelo del Conjunto Habitacional & Zonas Sociales */}
      <div className="space-y-4">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#356b44]">
            Arquitectura & Espacios Comunitarios
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173822] font-display">
            Conoce el Conjunto Residencial Vita Senior
          </h2>
          <p className="text-xs sm:text-sm text-[#486b53] font-medium">
            Un diseño campestre planificado con Club Social de 170 m², módulo clínico y bio-huertos terapéuticos en Tisaleo.
          </p>
        </div>
        <ConjuntoRenderHero />
      </div>

      {/* SECTION 2: Prototipo de la Villa Tipo Suite (40 m²) */}
      <div className="space-y-4">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#356b44]">
            Tu Próximo Hogar
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173822] font-display">
            Prototipo de la Villa Tipo Suite (40 m² + 20 m² Jardín)
          </h2>
          <p className="text-xs sm:text-sm text-[#486b53] font-medium">
            2 dormitorios, baño adaptado con ducha a ras de suelo, cocina ergonómica y terraza privada sin gradas.
          </p>
        </div>
        <VillaFloorPlanBlueprint />
      </div>

      {/* SECTION 3: Comparador Dinámico de Gastos en Casa Propia vs Vita Senior */}
      <div className="space-y-4">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#356b44]">
            Economía Familiar Inteligente
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173822] font-display">
            ¿Cuánto se Ahorra tu Familia con la Alícuota Compartida?
          </h2>
          <p className="text-xs sm:text-sm text-[#486b53] font-medium">
            Ajusta los gastos particulares de enfermería y vigilancia para comparar el ahorro dinámico con los $200 de Vita Senior.
          </p>
        </div>
        <CostComparatorTool />
      </div>

      {/* SECTION 4: Preguntas Frecuentes Rápidas */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#cfe2d5] shadow-xs space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#356b44]">
            Transparencia y Certeza Jurídica
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173822] font-display mt-0.5">
            Preguntas Frecuentes de Compradores y Familias
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-[#d8e8dc] rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setSelectedFaq(selectedFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-[#f8fbf9] hover:bg-[#edf5f0] transition-colors cursor-pointer"
              >
                <span className="text-sm font-bold text-[#193a23]">
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-[#4a6d55] transition-transform ${
                  selectedFaq === idx ? 'rotate-180 text-[#2d5a3c]' : ''
                }`} />
              </button>
              {selectedFaq === idx && (
                <div className="p-4 sm:p-5 bg-white border-t border-[#d8e8dc] text-xs sm:text-sm text-[#3d5e49] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: Resumen de Contacto Directo & Certeza Inmobi Liam (Sin Formulario) */}
      <div className="bg-gradient-to-br from-[#ffffff] via-[#f7faf8] to-[#edf4f0] text-[#1c3825] rounded-3xl p-8 sm:p-12 border border-[#cfe2d5] shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#356b44]">
              Desarrolla Inmobi Liam
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#163520]">
              Solo 8 Familias Formarán Parte de Esta Comunidad Exclusiva
            </h2>
            <p className="text-xs sm:text-sm text-[#41644d] leading-relaxed font-medium">
              El terreno de 2.800 m² se ubica en el Sector Santa Lucía / La Libertad en Tisaleo, Tungurahua. Proyecto aprobado bajo régimen de Propiedad Horizontal con escritura pública legalizada para cada propietario.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#356b44] font-semibold pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Tisaleo, Tungurahua • Clima templado
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Escritura Pública en Registro de la Propiedad
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#d2e4d8] shadow-2xs space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#eaf4ee] text-[#2d5a3c] flex items-center justify-center mx-auto">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Atención Directa
              </span>
              <h3 className="text-lg font-bold text-[#183622]">
                Inmobi Liam Desarrollos
              </h3>
              <p className="text-xs text-[#52735e] mt-1">
                Lunes a Sábado de 09:00 a 18:00
              </p>
            </div>
            <button
              onClick={onOpenDossierModal}
              className="w-full py-3 px-4 rounded-xl bg-[#2d5a3c] hover:bg-[#234830] text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#cbe4d3]" />
              <span>Ver Dossier Técnico Completo</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
