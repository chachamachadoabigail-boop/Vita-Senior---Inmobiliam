import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldAlert, 
  HeartPulse, 
  Radio, 
  Truck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Play,
  RotateCcw
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface EmergencySimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencySimulationModal: React.FC<EmergencySimulationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [simulationState, setSimulationState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  const steps = PROJECT_DETAILS.emergencyProtocol.steps;

  useEffect(() => {
    let interval: any = null;
    if (simulationState === 'running') {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => {
          const next = prev + 1;
          if (next >= 2 && currentStep === 0) setCurrentStep(1);
          if (next >= 5 && currentStep === 1) setCurrentStep(2);
          if (next >= 8 && currentStep === 2) setCurrentStep(3);
          if (next >= 10) {
            setSimulationState('completed');
            clearInterval(interval);
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [simulationState, currentStep]);

  const handleStartSimulation = () => {
    setElapsedSeconds(0);
    setCurrentStep(0);
    setSimulationState('running');
  };

  const handleReset = () => {
    setElapsedSeconds(0);
    setCurrentStep(0);
    setSimulationState('idle');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-900 via-slate-900 to-slate-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">
                Protocolo de Emergencia Médica en &lt; 10 Minutos
              </h3>
              <p className="text-xs text-rose-200">
                Garantía técnica de los sensores invisibles y convenio con clínica privada
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Simulation Control Box */}
          <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block">
                Tiempo Simulado de Respuesta
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-extrabold font-mono text-white">
                  0{Math.floor(elapsedSeconds / 60)}:{elapsedSeconds % 60 < 10 ? `0${elapsedSeconds % 60}` : elapsedSeconds % 60}
                </span>
                <span className="text-xs text-slate-400">
                  / Objetivo máximo: 10:00 min
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {simulationState === 'idle' && (
                <button
                  onClick={handleStartSimulation}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 font-bold text-xs text-white shadow-lg shadow-rose-600/30 transition-all"
                >
                  <Play className="w-4 h-4" />
                  <span>Simular Caída Accidental</span>
                </button>
              )}
              {simulationState === 'running' && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-semibold animate-pulse">
                  <HeartPulse className="w-4 h-4 animate-spin text-rose-400" />
                  <span>Emergencia en curso...</span>
                </div>
              )}
              {simulationState === 'completed' && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-xs text-slate-200 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reiniciar Prueba</span>
                </button>
              )}
            </div>
          </div>

          {/* Sequential Steps Timeline */}
          <div className="space-y-3">
            {steps.map((step, idx) => {
              const isPast = idx < currentStep;
              const isCurrent = idx === currentStep && simulationState !== 'idle';
              const isFuture = idx > currentStep || simulationState === 'idle';

              return (
                <div
                  key={step.step}
                  className={`p-4 rounded-xl border transition-all ${
                    isCurrent
                      ? 'bg-rose-50 border-rose-500 ring-2 ring-rose-500/30'
                      : isPast
                      ? 'bg-emerald-50/70 border-emerald-300'
                      : 'bg-slate-50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isCurrent
                          ? 'bg-rose-600 text-white animate-bounce'
                          : isPast
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {isPast ? <CheckCircle2 className="w-4 h-4" /> : step.step}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900">
                            {step.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold">
                            {step.timeSeconds}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guarantee Footer */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <strong>Seguridad Médica Comprobada:</strong> Al contar con una enfermera viviendo en el conjunto (módulo de 50 m²) más convenio con clínica local, se elimina la angustia de las familias que trabajan en Ambato o el extranjero.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
