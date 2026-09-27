import React from 'react';
import { 
  X, 
  Printer, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Scale, 
  Coins, 
  ShieldCheck, 
  Download
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectData';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Controls */}
        <div className="bg-slate-900 text-white p-4 sm:p-6 flex items-center justify-between no-print border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-emerald-400" />
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display">
                Dossier Técnico Oficial: Vita Senior (Inmobi Liam)
              </h3>
              <p className="text-xs text-slate-400">
                Documentación ejecutiva completa para el Jurado Calificador
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 bg-white">
          
          {/* Header Paper Banner */}
          <div className="border-b-2 border-slate-900 pb-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Informe de Proyecto Inmobiliario & Pitch de Concurso
                </span>
                <h1 className="text-3xl font-extrabold text-slate-950 font-display mt-1">
                  VITA SENIOR
                </h1>
                <p className="text-sm font-semibold text-slate-600 mt-0.5">
                  Desarrollador: Inmobi Liam • Ubicación: Tisaleo, Tungurahua
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-mono font-bold block mb-1">
                  PRECIO: $40.000 / VILLA
                </span>
                <span className="text-xs text-slate-500">
                  8 Unidades • Terreno 2.800 m²
                </span>
              </div>
            </div>
          </div>

          {/* Section 1: Ficha Técnica y Normativa GAD Tisaleo */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950 border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-slate-900 text-white text-xs flex items-center justify-center font-bold">1</span>
              <span>Ficha Técnica y Normativa (GAD Tisaleo)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                <strong className="block text-slate-900">Ubicación:</strong>
                <p className="text-slate-600">Parroquia matriz de Tisaleo, sector Santa Lucía / La Libertad (Provincia de Tungurahua).</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                <strong className="block text-slate-900">Superficie del Terreno Bruto:</strong>
                <p className="text-slate-600">2.800 m² de terreno matriz.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                <strong className="block text-slate-900">Zonificación y Uso (Código: 5A2-20):</strong>
                <p className="text-slate-600">Sectorización Agrícola Productiva con uso principal Agrícola-Residencial.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                <strong className="block text-slate-900">Cumplimiento de Ocupación del Suelo (COS 20%):</strong>
                <p className="text-slate-600">560 m² de huella construida (20.0% exacto). El 80% restante (2.240 m²) se preserva libre para jardines, lagos y senderos biofílicos.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                <strong className="block text-slate-900">Retiros Obligatorios (Respetados al 100%):</strong>
                <p className="text-slate-600">Frontal: 5,00 m (parqueaderos ecológicos y acceso controlado). Laterales y posterior: 3,00 m.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                <strong className="block text-slate-900">Altura y Forma:</strong>
                <p className="text-slate-600">Implantación aislada en una sola planta (cero gradas, 100% accesible), cumpliendo el límite de hasta 2 pisos / 6 metros.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Distribución Arquitectónica */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950 border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-slate-900 text-white text-xs flex items-center justify-center font-bold">2</span>
              <span>Distribución Arquitectónica (Huella Total: 560 m² = 20% COS)</span>
            </h2>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="p-3 border border-slate-200 rounded-lg">
                <strong className="text-slate-900">8 Villas Residenciales Tipo Suite (320 m² de huella total en planta baja):</strong>
                <p className="mt-1 text-slate-600">
                  Cada villa cuenta con <strong>40 m² de construcción cubierta (5.00 m × 8.00 m)</strong> más 20 m² de jardín y terraza privada a nivel de suelo (60 m² propios totales). Distribución interior:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2 text-[11px] bg-slate-50 p-2.5 rounded border border-slate-200">
                  <div>• <strong>Dormitorio 1 (Principal):</strong> 10.0 m²</div>
                  <div>• <strong>Dormitorio 2:</strong> 8.0 m²</div>
                  <div>• <strong>Sala - Comedor:</strong> 12.0 m²</div>
                  <div>• <strong>Cocina:</strong> 5.0 m²</div>
                  <div>• <strong>Baño adaptado:</strong> 5.0 m²</div>
                  <div>• <strong>Lavandería:</strong> 2.0 m²</div>
                  <div>• <strong>Porche de ingreso:</strong> 3.0 m²</div>
                  <div className="font-bold text-emerald-800">• Total Cubierta: 40.0 m²</div>
                </div>
                <p className="text-[11px] text-slate-500">
                  Especificación gerontológica: circulación amplia sin barreras, puertas de mínimo 0.90 m, baño con ducha antideslizante y barras de apoyo, piso antideslizante certificado e iluminación/ventilación natural con domótica preventiva.
                </p>
              </div>
              <div className="p-3 border border-slate-200 rounded-lg">
                <strong className="text-slate-900">Centro Comunitario (170 m² de huella):</strong>
                <p className="mt-1 text-slate-600">
                  Amplio espacio central para el salón social, comedor, cafetería y áreas de esparcimiento y estimulación cognitiva comunitaria.
                </p>
              </div>
              <div className="p-3 border border-slate-200 rounded-lg">
                <strong className="text-slate-900">Enfermería y Centro de Domótica (50 m² de huella):</strong>
                <p className="mt-1 text-slate-600">
                  Módulo de salud y monitoreo domótico ubicado junto al ingreso principal para control constante, recepción de alertas y asistencia.
                </p>
              </div>
              <div className="p-3 border border-slate-200 rounded-lg">
                <strong className="text-slate-900">Cuarto de Máquinas y Servicios (20 m² de huella):</strong>
                <p className="mt-1 text-slate-600">
                  Soporte técnico general, sistema de reserva hídrica y racks de domótica e infraestructura de servicios.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Modelo Jurídico */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950 border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-slate-900 text-white text-xs flex items-center justify-center font-bold">3</span>
              <span>Modelo Jurídico y de Escrituración</span>
            </h2>
            <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-2 text-slate-700">
              <p>
                <strong>Solución a la Restricción Rural:</strong> Ante la exigencia legal de un lote mínimo de 750 m² por predio agrícola en Tungurahua, el proyecto se constituye legalmente bajo un <strong>régimen de Copropiedad y Propiedad Horizontal Comunitaria</strong> sobre el terreno matriz de 2.800 m².
              </p>
              <p>
                <strong>Dominio Privado y Seguridad Jurídica:</strong> Cada comprador recibe una <strong>escritura pública legalizada</strong> e inscrita en el Registro de la Propiedad que garantiza el dominio exclusivo de su villa (40 m² cubiertos + 20 m² de jardín) y su alícuota proporcional sobre las áreas sociosanitarias y de recreación. Es un bien raíz 100% transaccional, hipotecable y heredable.
              </p>
            </div>
          </section>

          {/* Section 4: Modelo Financiero Inmobi Liam */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950 border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-slate-900 text-white text-xs flex items-center justify-center font-bold">4</span>
              <span>Modelo Financiero y Comercial (Inmobi Liam)</span>
            </h2>
            <div className="space-y-3 text-xs">
              <p className="text-slate-600">
                Precio objetivo de venta: <strong>$40.000 por villa</strong> ($1.000/m² de construcción con su respectivo prorrateo e infraestructura).
              </p>
              
              <table className="w-full text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-800 font-bold">
                  <tr>
                    <th className="p-2.5 border-b">Concepto de Inversión</th>
                    <th className="p-2.5 border-b text-right">Por Villa ($)</th>
                    <th className="p-2.5 border-b text-right">% Estructura</th>
                    <th className="p-2.5 border-b text-right">Total (8 Villas)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2.5">Construcción de la casa ($400/m², sismorresistente acabados senior)</td>
                    <td className="p-2.5 text-right font-mono">$16.000</td>
                    <td className="p-2.5 text-right">40.0%</td>
                    <td className="p-2.5 text-right font-mono">$128.000</td>
                  </tr>
                  <tr>
                    <td className="p-2.5">Vías y servicios externos (adoquines, luces LED, redes)</td>
                    <td className="p-2.5 text-right font-mono">$3.600</td>
                    <td className="p-2.5 text-right">9.0%</td>
                    <td className="p-2.5 text-right font-mono">$28.800</td>
                  </tr>
                  <tr>
                    <td className="p-2.5">Áreas compartidas (centro social, comedor, enfermería)</td>
                    <td className="p-2.5 text-right font-mono">$3.400</td>
                    <td className="p-2.5 text-right">8.5%</td>
                    <td className="p-2.5 text-right font-mono">$27.200</td>
                  </tr>
                  <tr>
                    <td className="p-2.5">Terreno Tisaleo ($55.000 prorrateado en 8 unidades)</td>
                    <td className="p-2.5 text-right font-mono">$6.875</td>
                    <td className="p-2.5 text-right">17.2%</td>
                    <td className="p-2.5 text-right font-mono">$55.000</td>
                  </tr>
                  <tr>
                    <td className="p-2.5">Permisos GAD, trámites e imprevistos</td>
                    <td className="p-2.5 text-right font-mono">$125</td>
                    <td className="p-2.5 text-right">0.3%</td>
                    <td className="p-2.5 text-right font-mono">$1.000</td>
                  </tr>
                  <tr className="bg-emerald-50 font-bold text-emerald-950">
                    <td className="p-2.5">Utilidad Neta Desarrollador (Inmobi Liam - 25%)</td>
                    <td className="p-2.5 text-right font-mono text-emerald-700">$10.000</td>
                    <td className="p-2.5 text-right">25.0%</td>
                    <td className="p-2.5 text-right font-mono text-emerald-700">$80.000</td>
                  </tr>
                </tbody>
              </table>

              <div className="p-3 bg-slate-900 text-white rounded-lg flex justify-between items-center">
                <span>Total Ventas Brutas: <strong>$320.000</strong></span>
                <span>Costo Total Invertido: <strong>$240.000</strong></span>
                <span className="text-emerald-400 font-bold">Ganancia Limpia: $80.000 (25.0%)</span>
              </div>
            </div>
          </section>

          {/* Section 5: Beneficios y Alícuota Familiar */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-950 border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-slate-900 text-white text-xs flex items-center justify-center font-bold">5</span>
              <span>Economía Familiar & Alícuota Mensual ($200/mes)</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              La alícuota mensual de <strong>$200</strong> cubre enfermera permanente en el conjunto, mantenimiento de lagos y jardines terapéuticos, seguridad privada y monitoreo domótico de caídas con respuesta clínica en menos de 10 minutos. Este esquema representa un ahorro superior al <strong>87%</strong> frente a la contratación particular de dichos servicios ($1.550/mes).
            </p>
          </section>

          {/* Section 6: Proyección y Replicabilidad */}
          <section className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-600">
            <strong className="text-slate-900 block">Proyección y Replicabilidad Regional:</strong>
            <p>
              Al validar este piloto en Tisaleo, Inmobi Liam cuenta con la fórmula legal y constructiva para replicar proyectos similares en Pelileo, Baños, Cevallos y la provincia de Tungurahua, abriendo un nuevo nicho de vivienda senior accesible en el Ecuador.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
