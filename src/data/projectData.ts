export interface VillaCostItem {
  id: string;
  concept: string;
  amount: number;
  percentage: number;
  description: string;
  category: 'construction' | 'infrastructure' | 'communal' | 'land' | 'permits' | 'profit';
}

export interface ArchitecturalArea {
  id: string;
  name: string;
  huellaM2: number;
  percentageCOS: number;
  description: string;
  features: string[];
  color: string;
}

export const PROJECT_DETAILS = {
  name: 'Vita Senior',
  tagline: 'Vivienda senior accesible con enfermería, domótica y comunidad protegida',
  developer: 'Inmobi Liam',
  location: {
    canton: 'Tisaleo',
    province: 'Tungurahua',
    sector: 'Santa Lucía / La Libertad',
    parish: 'Parroquia Matriz de Tisaleo',
    context: 'Entorno campestre, tranquilo, aire puro y clima templado ideal para adultos mayores',
  },
  land: {
    totalAreaM2: 2800,
    cosMaxPercent: 20.0,
    cosMaxAreaM2: 560,
    natureReservePercent: 80.0,
    natureReserveAreaM2: 2240,
    zoning: 'Sectorización Agrícola Productiva con uso principal Agrícola-Residencial (Código: 5A2-20)',
    frontSetbackM: 5.0,
    frontSetbackUse: 'Parqueaderos ecológicos, buffer vegetal y acceso controlado de seguridad',
    lateralPosteriorSetbackM: 3.0,
    lateralPosteriorUse: 'Aislamiento acústico, ventilación cruzada y senderos verdes perimetrales',
    heightRegulation: 'Implantación aislada en 1 sola planta (cero gradas). Límite de ordenanza: hasta 2 pisos / 6 metros',
  },
  legalStructure: {
    title: 'Propiedad Horizontal Comunitaria y Régimen de Copropiedad',
    ruralRequirement: 'Lote mínimo rural de 750 m² por predio agrícola en Tungurahua',
    legalSolution: 'Constitución legal sobre predio matriz de 2.800 m² bajo Régimen de Copropiedad y Propiedad Horizontal Comunitaria, cumpliendo al 100% las ordenanzas del GAD Tisaleo.',
    buyerTitle: 'Escritura pública legalizada e inscrita en el Registro de la Propiedad.',
    legalAttributes: [
      'Dominio exclusivo de la villa: 40 m² de construcción cubierta + 20 m² de jardín y terraza privada',
      'Alícuota comunitaria sobre las áreas sociosanitarias, centro comunitario, enfermería y 2.240 m² de jardines y lagos',
      'Bien raíz 100% transaccional: se puede vender libremente, hipotecar o transferir como herencia familiar',
      'Protección patrimonial garantizada y libre de gravámenes comunitarios indebidos',
    ],
  },
  financials: {
    pricePerVilla: 40000,
    pricePerM2: 1000,
    totalVillas: 8,
    totalGrossRevenue: 320000,
    totalInvestmentCost: 240000,
    totalDeveloperProfit: 80000,
    profitMarginPercent: 25.0,
    monthlyAliquot: 200,
    costBreakdown: [
      {
        id: 'cost-1',
        concept: 'Construcción de la Villa (40 m²)',
        amount: 16000,
        percentage: 40.0,
        description: 'Estructura sismorresistente en hormigón armado y metal, acabados senior, aislamiento térmico, baño adaptado y domótica de seguridad ($400/m²).',
        category: 'construction'
      },
      {
        id: 'cost-2',
        concept: 'Urbanización y Vías Exteriores',
        amount: 3600,
        percentage: 9.0,
        description: 'Calles adoquinadas accesibles sin desniveles, alumbrado LED solar inteligente, redes soterradas de agua, alcantarillado y fibra óptica.',
        category: 'infrastructure'
      },
      {
        id: 'cost-3',
        concept: 'Prorrata de Áreas Comunales',
        amount: 3400,
        percentage: 8.5,
        description: 'Construcción proporcional del Centro Comunitario (170 m²), Comedor, Cafetería, Enfermería clínica (50 m²) y Cuarto de máquinas.',
        category: 'communal'
      },
      {
        id: 'cost-4',
        concept: 'Terreno en Tisaleo ($47.000 / 8)',
        amount: 5875,
        percentage: 14.7,
        description: 'Cuota proporcional del terreno matriz de 2.800 m² de alto valor paisajístico en Santa Lucía / La Libertad ($47.000 total: $5.875 por villa).',
        category: 'land'
      },
      {
        id: 'cost-5',
        concept: 'Permisos GAD, Trámites e Imprevistos',
        amount: 1125,
        percentage: 2.8,
        description: 'Aprobación de planos arquitectónicos en el GAD Tisaleo, estudios de suelo, licencias ambientales, legalización, trámites e imprevistos ($1.125 por villa).',
        category: 'permits'
      },
      {
        id: 'cost-6',
        concept: 'Utilidad Neta Desarrollador (Inmobi Liam)',
        amount: 10000,
        percentage: 25.0,
        description: 'Margen de ganancia limpia por unidad vendida, generando $80.000 de utilidad global sobre las 8 unidades.',
        category: 'profit'
      },
    ] as VillaCostItem[],
  },
  aliquotServices: {
    monthlyFee: 200,
    servicesIncluded: [
      {
        title: 'Enfermería y Domótica Asistencial',
        description: 'Personal de salud in situ para control de signos vitales, administración supervisada de medicamentos y primera respuesta inmediata conectada a la domótica de cada villa.',
        privateMarketCost: 800,
      },
      {
        title: 'Monitoreo Domótico & Sensores Invisibles',
        description: 'Sensores de presencia y detección no invasiva de caídas o inactividad prolongada con alarma directa a garita y clínica.',
        privateMarketCost: 250,
      },
      {
        title: 'Seguridad Privada & Control de Acceso',
        description: 'Garita de acceso vehicular y peatonal 24/7 con cerramiento perimetral de seguridad y rondas nocturnas.',
        privateMarketCost: 280,
      },
      {
        title: 'Mantenimiento de 2.240 m² de Áreas Verdes y Lagos',
        description: 'Jardinería terapéutica, senderos caminables nivelados, limpieza comunitaria y conservación de bio-lagos.',
        privateMarketCost: 220,
      },
    ],
    averagePrivateFamilyCost: 1550,
    monthlySavings: 1350,
    savingsPercentage: 87.1,
  },
  architecturalAreas: [
    {
      id: 'villas',
      name: '8 Villas Residenciales (Villa Tipo Suite 40 m²)',
      huellaM2: 320,
      percentageCOS: 11.43,
      description: '8 unidades en planta baja (40 m² c/u, 5.00 m × 8.00 m) con 2 dormitorios (10 m² y 8 m²), sala-comedor (12 m²), cocina (5 m²), baño adaptado (5 m²), lavandería (2 m²), porche de ingreso (3 m²) y terraza/jardín privado de 20 m².',
      features: [
        'Dormitorio principal (10 m²) y Dormitorio 2 (8 m²)',
        'Ducha antideslizante a ras de piso con mampara y barras de apoyo ergonómicas',
        'Cero gradas y puertas de mínimo 0.90 m para silla de ruedas o andador',
        'Piso antideslizante certificado e iluminación/ventilación natural',
        'Domótica inteligente con sensores de caída invisibles conectados a enfermería'
      ],
      color: '#0284c7'
    },
    {
      id: 'community-center',
      name: 'Centro Comunitario & Social',
      huellaM2: 170,
      percentageCOS: 6.07,
      description: 'Núcleo de convivencia activa para combatir el aislamiento social y promover la estimulación cognitiva.',
      features: ['Salón de usos múltiples y talleres', 'Comedor comunitario y cocina asistida', 'Cafetería con vista a jardines', 'Área de lectura y juegos de mesa adaptados'],
      color: '#0d9488'
    },
    {
      id: 'clinic',
      name: 'Enfermería & Domótica Asistencial',
      huellaM2: 50,
      percentageCOS: 1.79,
      description: 'Módulo de enfermería y centro de monitoreo domótico ubicado de forma estratégica junto al acceso principal del conjunto.',
      features: ['Atención inmediata de enfermería', 'Protocolo de ambulancia privada en <10 minutos', 'Recepción de alertas de sensores domóticos de cada villa', 'Historial clínico digitalizado de cada residente'],
      color: '#e11d48'
    },
    {
      id: 'machines-services',
      name: 'Cuarto de Máquinas & Mantenimiento',
      huellaM2: 20,
      percentageCOS: 0.71,
      description: 'Infraestructura técnica para abastecimiento continuo de agua, bombeo hidroneumático, generador de respaldo y racks domóticos.',
      features: ['Sistema de reserva de agua potable', 'Respaldo eléctrico de emergencia para equipos médicos', 'Centralita de telecomunicaciones y fibra óptica'],
      color: '#64748b'
    },
    {
      id: 'nature-reserve',
      name: 'Área Natural, Lagos & Jardines Terapéuticos (80% Libre)',
      huellaM2: 2240,
      percentageCOS: 80.0,
      description: '2.240 m² dedicados exclusivamente al bienestar biofílico, huertos orgánicos, senderos sin obstáculos y lagos paisajísticos.',
      features: ['Senderos de caminata nivelados con pasamanos de apoyo', 'Lagos y fuentes de agua para relajación sonora', 'Huertos aromáticos y frutales adaptados en bancales elevados', 'Bancas sombreadas con vistas al volcán Tungurahua'],
      color: '#16a34a'
    }
  ] as ArchitecturalArea[],
  emergencyProtocol: {
    maxResponseTimeMinutes: 10,
    steps: [
      {
        step: 1,
        timeSeconds: '0-5 seg',
        title: 'Detección Automática Discreta',
        desc: 'Los sensores de caída o inmovilidad en la villa detectan el evento sin requerir que el residente presione botones ni lleve pulseras invasivas.',
      },
      {
        step: 2,
        timeSeconds: '10 seg',
        title: 'Alerta Dual Inmediata',
        desc: 'Señal en tiempo real a la enfermería permanente (50 m² al ingreso) y al centro de control de guardia.',
      },
      {
        step: 3,
        timeSeconds: '60 seg',
        title: 'Asistencia Médica en Sitio',
        desc: 'La enfermera in situ acude a la villa en menos de 1 minuto para evaluación clínica y primeros auxilios.',
      },
      {
        step: 4,
        timeSeconds: '6-10 min',
        title: 'Despacho de Ambulancia y Clínica Privada',
        desc: 'Convenio con clínica privada de la zona garantiza la llegada de médico o traslado en ambulancia en máximo 10 minutos.',
      }
    ]
  },
  contestRubric: [
    {
      id: 'impact',
      category: 'Impacto Social & Gerontológico',
      maxScore: 25,
      benchmark: 'Erradica el aislamiento y previene depresión con vida activa comunitaria, enfermería y domótica.',
      keyMetrics: ['8 familias protegidas', 'Atención médica <1 minuto in situ', 'Ahorro 87% en cuidados'],
    },
    {
      id: 'compliance',
      category: 'Rigor Técnico & Normativo GAD',
      maxScore: 25,
      benchmark: 'Cumple el 100% de la ordenanza 5A2-20 de Tisaleo: 20% COS estricto y solución de Propiedad Horizontal.',
      keyMetrics: ['560 m² huella exacta (20%)', 'Retiros 5m y 3m respetados', 'Escritura individual legalizada'],
    },
    {
      id: 'financial',
      category: 'Viabilidad Económica & Rentabilidad',
      maxScore: 25,
      benchmark: 'Precio competitivo de $40.000 ($1.000/m²) con margen neto auditado del 25% ($80.000) para Inmobi Liam.',
      keyMetrics: ['25% Utilidad neta', '$10.000 margen/villa', 'Costo construcción optimizado a $400/m²'],
    },
    {
      id: 'scalability',
      category: 'Escalabilidad & Replicabilidad',
      maxScore: 25,
      benchmark: 'Modelo jurídico y constructivo modular reproducible en otros cantones de Tungurahua y la Sierra Centro.',
      keyMetrics: ['Fórmula legal comunitaria probada', 'Baja inversión inicial', 'Alta demanda no atendida'],
    }
  ]
};
