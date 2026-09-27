import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingDown, 
  ShieldCheck, 
  HeartPulse, 
  Shield, 
  Trees, 
  Coffee, 
  ArrowRight,
  Sparkles,
  DollarSign,
  CheckCircle2,
  PieChart,
  Sliders,
  Check,
  Zap,
  Info
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface ExpenseItem {
  id: string;
  name: string;
  category: string;
  icon: any;
  color: string;
  bgLight: string;
  borderColor: string;
  barColor: string;
  value: number;
  min: number;
  max: number;
  step: number;
  active: boolean;
  explanation: string;
  vitaSeniorBenefit: string;
}

export const CostComparatorTool: React.FC = () => {
  // Presets
  const [selectedPreset, setSelectedPreset] = useState<'standard' | 'basic' | 'comprehensive'>('standard');

  // Dynamic Expenses in Traditional Private Home
  const [expenses, setExpenses] = useState<ExpenseItem[]>([
    {
      id: 'nurse',
      name: 'Enfermera Particular Privada',
      category: 'Salud & Cuidado',
      icon: HeartPulse,
      color: 'text-[#8f3636]',
      bgLight: 'bg-[#fdf5f5]',
      borderColor: 'border-[#f3d4d4]',
      barColor: '#b95353',
      value: 800,
      min: 300,
      max: 1400,
      step: 50,
      active: true,
      explanation: 'Turnos rotativos para control de signos vitales, administración de fármacos y primeros auxilios.',
      vitaSeniorBenefit: 'Enfermera in situ en módulo de 50 m² con domótica preventiva incluida en la comunidad.'
    },
    {
      id: 'security',
      name: 'Seguridad Privada & Monitoreo 24/7',
      category: 'Protección',
      icon: Shield,
      color: 'text-[#235378]',
      bgLight: 'bg-[#edf5fa]',
      borderColor: 'border-[#cfe2ee]',
      barColor: '#3a729e',
      value: 200,
      min: 60,
      max: 400,
      step: 20,
      active: true,
      explanation: 'Sistema de alarma con botón de pánico, central de monitoreo y rondas de vigilancia perimetral.',
      vitaSeniorBenefit: 'Garita de acceso 24/7 y sensores de caída automáticos con auxilio en <10 min.'
    },
    {
      id: 'gardening',
      name: 'Mantenimiento & Jardinería Periódica',
      category: 'Conservación',
      icon: Trees,
      color: 'text-[#2d6f42]',
      bgLight: 'bg-[#f0f8f3]',
      borderColor: 'border-[#cbe7d4]',
      barColor: '#43935d',
      value: 150,
      min: 40,
      max: 300,
      step: 25,
      active: true,
      explanation: 'Poda de césped, limpieza de canaletas, plomería de emergencia y mantenimiento exterior.',
      vitaSeniorBenefit: 'Conservación permanente de 2.240 m² de áreas verdes y bio-lagos sin mover un dedo.'
    },
    {
      id: 'social',
      name: 'Talleres Cognitivos & Recreación Externa',
      category: 'Bienestar Social',
      icon: Coffee,
      color: 'text-[#7d562b]',
      bgLight: 'bg-[#fbf7f0]',
      borderColor: 'border-[#ede2d2]',
      barColor: '#a17646',
      value: 80,
      min: 0,
      max: 250,
      step: 10,
      active: true,
      explanation: 'Talleres de memoria, yoga adaptado y transporte para socialización del adulto mayor.',
      vitaSeniorBenefit: 'Uso irrestricto del Club Social (170 m²), tertulias diarias y comedor asistido.'
    }
  ]);

  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  // Update specific expense value
  const handleValueChange = (id: string, newVal: number) => {
    setExpenses(prev => prev.map(item => item.id === id ? { ...item, value: newVal } : item));
    setSelectedPreset('standard'); // switch to custom
  };

  // Toggle active status
  const handleToggleActive = (id: string) => {
    setExpenses(prev => prev.map(item => item.id === id ? { ...item, active: !item.active } : item));
  };

  // Presets applicator
  const applyPreset = (preset: 'basic' | 'standard' | 'comprehensive') => {
    setSelectedPreset(preset);
    if (preset === 'basic') {
      setExpenses(prev => prev.map(item => {
        if (item.id === 'nurse') return { ...item, value: 500, active: true };
        if (item.id === 'security') return { ...item, value: 100, active: true };
        if (item.id === 'gardening') return { ...item, value: 80, active: true };
        if (item.id === 'social') return { ...item, value: 40, active: true };
        return item;
      }));
    } else if (preset === 'standard') {
      setExpenses(prev => prev.map(item => {
        if (item.id === 'nurse') return { ...item, value: 800, active: true };
        if (item.id === 'security') return { ...item, value: 200, active: true };
        if (item.id === 'gardening') return { ...item, value: 150, active: true };
        if (item.id === 'social') return { ...item, value: 80, active: true };
        return item;
      }));
    } else {
      setExpenses(prev => prev.map(item => {
        if (item.id === 'nurse') return { ...item, value: 1200, active: true };
        if (item.id === 'security') return { ...item, value: 300, active: true };
        if (item.id === 'gardening') return { ...item, value: 220, active: true };
        if (item.id === 'social') return { ...item, value: 150, active: true };
        return item;
      }));
    }
  };

  const vitaSeniorAliquot = PROJECT_DETAILS.aliquotServices.monthlyFee; // $200
  const villaPrice = PROJECT_DETAILS.financials.pricePerVilla; // $40,000

  // Calculate dynamic active sum
  const totalTraditionalMonthly = expenses
    .filter(e => e.active)
    .reduce((sum, e) => sum + e.value, 0);

  const totalTraditionalAnnual = totalTraditionalMonthly * 12;
  const totalVitaSeniorMonthly = vitaSeniorAliquot;
  const totalVitaSeniorAnnual = totalVitaSeniorMonthly * 12;

  const monthlySavings = Math.max(0, totalTraditionalMonthly - totalVitaSeniorMonthly);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = totalTraditionalMonthly > 0 
    ? Math.round((monthlySavings / totalTraditionalMonthly) * 100)
    : 0;

  const yearsToAmortizeVilla = annualSavings > 0 
    ? (villaPrice / annualSavings).toFixed(1) 
    : '0';

  return (
    <div className="bg-white rounded-3xl border border-[#cfe2d5] shadow-xs overflow-hidden">
      
      {/* Header Banner: Tranquil Pastel Sage & Ivory */}
      <div className="bg-gradient-to-r from-[#f0f7f3] via-[#e6f1ea] to-[#dbeef2] p-6 sm:p-8 border-b border-[#cce2d3]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d6ecde] text-[#245332] text-xs font-bold mb-2 border border-[#bfe0cc]">
              <Sparkles className="w-3.5 h-3.5 text-[#356b44]" />
              <span>Simulador Dinámico de Gastos & Ahorro Familiar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-[#15341f]">
              Gastos Particulares en Casa Propia vs Comunidad Vita Senior
            </h2>
            <p className="text-[#3b5f47] text-xs sm:text-sm mt-1 max-w-2xl font-medium">
              Interactúa con los controles, activa o desactiva rubros y visualiza en tiempo real el ahorro al unirte a la alícuota comunitaria de <strong>$200/mes</strong>.
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#cbe2d3] text-right min-w-[220px] shadow-2xs">
            <span className="text-xs uppercase tracking-wider text-[#356b44] font-bold block">
              Tu Ahorro Familiar Mensual
            </span>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#245b34] font-mono block">
              ${monthlySavings.toLocaleString()}
            </span>
            <span className="text-xs text-[#52735e] block mt-0.5 font-medium">
              ¡Ahorras el {savingsPercent}% cada mes!
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* Presets Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold text-[#183622]">
            <Sliders className="w-4 h-4 text-[#356b44]" />
            <span>Escenarios Rápidos de Gasto en Casa:</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => applyPreset('basic')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedPreset === 'basic'
                  ? 'bg-[#2d5a3c] text-white shadow-2xs'
                  : 'bg-[#edf5ef] text-[#33563e] hover:bg-[#dfeee3]'
              }`}
            >
              Cuidado Básico ($720)
            </button>

            <button
              onClick={() => applyPreset('standard')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedPreset === 'standard'
                  ? 'bg-[#2d5a3c] text-white shadow-2xs'
                  : 'bg-[#edf5ef] text-[#33563e] hover:bg-[#dfeee3]'
              }`}
            >
              Estándar Tungurahua ($1.230)
            </button>

            <button
              onClick={() => applyPreset('comprehensive')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedPreset === 'comprehensive'
                  ? 'bg-[#2d5a3c] text-white shadow-2xs'
                  : 'bg-[#edf5ef] text-[#33563e] hover:bg-[#dfeee3]'
              }`}
            >
              Cuidado Completo ($1.870)
            </button>
          </div>
        </div>

        {/* Dynamic Visual Breakdown Bar (Proportional Expense Distribution) */}
        <div className="space-y-2 bg-[#f8fbf9] p-4 sm:p-5 rounded-2xl border border-[#d8e8dc]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#1e3e27] uppercase tracking-wider flex items-center gap-1.5">
              <PieChart className="w-4 h-4 text-[#356b44]" />
              <span>Distribución Dinámica del Presupuesto Particular:</span>
            </span>
            <span className="text-xs text-[#52735e]">
              Total Mensual: <strong className="text-[#183622] font-mono text-sm">${totalTraditionalMonthly.toLocaleString()} / mes</strong>
            </span>
          </div>

          {/* Proportional Stacked Bar with Dynamic Segment Widths */}
          <div className="w-full h-5 rounded-full overflow-hidden flex bg-slate-200 shadow-inner">
            {expenses.map((item) => {
              if (!item.active || totalTraditionalMonthly === 0) return null;
              const percent = Math.round((item.value / totalTraditionalMonthly) * 100);
              const isHovered = activeHighlight === item.id;

              return (
                <div
                  key={item.id}
                  style={{ width: `${percent}%`, backgroundColor: item.barColor }}
                  className={`h-full transition-all duration-300 relative group cursor-pointer ${
                    isHovered ? 'brightness-110 ring-2 ring-white z-10' : 'opacity-90 hover:opacity-100'
                  }`}
                  onMouseEnter={() => setActiveHighlight(item.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  title={`${item.name}: $${item.value} (${percent}%)`}
                >
                  {percent >= 12 && (
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-bold tracking-tight">
                      {percent}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dynamic Interactive Legend Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {expenses.map((item) => {
              const percent = totalTraditionalMonthly > 0 && item.active
                ? Math.round((item.value / totalTraditionalMonthly) * 100)
                : 0;

              return (
                <button
                  key={item.id}
                  onClick={() => handleToggleActive(item.id)}
                  onMouseEnter={() => setActiveHighlight(item.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  className={`flex items-center gap-2 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    item.active 
                      ? 'bg-white border border-slate-300 text-slate-800 shadow-2xs' 
                      : 'bg-slate-100 border border-dashed border-slate-300 text-slate-400 opacity-60'
                  }`}
                >
                  <span 
                    className="w-2.5 h-2.5 rounded-full" 
                    style={{ backgroundColor: item.active ? item.barColor : '#94a3b8' }} 
                  />
                  <span>{item.name}</span>
                  <span className="font-mono font-bold text-slate-900">
                    {item.active ? `$${item.value}` : 'Desactivado'}
                  </span>
                  {item.active && (
                    <span className="text-[10px] text-slate-500 font-normal">
                      ({percent}%)
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Main Layout: Dynamic Expense Cards vs Vita Senior Aliquot Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Cards for each Expense */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#183622] uppercase tracking-wider">
                Desglose & Calibración de Gastos en Casa Propia
              </span>
              <span className="text-[11px] text-[#4d6d56]">
                Desliza para ajustar cada valor
              </span>
            </div>

            {expenses.map((item) => {
              const Icon = item.icon;
              const isHighlight = activeHighlight === item.id;

              return (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveHighlight(item.id)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                    item.active
                      ? `${item.bgLight} ${item.borderColor} ${isHighlight ? 'ring-2 ring-[#356b44]/40 shadow-xs' : ''}`
                      : 'bg-slate-50 border-slate-200 opacity-60'
                  }`}
                >
                  {/* Card Header & Toggle */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-2xs border ${item.borderColor}`}>
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                          {item.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.name}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-mono font-extrabold text-slate-900 bg-white px-3 py-1 rounded-xl border border-slate-300 shadow-2xs">
                        ${item.value} <span className="text-xs font-normal text-slate-500">/ mes</span>
                      </span>

                      {/* Active toggle button */}
                      <button
                        onClick={() => handleToggleActive(item.id)}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                          item.active 
                            ? 'bg-[#2d5a3c] text-white hover:bg-[#224830]' 
                            : 'bg-slate-200 text-slate-500 hover:bg-slate-300'
                        }`}
                        title={item.active ? 'Desactivar este gasto' : 'Activar este gasto'}
                      >
                        {item.active ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold">+</span>}
                      </button>
                    </div>
                  </div>

                  {/* Slider Control */}
                  {item.active && (
                    <div className="space-y-1.5 mt-3">
                      <input
                        type="range"
                        min={item.min}
                        max={item.max}
                        step={item.step}
                        value={item.value}
                        onChange={(e) => handleValueChange(item.id, Number(e.target.value))}
                        className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-[#2d5a3c] border border-slate-300"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>Min: ${item.min}</span>
                        <span className="text-[#356b44] font-bold">Valor actual: ${item.value}/mes</span>
                        <span>Max: ${item.max}</span>
                      </div>
                    </div>
                  )}

                  {/* Benefit comparison pill */}
                  <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] text-slate-700 flex items-start gap-1.5">
                    <span className="font-bold text-[#2d5a3c] flex-shrink-0">En Vita Senior:</span>
                    <span>{item.vitaSeniorBenefit}</span>
                  </div>
                </div>
              );
            })}

            {/* Total Traditional Cost Summary Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#edf3ef] border border-[#cfe0d5] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#234c31] uppercase tracking-wider block">
                  Gasto Total Estimado en Casa Tradicional
                </span>
                <span className="text-[11px] text-[#4f6e5b]">
                  {expenses.filter(e => e.active).length} rubros activos • Sin auxilio médico en &lt;10 min
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#183622] font-mono">
                  ${totalTraditionalMonthly.toLocaleString()}
                </span>
                <span className="text-xs text-[#4f6e5b] block">/ mes (${totalTraditionalAnnual.toLocaleString()}/año)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Vita Senior Mutualized Aliquot & Value */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#183622] uppercase tracking-wider">
                Solución Compartida Vita Senior
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#d6ecde] text-[#245332]">
                Alícuota Fija
              </span>
            </div>

            {/* Vita Senior Card in Soft Pastel Mint/Sage */}
            <div className="bg-gradient-to-br from-[#f2f8f4] to-[#e4f1e8] text-[#193b24] p-6 sm:p-7 rounded-3xl border-2 border-[#b9dec3] shadow-xs relative space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#d3ecd9] text-[#204a2c] uppercase tracking-wider font-display">
                    Alícuota Mensual Integral
                  </span>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-[#1b4e2a] mt-2 font-display">
                    $200.00 <span className="text-sm font-normal text-[#386445]">/ mes</span>
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#2d5a3c] text-white flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-7 h-7" />
                </div>
              </div>

              <p className="text-xs text-[#3a6247] leading-relaxed font-medium">
                Al mutualizar los servicios entre las 8 familias, cada residente disfruta de atención médica, seguridad y jardinería sin pagar sobreprecios individuales:
              </p>

              <ul className="space-y-2 text-xs text-[#2b4c35]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2d6f42] flex-shrink-0 mt-0.5" />
                  <span><strong>Enfermería y domótica preventiva</strong> in situ en módulo de 50 m².</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2d6f42] flex-shrink-0 mt-0.5" />
                  <span><strong>Sensores de caída no invasivos</strong> y respuesta médica en &lt;10 minutos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2d6f42] flex-shrink-0 mt-0.5" />
                  <span><strong>Seguridad perimetral</strong> con monitoreo 24 horas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2d6f42] flex-shrink-0 mt-0.5" />
                  <span><strong>Mantenimiento de 2.240 m²</strong> de áreas verdes y bio-huertos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2d6f42] flex-shrink-0 mt-0.5" />
                  <span><strong>Uso libre del Club Social</strong> (170 m²), comedor y terrazas.</span>
                </li>
              </ul>
            </div>

            {/* Live Financial Return Numbers */}
            <div className="bg-[#f6faf7] p-5 sm:p-6 rounded-2xl border border-[#cfe2d5] space-y-4">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white p-3.5 rounded-xl border border-[#d6e7dc] shadow-2xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#496a54] block font-bold">
                    Ahorro Familiar Anual
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#225631] font-mono block mt-0.5">
                    ${annualSavings.toLocaleString()}
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#d6e7dc] shadow-2xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#496a54] block font-bold">
                    Retorno Total de la Villa
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#225631] font-mono block mt-0.5">
                    {yearsToAmortizeVilla} años
                  </span>
                </div>
              </div>

              <div className="text-xs text-[#3d5e4a] leading-relaxed bg-[#eef6f1] p-3.5 rounded-xl border border-[#d5e7dc]">
                <p className="font-bold text-[#1e462a] mb-1">
                  Conclusión Financiera:
                </p>
                Ahorrando <strong>${monthlySavings.toLocaleString()} al mes</strong> frente a los costos particulares en casa propia, la villa de $40.000 se amortiza en tan solo <strong>{yearsToAmortizeVilla} años</strong>.
              </div>
            </div>

            {/* Comparison Visual Meter */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">Casa Propia: ${totalTraditionalMonthly}/mes</span>
                <span className="text-[#204a2c]">Vita Senior: $200/mes</span>
              </div>
              <div className="w-full h-4 bg-[#e6eee8] rounded-full overflow-hidden flex shadow-inner">
                <div 
                  className="bg-[#3b734c] h-full transition-all duration-300 flex items-center justify-center text-[10px] text-white font-bold"
                  style={{ width: `${Math.max(14, Math.min(100, (totalVitaSeniorMonthly / Math.max(1, totalTraditionalMonthly)) * 100))}%` }}
                >
                  $200
                </div>
                <div 
                  className="bg-[#245032] h-full transition-all duration-300 flex items-center justify-center text-[10px] text-[#cce5d4] font-bold"
                  style={{ width: `${Math.max(0, 100 - (totalVitaSeniorMonthly / Math.max(1, totalTraditionalMonthly)) * 100)}%` }}
                >
                  Ahorras ${monthlySavings}/mes ({savingsPercent}%)
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
