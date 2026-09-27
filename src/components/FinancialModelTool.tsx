import React, { useState } from 'react';
import { 
  DollarSign, 
  PieChart, 
  TrendingUp, 
  BarChart3, 
  Building, 
  CheckCircle2, 
  AlertCircle,
  Briefcase,
  Layers,
  Sparkles
} from 'lucide-react';
import { PROJECT_DETAILS, VillaCostItem } from '../data/projectData';

export const FinancialModelTool: React.FC = () => {
  const [viewScope, setViewScope] = useState<'perUnit' | 'global'>('perUnit');
  const [selectedCostId, setSelectedCostId] = useState<string>('cost-6');

  const { financials } = PROJECT_DETAILS;
  const multiplier = viewScope === 'global' ? financials.totalVillas : 1;

  const selectedCost = financials.costBreakdown.find(c => c.id === selectedCostId) || financials.costBreakdown[5];

  // Break-even analysis:
  // Total Fixed & Direct Investment: $240,000 for 8 villas ($30,000 cost each)
  // Each villa sold gives $40,000 gross. 6 villas sold covers all $240,000 cost.
  // Villas 7 and 8 generate pure net cash flow!
  const breakEvenUnits = 6;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2 border border-emerald-500/30">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Modelo Financiero Inmobi Liam • Rentabilidad Blindada</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              Estructura de Costos & Margen del 25%
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Precio objetivo de $40.000 por villa ($1.000/m² de construcción con prorrateo de terreno y áreas comunales). Genera $80.000 de utilidad neta libre para Inmobi Liam.
            </p>
          </div>

          {/* Toggle Unit vs Global */}
          <div className="flex bg-slate-800 p-1.5 rounded-xl border border-slate-700 self-start md:self-auto">
            <button
              onClick={() => setViewScope('perUnit')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewScope === 'perUnit'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Por Villa Individual ($40.000)
            </button>
            <button
              onClick={() => setViewScope('global')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewScope === 'global'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Total Proyecto (8 Villas: $320.000)
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 font-semibold block uppercase">
              {viewScope === 'perUnit' ? 'Precio de Venta Villa' : 'Ingresos Brutos (8 Villas)'}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">
              ${(financials.pricePerVilla * multiplier).toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-500 block mt-0.5">
              {viewScope === 'perUnit' ? '$1.000 por m² cubierto' : '8 escrituras legalizadas'}
            </span>
          </div>

          <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200/80">
            <span className="text-xs text-blue-700 font-semibold block uppercase">
              {viewScope === 'perUnit' ? 'Costo Total de Inversión' : 'Inversión Total de Obra'}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-blue-950 font-mono">
              ${(30000 * multiplier).toLocaleString()}
            </span>
            <span className="text-[11px] text-blue-700 block mt-0.5">
              Costos directos, terreno y GAD
            </span>
          </div>

          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-300">
            <span className="text-xs text-emerald-800 font-bold block uppercase">
              {viewScope === 'perUnit' ? 'Utilidad Neta (25%)' : 'Utilidad Neta Total Inmobi Liam'}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono">
              ${(financials.costBreakdown[5].amount * multiplier).toLocaleString()}
            </span>
            <span className="text-[11px] text-emerald-700 block mt-0.5 font-medium">
              25.0% Margen neto sobre ventas
            </span>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <span className="text-xs text-amber-800 font-semibold block uppercase">
              Punto de Equilibrio
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-amber-900 font-mono">
              6 Unidades
            </span>
            <span className="text-[11px] text-amber-700 block mt-0.5">
              7ª y 8ª unidad = Ganancia 100% líquida
            </span>
          </div>
        </div>

        {/* Cost Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Table / List */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Desglose Auditado de Costos e Inversión
            </h3>

            {financials.costBreakdown.map((item) => {
              const isSelected = item.id === selectedCostId;
              const isProfit = item.category === 'profit';

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedCostId(item.id)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    isSelected
                      ? isProfit
                        ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/40'
                        : 'bg-blue-50/60 border-blue-500 ring-2 ring-blue-500/40'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-10 rounded-full ${
                        isProfit ? 'bg-emerald-500' : 'bg-slate-300'
                      }`} />
                      <div>
                        <span className={`text-sm font-bold block ${
                          isProfit ? 'text-emerald-900' : 'text-slate-900'
                        }`}>
                          {item.concept}
                        </span>
                        <span className="text-xs text-slate-500">
                          {item.percentage}% del precio total
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-base font-bold font-mono ${
                        isProfit ? 'text-emerald-700' : 'text-slate-800'
                      }`}>
                        ${(item.amount * multiplier).toLocaleString()}
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        {viewScope === 'perUnit' ? '/ villa' : 'total'}
                      </span>
                    </div>
                  </div>

                  {/* Micro Progress Bar */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
                    <div
                      className={`h-full ${isProfit ? 'bg-emerald-500' : 'bg-blue-500'}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Detail Card for Selected Cost */}
          <div className="lg:col-span-5 space-y-4">
            <div className={`p-6 rounded-2xl border ${
              selectedCost.category === 'profit'
                ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-300'
                : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Análisis de Racionalidad Financiera
              </span>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                {selectedCost.concept}
              </h4>
              <div className="flex items-baseline gap-2 my-2">
                <span className="text-2xl font-bold font-mono text-slate-900">
                  ${(selectedCost.amount * multiplier).toLocaleString()}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  ({selectedCost.percentage}% de la estructura)
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-2">
                {selectedCost.description}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-500">Cálculo Unitario:</span>
                  <span className="font-semibold text-slate-800">${selectedCost.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-500">Multiplicador (8 Villas):</span>
                  <span className="font-semibold text-slate-800">${(selectedCost.amount * 8).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Categoría Contable:</span>
                  <span className="font-semibold uppercase text-slate-800">{selectedCost.category}</span>
                </div>
              </div>
            </div>

            {/* Inmobi Liam Investor Defense Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Blindaje Financiero para el Jurado
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                El precio de <strong>$40.000</strong> es el más competitivo de Tungurahua para una vivienda con enfermería permanente y domótica. Al mantener los costos de construcción en <strong>$400/m²</strong> con materiales eficientes (hormigón armado y metal), Inmobi Liam asegura el <strong>25% de utilidad limpia</strong> sin riesgo de desfase presupuestario.
              </p>
              <div className="text-[11px] text-emerald-300 font-medium pt-2 border-t border-slate-800">
                ✔ Retorno sobre costo directo invertido: 33.3% ROI ($80k ganancia / $240k costo).
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
