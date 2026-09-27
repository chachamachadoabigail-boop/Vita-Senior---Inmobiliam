import React, { useState, useEffect, useRef } from 'react';
import { 
  Image as ImageIcon, 
  Upload, 
  Maximize2, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw,
  Sparkles,
  Layers
} from 'lucide-react';

interface SmartProjectImageProps {
  imageKey: 'render' | 'villa';
  title: string;
  subtitle: string;
  className?: string;
  aspectRatio?: string;
  onImageFound?: (found: boolean) => void;
  overlayContent?: React.ReactNode;
}

export const SmartProjectImage: React.FC<SmartProjectImageProps> = ({
  imageKey,
  title,
  subtitle,
  className = '',
  aspectRatio = 'aspect-[16/9]',
  onImageFound,
  overlayContent
}) => {
  const [detectedSrc, setDetectedSrc] = useState<string | null>(null);
  const [localPreviewSrc, setLocalPreviewSrc] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState<boolean>(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Candidate file paths that the user might have saved
  const candidateExtensions = ['jpg', 'png', 'webp', 'jpeg', 'JPG', 'PNG', 'WEBP', 'JPEG'];
  const candidateUrls = [
    ...candidateExtensions.map(ext => `/images/${imageKey}.${ext}`),
    ...candidateExtensions.map(ext => `/${imageKey}.${ext}`),
  ];

  const checkCandidates = async () => {
    setIsChecking(true);
    let foundSrc: string | null = null;

    for (const url of candidateUrls) {
      const exists = await new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        // Add cache-busting timestamp to verify fresh uploads
        img.src = `${url}?t=${Date.now()}`;
      });

      if (exists) {
        foundSrc = url;
        break;
      }
    }

    setDetectedSrc(foundSrc);
    setIsChecking(false);
    if (onImageFound) {
      onImageFound(!!foundSrc);
    }
  };

  useEffect(() => {
    checkCandidates();
  }, [imageKey]);

  // Handle manual file selection for immediate browser testing
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setLocalPreviewSrc(previewUrl);
      if (onImageFound) onImageFound(true);
    }
  };

  const activeSrc = localPreviewSrc || detectedSrc;

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-xl ${className}`}>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      {activeSrc ? (
        <div className={`relative w-full ${aspectRatio} group bg-slate-950 flex items-center justify-center overflow-hidden`}>
          <img
            src={activeSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
          />

          {/* Subtitle & Badge Header */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
            <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/40 text-xs text-white flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold">{title}</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-emerald-300 text-[11px] font-medium hidden sm:inline">{subtitle}</span>
            </div>

            <div className="pointer-events-auto flex items-center gap-2">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md p-2 rounded-xl border border-slate-700 text-white shadow-lg transition-transform hover:scale-105 cursor-pointer"
                title="Ver en pantalla completa"
              >
                <Maximize2 className="w-4 h-4 text-amber-300" />
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-xs shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                title="Cambiar o probar otra imagen"
              >
                <Upload className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden md:inline text-[11px]">Probar otra</span>
              </button>
            </div>
          </div>

          {/* Optional Overlay like Hotspots */}
          {overlayContent && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="pointer-events-auto w-full h-full relative">
                {overlayContent}
              </div>
            </div>
          )}

          {/* Subtle bottom info banner */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 flex items-center justify-between text-xs text-slate-300">
            <span className="text-[11px] text-emerald-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {localPreviewSrc ? 'Previsualización cargada desde tu dispositivo' : `Archivo detectado: /public/images/${imageKey}.*`}
              </span>
            </span>
            <button
              onClick={checkCandidates}
              className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Re-escanear carpeta</span>
            </button>
          </div>
        </div>
      ) : (
        /* Empty / Not yet placed state */
        <div className={`w-full ${aspectRatio} min-h-[340px] flex flex-col items-center justify-center p-6 sm:p-8 text-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border-2 border-dashed border-amber-500/50`}>
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mb-4 text-amber-400 shadow-inner">
            <ImageIcon className="w-8 h-8" />
          </div>

          <h3 className="text-lg font-bold text-white font-display mb-1">
            Espacio Listo para: <span className="text-amber-300 font-mono">{imageKey}.jpg</span> o <span className="text-amber-300 font-mono">{imageKey}.png</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mb-6 leading-relaxed">
            Hemos creado la carpeta <code className="bg-slate-950 px-2 py-0.5 rounded text-amber-300 font-mono border border-slate-700">/public/images/</code> en tu proyecto. Guarda tu imagen allí con el nombre <span className="text-emerald-400 font-bold font-mono">{imageKey}.jpg</span>, <span className="text-emerald-400 font-bold font-mono">{imageKey}.png</span> o <span className="text-emerald-400 font-bold font-mono">{imageKey}.webp</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Cargar o Probar Imagen Ahora</span>
            </button>

            <button
              onClick={checkCandidates}
              disabled={isChecking}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin text-amber-400' : ''}`} />
              <span>{isChecking ? 'Buscando archivo...' : 'Verificar carpeta'}</span>
            </button>
          </div>

          <div className="mt-5 text-[11px] text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Formatos admitidos: <strong>.png</strong>, <strong>.jpg</strong>, <strong>.jpeg</strong>, <strong>.webp</strong></span>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && activeSrc && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-6xl w-full max-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-black/40">
            <img
              src={activeSrc}
              alt={title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </div>

          <div className="mt-4 text-center">
            <h4 className="text-white font-bold text-base font-display">{title}</h4>
            <p className="text-xs text-slate-400">{subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
};
