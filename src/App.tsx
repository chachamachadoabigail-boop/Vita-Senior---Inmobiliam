import React, { useState } from 'react';
import { Header } from './components/Header';
import { PitchDeckView } from './components/PitchDeckView';
import { BuyerTourView } from './components/BuyerTourView';
import { CostComparatorTool } from './components/CostComparatorTool';
import { EmergencySimulationModal } from './components/EmergencySimulationModal';
import { DossierModal } from './components/DossierModal';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  PhoneCall, 
  Heart,
  Presentation,
  CheckCircle2,
  Trees
} from 'lucide-react';
import { PROJECT_DETAILS } from './data/projectData';

export default function App() {
  const [currentMode, setCurrentMode] = useState<'pitch' | 'buyer'>('pitch');
  const [isCostModalOpen, setIsCostModalOpen] = useState<boolean>(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);
  const [isDossierModalOpen, setIsDossierModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-[#243329] flex flex-col font-sans selection:bg-[#cbe4d3] selection:text-[#183622]">
      
      {/* Top Application Header */}
      <Header
        currentMode={currentMode}
        onModeChange={setCurrentMode}
        onOpenCostModal={() => setIsCostModalOpen(true)}
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        onOpenDossierModal={() => setIsDossierModalOpen(true)}
      />

      {/* Reassuring Context Sub-banner */}
      <div className="bg-[#e8f1ec] text-[#294c34] border-b border-[#d1e4d7] text-xs py-2 px-4 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3b734c]" />
            <span className="font-bold">Vita Senior — Tisaleo:</span>
            <span className="hidden sm:inline text-[#4a6b54]">
              Vivienda senior accesible, enfermería, domótica y 80% de naturaleza protegida sobre 2.800 m².
            </span>
          </div>
          <div className="text-[11px] font-semibold text-[#3b734c] hidden md:block">
            Inmobi Liam • Proyecto Aprobado GAD Tisaleo (COS 20%)
          </div>
        </div>
      </div>

      {/* Main Presentation Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentMode === 'pitch' ? (
          <PitchDeckView
            onOpenCostModal={() => setIsCostModalOpen(true)}
            onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
            onOpenDossierModal={() => setIsDossierModalOpen(true)}
          />
        ) : (
          <BuyerTourView
            onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
            onOpenDossierModal={() => setIsDossierModalOpen(true)}
          />
        )}
      </main>

      {/* Standalone Cost Comparator Modal */}
      {isCostModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-5xl w-full max-h-[92vh] overflow-y-auto rounded-3xl relative shadow-2xl">
            <button
              onClick={() => setIsCostModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center text-sm font-bold shadow-md transition-colors"
            >
              ✕
            </button>
            <CostComparatorTool />
          </div>
        </div>
      )}

      {/* Emergency Simulation Modal */}
      <EmergencySimulationModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

      {/* Dossier Modal */}
      <DossierModal
        isOpen={isDossierModalOpen}
        onClose={() => setIsDossierModalOpen(false)}
      />

      {/* Footer in Gentle Pastel Tones */}
      <footer className="bg-[#e9f0ec] text-[#294c34] border-t border-[#d2e3d8] mt-12 py-10 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs text-[#486b53]">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#183622] font-bold text-base font-display">
                <Building2 className="w-5 h-5 text-[#3b734c]" />
                <span>Vita Senior</span>
              </div>
              <p className="leading-relaxed text-[#486b53]">
                Vivienda senior accesible, segura y comunitaria en la Sierra Centro del Ecuador. Desarrollado por Inmobi Liam.
              </p>
              <div className="text-[11px] text-[#295435] font-semibold">
                Tisaleo, Tungurahua • Terreno 2.800 m²
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-[#183622] font-bold uppercase tracking-wider text-[11px]">
                Marco Técnico & GAD
              </h4>
              <ul className="space-y-1.5">
                <li>• Ordenanza Municipal Código 5A2-20</li>
                <li>• COS 20.00% estricto (560 m² construidos)</li>
                <li>• 80% Naturaleza y bio-lagos (2.240 m²)</li>
                <li>• Retiros 5,00 m frontal y 3,00 m perimetrales</li>
                <li>• Implantación en 1 sola planta (cero gradas)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-[#183622] font-bold uppercase tracking-wider text-[11px]">
                Certeza Jurídica & Financiera
              </h4>
              <ul className="space-y-1.5">
                <li>• Precio unitario de venta: $40.000</li>
                <li>• Utilidad neta Inmobi Liam: $80.000 (25%)</li>
                <li>• Alícuota comunitaria integral: $200/mes</li>
                <li>• Escritura pública individualizada</li>
                <li>• Régimen de Propiedad Horizontal</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-[#183622] font-bold uppercase tracking-wider text-[11px]">
                Documentación
              </h4>
              <button
                onClick={() => setIsDossierModalOpen(true)}
                className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#dce9df] text-[#1b3823] font-bold border border-[#c5dbcc] shadow-2xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#3b734c]" />
                <span>Ver Dossier Técnico Oficial</span>
              </button>
            </div>

          </div>

          <div className="pt-6 border-t border-[#d2e3d8] flex flex-col sm:flex-row items-center justify-between text-[#597864] text-xs gap-3">
            <div>
              © 2026 Vita Senior • Inmobi Liam Desarrollos Inmobiliarios.
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>Sector Santa Lucía / La Libertad</span>
              <span>•</span>
              <span>Tisaleo, Tungurahua</span>
              <span>•</span>
              <span className="text-[#2b5837] font-semibold">8 Villas Exclusivas</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
