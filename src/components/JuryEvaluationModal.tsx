import React, { useState } from 'react';
import { 
  X, 
  Award, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Sparkles, 
  Printer, 
  Copy, 
  Check, 
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECT_DETAILS } from '../data/projectData';

interface JuryEvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JuryEvaluationModal: React.FC<JuryEvaluationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [scores, setScores] = useState<Record<string, number>>({
    impact: 25,
    compliance: 25,
    financial: 25,
    scalability: 24,
  });
  const [evaluatorName, setEvaluatorName] = useState<string>('Evaluador del Concurso');
  const [copied, setCopied] = useState<boolean>(false);

  const rubric = PROJECT_DETAILS.contestRubric;
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const handleScoreChange = (id: string, value: number) => {
    setScores(prev => ({ ...prev, [id]: value }));
  };

  const handleTriggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCopyVerdict = () => {
    const verdictText = `DICTAMEN DE EVALUACIÓN - CONCURSO DE PROYECTOS
Proyecto: Vita Senior (Tisaleo, Tungurahua)
Desarrollador: Inmobi Liam
Evaluador: ${evaluatorName}
Puntaje Total: ${totalScore} / 100 Puntos
- Impacto Social & Gerontológico: ${scores.impact}/25
- Rigor Técnico & Normativa GAD: ${scores.compliance}/25
- Viabilidad Económica & Margen 25%: ${scores.financial}/25
- Escalabilidad & Replicabilidad: ${scores.scalability}/25
Veredicto: ${totalScore >= 80 ? 'APROBADO CON DISTINCIÓN DE HONOR' : 'APROBADO'}`;

    navigator.clipboard.writeText(verdictText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-slate-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">
                Rúbrica Oficial de Evaluación del Concurso
              </h3>
              <p className="text-xs text-amber-100">
                Ponderación técnica de méritos: Vita Senior por Inmobi Liam
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Live Score Display */}
          <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                Calificación Consolidada
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-extrabold font-mono text-amber-300">
                  {totalScore}
                </span>
                <span className="text-sm text-slate-400">/ 100 Puntos Máximos</span>
              </div>
              <span className="text-xs text-emerald-400 font-medium block mt-1">
                {totalScore >= 90 ? '🌟 Proyecto Sobresaliente - Candidato a Primer Lugar' : 'Aprobado'}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleTriggerCelebration}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Simular Aprobación</span>
              </button>
              <button
                onClick={handleCopyVerdict}
                className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '¡Copiado!' : 'Copiar Acta'}</span>
              </button>
            </div>
          </div>

          {/* Rubric Category Sliders */}
          <div className="space-y-4">
            {rubric.map((item) => (
              <div key={item.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.category}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.benchmark}
                    </p>
                  </div>
                  <span className="text-base font-bold font-mono text-slate-900 bg-white px-3 py-1 rounded-lg border border-slate-200">
                    {scores[item.id] || 0} / {item.maxScore} pts
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max={item.maxScore}
                  step="1"
                  value={scores[item.id] || 0}
                  onChange={(e) => handleScoreChange(item.id, Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />

                <div className="flex flex-wrap gap-2 pt-1">
                  {item.keyMetrics.map((metric, mIdx) => (
                    <span key={mIdx} className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-medium">
                      ✔ {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Juror Note */}
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
            <strong>Resumen Ejecutivo para el Tribunal:</strong> Vita Senior combina de manera única el blindaje normativo frente al GAD Tisaleo (superando la barrera del lote mínimo rural de 750 m² mediante Propiedad Horizontal Comunitaria) con un modelo económico rentable del 25% y un precio popular de $40.000.
          </div>

        </div>

      </div>
    </div>
  );
};
