import React from 'react';
import { 
  Building2, 
  Presentation, 
  Home, 
  Calculator, 
  ShieldAlert, 
  FileDown, 
  MapPin, 
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  currentMode: 'pitch' | 'buyer';
  onModeChange: (mode: 'pitch' | 'buyer') => void;
  onOpenCostModal: () => void;
  onOpenEmergencyModal: () => void;
  onOpenDossierModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onModeChange,
  onOpenCostModal,
  onOpenEmergencyModal,
  onOpenDossierModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fbfdfc]/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand & Project Identity */}
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#cbe4d3] via-[#b2d8be] to-[#8fbc9f] flex items-center justify-center text-[#21432c] shadow-sm border border-[#a4cbb1]/60 font-bold">
              <Building2 className="w-6 h-6 text-[#21432c]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1b3524] font-display">
                  Vita Senior
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e8f3ea] text-[#2c5839] font-bold border border-[#cbe4d3]">
                  Inmobi Liam
                </span>
              </div>
              <div className="flex items-center text-xs text-[#526a5c] font-medium gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#3b734c]" />
                <span>Tisaleo, Tungurahua</span>
                <span className="text-slate-300">•</span>
                <span className="hidden sm:inline text-[#526a5c]">2.800 m² | 8 Villas</span>
              </div>
            </div>
          </div>

          {/* Mode Switcher: Dual Mode with Soft Pastel Tones */}
          <div className="flex items-center bg-[#edf3ef] p-1.5 rounded-2xl border border-[#d5e4d9]">
            <button
              onClick={() => onModeChange('pitch')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                currentMode === 'pitch'
                  ? 'bg-[#2d5a3c] text-white shadow-xs'
                  : 'text-[#415e4c] hover:text-[#1b3524] hover:bg-[#dfebe3]'
              }`}
            >
              <Presentation className="w-4 h-4" />
              <span>Pitch</span>
            </button>

            <button
              onClick={() => onModeChange('buyer')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                currentMode === 'buyer'
                  ? 'bg-[#335c81] text-white shadow-xs'
                  : 'text-[#415e4c] hover:text-[#1b3524] hover:bg-[#dfebe3]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Recorrido Familias</span>
            </button>
          </div>

          {/* Quick Action Tools (Without Rubric) */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={onOpenCostModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl text-[#274f6e] bg-[#eef5fa] hover:bg-[#e0edf6] border border-[#cbe0ee] transition-all cursor-pointer"
              title="Comparar costo de cuidado tradicional vs Vita Senior"
            >
              <Calculator className="w-3.5 h-3.5 text-[#335c81]" />
              <span>Ahorro Familiar</span>
            </button>

            <button
              onClick={onOpenEmergencyModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl text-[#843636] bg-[#fbf0f0] hover:bg-[#f7e4e4] border border-[#f0c8c8] transition-all cursor-pointer"
              title="Simulación médica de respuesta en menos de 10 min"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#b94a48]" />
              <span>&lt;10 Min Médicos</span>
            </button>

            <button
              onClick={onOpenDossierModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl text-white bg-[#2d5a3c] hover:bg-[#254b32] shadow-xs transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-[#cbe4d3]" />
              <span>Dossier Técnico</span>
            </button>
          </div>

        </div>
      </div>
      
      {/* Sub-bar for mobile fast tools */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2 bg-[#f4f8f5] border-t border-[#dce8e0] overflow-x-auto text-xs gap-2">
        <button
          onClick={onOpenCostModal}
          className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#eef5fa] border border-[#cbe0ee] text-[#274f6e] font-bold"
        >
          <Calculator className="w-3.5 h-3.5 text-[#335c81]" />
          <span>Ahorro</span>
        </button>
        <button
          onClick={onOpenEmergencyModal}
          className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#fbf0f0] border border-[#f0c8c8] text-[#843636] font-bold"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-[#b94a48]" />
          <span>&lt;10 Min</span>
        </button>
        <button
          onClick={onOpenDossierModal}
          className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#2d5a3c] text-white font-bold"
        >
          <FileDown className="w-3.5 h-3.5 text-[#cbe4d3]" />
          <span>Dossier</span>
        </button>
      </div>
    </header>
  );
};
