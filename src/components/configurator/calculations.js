// ============================================================
// Výpočet tepelných strát podľa STN 73 0540 / EN 12831
// Ročná potreba energie metódou stupňodní podľa STN EN ISO 13790
// ============================================================

// ---------------------------------------------------------------------------
// Tepelná vodivosť materiálov stien λ [W/(m·K)]
// Hodnoty podľa EN 12524:2000, ETA certifikátov a deklarácií výrobcov.
// ---------------------------------------------------------------------------
export const WALL_MATERIALS = [
  { label: 'Porotherm 38 (λ=0.17)', lambda: 0.17, defaultThickness: 0.38 },
  { label: 'Porotherm 44 T Profi (λ=0.09)', lambda: 0.09, defaultThickness: 0.44 },
  { label: 'Siporex / Ytong P2-400 (λ=0.12)', lambda: 0.12, defaultThickness: 0.30 },
  { label: 'Tehla plná pálená 45cm (λ=0.85)', lambda: 0.85, defaultThickness: 0.45 },
  { label: 'Drevená konštrukcia (λ=0.13)', lambda: 0.13, defaultThickness: 0.20 },
]

// ---------------------------------------------------------------------------
// Izolácia stien — λ podľa EN 13163 (EPS) a EN 13162 (minerálna vlna)
// ---------------------------------------------------------------------------
export const WALL_INSULATION = [
  { label: 'Bez zateplenia', lambda: null, thickness: 0 },
  { label: 'EPS 100mm (λ=0.040)', lambda: 0.040, thickness: 0.10 },
  { label: 'EPS 150mm (λ=0.040)', lambda: 0.040, thickness: 0.15 },
  { label: 'Grafitový EPS 150mm (λ=0.032)', lambda: 0.032, thickness: 0.15 },
  { label: 'Minerálna vlna 150mm (λ=0.035)', lambda: 0.035, thickness: 0.15 },
]

// ---------------------------------------------------------------------------
// Typy okien — U hodnoty celého okna [W/(m²·K)] podľa EN 14351-1
// ---------------------------------------------------------------------------
export const WINDOW_TYPES = [
  { label: 'Dvojsklo izolačné (U=1.3)', u: 1.3 },
  { label: 'Trojsklo (U=0.8)', u: 0.8 },
  { label: 'Trojsklo pasívne (U=0.6)', u: 0.6 },
  { label: 'Jednoduché zasklenie (U=2.8)', u: 2.8 },
]

// ---------------------------------------------------------------------------
// Typy dverí — U hodnoty [W/(m²·K)]
// ---------------------------------------------------------------------------
export const DOOR_TYPES = [
  { label: 'Zateplené vchodové dvere (U=1.2)', u: 1.2 },
  { label: 'Neizolované dvere (U=2.0)', u: 2.0 },
  { label: 'Pasívne dvere (U=0.8)', u: 0.8 },
]

// ---------------------------------------------------------------------------
// Typy strechy — U hodnoty [W/(m²·K)]
// ---------------------------------------------------------------------------
export const ROOF_TYPES = [
  { label: 'Zateplená šikmá strecha 200mm min. vlna (U=0.20)', u: 0.20 },
  { label: 'Zateplená šikmá strecha 300mm min. vlna (U=0.13)', u: 0.13 },
  { label: 'Plochá strecha EPS 150mm (U=0.22)', u: 0.22 },
  { label: 'Nezateplená / bez tepelnej izolácie (U=1.5)', u: 1.5 },
]

// ---------------------------------------------------------------------------
// Typy podlahy — U hodnoty [W/(m²·K)]
// Pre podlahy na zemine: redukčný faktor bu=0,60 (EN 12831, §6.3.3)
// ---------------------------------------------------------------------------
export const FLOOR_TYPES = [
  { label: 'Betón + 50mm EPS (staršia rekonštrukcia) (U=0.35)', u: 0.35 },
  { label: 'Betón + 100mm EPS (U=0.22)', u: 0.22 },
  { label: 'Betón + 150mm EPS (U=0.16)', u: 0.16 },
  { label: 'Nezateplená betónová podlaha (U=0.80)', u: 0.80 },
]

// ---------------------------------------------------------------------------
// Klimatické dáta pre slovenské mestá podľa STN 73 0540-3
//
// te   – vonkajšia výpočtová teplota [°C] (θe)
// tavg – priemerná ročná vonkajšia teplota [°C] (θm,e)
// tes  – stredná vonkajšia teplota vo vykurovacom období [°C] (θes)
// hdd  – počet dní vykurovacieho obdobia (n) pri t0=12°C
// ---------------------------------------------------------------------------
export const CITIES = [
  { label: 'Bratislava', te: -11, tavg: 9.9, tes: 4.0, hdd: 202 },
  { label: 'Žilina',     te: -15, tavg: 7.2, tes: 2.7, hdd: 232 },
  { label: 'Košice',     te: -13, tavg: 8.4, tes: 3.0, hdd: 218 },
  { label: 'Banská Bystrica', te: -15, tavg: 8.0, tes: 2.8, hdd: 223 },
  { label: 'Nitra',      te: -11, tavg: 9.6, tes: 3.8, hdd: 206 },
  { label: 'Prešov',     te: -15, tavg: 8.3, tes: 2.8, hdd: 218 },
  { label: 'Trenčín',    te: -12, tavg: 8.8, tes: 3.6, hdd: 216 },
  { label: 'Trnava',     te: -11, tavg: 9.5, tes: 3.7, hdd: 207 },
]

// ---------------------------------------------------------------------------
// Systémy odovzdávania tepla
// copAdj – korekčný faktor COP/SCOP pre teplotu vykurovacej sústavy
// ---------------------------------------------------------------------------
export const HEATING_SYSTEMS = [
  { label: 'Štandardné radiátory', tsupply: 55, label_short: 'Radiátory 55°C', copAdj: 1.0 },
  { label: 'Nízkoteplotné radiátory', tsupply: 45, label_short: 'Radiátory 45°C', copAdj: 1.10 },
  { label: 'Podlahové vykurovanie', tsupply: 35, label_short: 'Podlaha 35°C', copAdj: 1.30 },
  { label: 'Stropné vykurovanie/chladenie', tsupply: 30, label_short: 'Stropné 30°C', copAdj: 1.40 },
]

// ---------------------------------------------------------------------------
// Zdroje tepla
// cop      – SCOP resp. účinnosť; efficiency – prevádzkový koeficient
// ---------------------------------------------------------------------------
export const HEAT_SOURCES = [
  {
    label: 'Tepelné čerpadlo vzduch-voda',
    type: 'hp_air',
    cop: 2.8,
    fuel: 'Elektrina',
    defaultPrice: 0.20,
    efficiency: 1.0,
  },
  {
    label: 'Tepelné čerpadlo zem-voda',
    type: 'hp_ground',
    cop: 3.5,
    fuel: 'Elektrina',
    defaultPrice: 0.20,
    efficiency: 1.0,
  },
  {
    label: 'Plynový kondenzačný kotol',
    type: 'gas',
    cop: 1.0,
    fuel: 'Zemný plyn',
    defaultPrice: 0.072,
    efficiency: 0.97,
  },
  {
    label: 'Kotol na pelety',
    type: 'wood',
    cop: 1.0,
    fuel: 'Pelety',
    defaultPrice: 0.065,
    efficiency: 0.87,
  },
  {
    label: 'Elektrokotol',
    type: 'electric',
    cop: 1.0,
    fuel: 'Elektrina',
    defaultPrice: 0.20,
    efficiency: 0.99,
  },
]

// Spotreba TÚV
export const DHW_CONSUMPTION = [
  { label: 'Nízka (30 l/os/deň)', liters: 30 },
  { label: 'Štandardná (40 l/os/deň)', liters: 40 },
  { label: 'Vysoká (55 l/os/deň)', liters: 55 },
]

export const DHW_HEAT_TYPES = [
  { label: 'Zásobníkový ohrievač – moderný (straty ~15%)', losses: 0.15 },
  { label: 'Zásobníkový ohrievač – starý (straty ~25%)', losses: 0.25 },
  { label: 'Prietokový ohrievač (straty ~5%)', losses: 0.05 },
]

// ============================================================
// HLAVNÝ VÝPOČET
// ============================================================

/**
 * Vypočíta U-hodnotu steny vrátane izolácie a tepelných mostov [W/(m²·K)]
 * Povrchové odpory podľa EN ISO 6946: Rsi=0,13; Rse=0,04 m²K/W
 * Tepelné mosty: ΔU=0,05 (ETICS) / 0,10 (bez izolácie) podľa EN ISO 13789
 */
function wallU(material, thickness, insulation) {
  const Rsi = 0.13
  const Rse = 0.04
  const R_wall = thickness / material.lambda
  const R_ins = insulation && insulation.lambda
    ? insulation.thickness / insulation.lambda
    : 0
  const U_base = 1 / (Rsi + R_wall + R_ins + Rse)
  const deltaU = (insulation && insulation.lambda) ? 0.05 : 0.10
  return U_base + deltaU
}

/**
 * Hlavný výpočet tepelných strát a energetickej bilancie
 *
 * Tepelné straty prestupom: Q = U × A × (ti – te) [W]
 * Tepelné straty vetraním:  Q = n × V × 0,34 × (ti – te) [W]
 *
 * Ročná potreba tepla (metóda stupňodní, STN EN ISO 13790 §C.2):
 *   E = Q_návr × n × (ti – tes) × 24 / (ti – te) / 1000 [kWh/rok]
 */
export function calculate(building, energy) {
  const { width, length, floors, floorHeight, wallMaterial, wallThickness, wallInsulation,
    windows, doors, roofType, floorType } = building
  const { city, interiorTemp, ventilation, heatingSystem, heatSource,
    persons, dhwConsumption, dhwHeatType, dhwTemp } = energy

  // --- Rozmery ---
  const floorArea = width * length
  const totalArea = floorArea * floors
  const volume = totalArea * floorHeight

  // --- Plochy obálky ---
  const perimeter = 2 * (width + length)
  const wallHeight = floorHeight * floors
  const totalWindowArea = windows.reduce((sum, w) => sum + w.width * w.height * w.count, 0)
  const totalDoorArea = doors.reduce((sum, d) => sum + d.width * d.height * d.count, 0)
  const grossWallArea = perimeter * wallHeight
  const netWallArea = grossWallArea - totalWindowArea - totalDoorArea

  // --- U-hodnoty ---
  const uWall = wallU(WALL_MATERIALS[wallMaterial], wallThickness, WALL_INSULATION[wallInsulation])
  const uRoof = ROOF_TYPES[roofType].u
  const uFloor = FLOOR_TYPES[floorType].u

  // --- Teplotné rozdiely ---
  const cityData = CITIES[city]
  const dT     = interiorTemp - cityData.te   // návrhový rozdiel [K]
  const dT_avg = interiorTemp - cityData.tes  // priemerný rozdiel vo vykurovacom období [K]

  // --- Tepelné straty prestupom [W] ---
  const qWall = netWallArea * uWall * dT
  const qWindows = windows.reduce((sum, w) => {
    return sum + WINDOW_TYPES[w.type].u * w.width * w.height * w.count * dT
  }, 0)
  const qDoors = doors.reduce((sum, d) => {
    return sum + DOOR_TYPES[d.type].u * d.width * d.height * d.count * dT
  }, 0)
  const qRoof  = totalArea * uRoof * dT
  // Podlaha na zemine: redukčný faktor bu=0,60 (EN 12831 §6.3.3)
  const qFloor = totalArea * uFloor * dT * 0.60

  // --- Tepelné straty vetraním [W] ---
  // Prirodzené: n=0,50 h⁻¹; rekuperácia η=70%: n_eff=0,15 h⁻¹
  const n_air = ventilation === 'natural' ? 0.50 : 0.15
  const qVent = volume * n_air * 0.34 * dT

  const qTotal = qWall + qWindows + qDoors + qRoof + qFloor + qVent

  // --- Ročná potreba tepla na vykurovanie [kWh/rok] ---
  const eHeating = qTotal * cityData.hdd * dT_avg * 24 / dT / 1000

  // --- Ohrev TÚV [kWh/rok] ---
  const dhwData = DHW_CONSUMPTION[dhwConsumption]
  const dhwHeat = DHW_HEAT_TYPES[dhwHeatType]
  const dhwTempDelta = dhwTemp - 10
  const eBaseDHW = persons * dhwData.liters * dhwTempDelta * 4.187 / 3600 * 365
  const eDHW = eBaseDHW * (1 + dhwHeat.losses)

  const eTotal = eHeating + eDHW

  // --- Merná potreba energie [kWh/(m²·rok)] ---
  const specificEnergy = eTotal / totalArea

  // --- Energetická trieda ---
  let energyClass
  if      (specificEnergy <  30) energyClass = 'A0 – Ultranízkoenergetická'
  else if (specificEnergy <  50) energyClass = 'A1 – Nízkoenergetická'
  else if (specificEnergy <  75) energyClass = 'A2 – Nízkoenergetická'
  else if (specificEnergy < 100) energyClass = 'B – Úsporná'
  else if (specificEnergy < 150) energyClass = 'C – Štandardná'
  else if (specificEnergy < 200) energyClass = 'D – Vyššia spotreba'
  else if (specificEnergy < 300) energyClass = 'E – Nehospodárna'
  else                           energyClass = 'F – Veľmi nehospodárna'

  // --- Ročné náklady ---
  const source = HEAT_SOURCES[heatSource]
  const effectiveCOP = source.cop * source.efficiency * HEATING_SYSTEMS[heatingSystem].copAdj
  const fuelPrice = energy.fuelPrice ?? source.defaultPrice
  const annualCost = (eHeating + eDHW) / effectiveCOP * fuelPrice

  // --- Porovnanie zdrojov tepla ---
  const alternatives = HEAT_SOURCES.map(hs => {
    const eff = hs.cop * hs.efficiency
    const cost = (eHeating + eDHW) / eff * hs.defaultPrice
    return { label: hs.label, cost: Math.round(cost), cop: hs.cop, type: hs.type }
  }).sort((a, b) => a.cost - b.cost)

  // --- Odporúčania na zlepšenie ---
  //
  // SPRÁVNY vzorec úspory pre konštrukčné prvky:
  //   ΔE = ΔH [W/K] × n [dni] × dT_avg [K] × 24 [h/deň] / 1000
  //
  // ΔH = ΔU × A je v W/K (nie vo W!) — preto sa NEDELÍ dT.
  // Hlavný vzorec eHeating používa qTotal v [W] (teda obsahuje dT),
  // a preto tam dT figuruje v menovateli. Tu nie.
  const improvements = []

  // Steny
  if (uWall > 0.25) {
    const betterU = 0.14
    const dH = (uWall - betterU) * netWallArea            // [W/K]
    const saving = dH * cityData.hdd * dT_avg * 24 / 1000 // [kWh/rok]
    improvements.push({
      icon: '🧱',
      title: 'Zateplenie obvodových stien',
      current: `U = ${uWall.toFixed(2)} W/(m²·K)`,
      recommendation: 'Grafitový EPS 150mm (λ=0,032) + ETICS → U ≈ 0,14 W/(m²·K)',
      saving: Math.round(saving),
      savingEur: Math.round(saving * fuelPrice / effectiveCOP),
    })
  }

  // Strecha
  if (uRoof > 0.20) {
    const betterU = 0.20
    const dH = (uRoof - betterU) * totalArea               // [W/K]
    const saving = dH * cityData.hdd * dT_avg * 24 / 1000  // [kWh/rok]
    improvements.push({
      icon: '🏠',
      title: 'Zateplenie strechy',
      current: `U = ${uRoof.toFixed(2)} W/(m²·K)`,
      recommendation: 'Minerálna vlna 200mm → U = 0,20 W/(m²·K)',
      saving: Math.round(saving),
      savingEur: Math.round(saving * fuelPrice / effectiveCOP),
    })
  }

  // Podlaha
  if (uFloor > 0.22) {
    const betterU = 0.22
    const dH = (uFloor - betterU) * totalArea * 0.60       // [W/K] — faktor zeminy 0,60
    const saving = dH * cityData.hdd * dT_avg * 24 / 1000  // [kWh/rok]
    improvements.push({
      icon: '🏗️',
      title: 'Zateplenie podlahy',
      current: `U = ${uFloor.toFixed(2)} W/(m²·K)`,
      recommendation: 'Betón + 100mm EPS → U = 0,22 W/(m²·K)',
      saving: Math.round(saving),
      savingEur: Math.round(saving * fuelPrice / effectiveCOP),
    })
  }

  // Okná
  if (windows.length > 0) {
    const avgU = totalWindowArea > 0
      ? windows.reduce((sum, w) => sum + WINDOW_TYPES[w.type].u * w.width * w.height * w.count, 0) / totalWindowArea
      : 1.3
    if (avgU > 0.8) {
      const betterU = 0.8
      const dH = (avgU - betterU) * totalWindowArea         // [W/K]
      const saving = dH * cityData.hdd * dT_avg * 24 / 1000 // [kWh/rok]
      improvements.push({
        icon: '🪟',
        title: 'Výmena okien',
        current: `U = ${avgU.toFixed(2)} W/(m²·K)`,
        recommendation: 'Trojsklo Uw = 0,8 W/(m²·K)',
        saving: Math.round(saving),
        savingEur: Math.round(saving * fuelPrice / effectiveCOP),
      })
    }
  }

  // Vetranie — odporúčanie rekuperácie
  if (ventilation === 'natural') {
    const dH_vent = volume * (0.50 - 0.15) * 0.34          // [W/K]
    const saving = dH_vent * cityData.hdd * dT_avg * 24 / 1000 // [kWh/rok]
    improvements.push({
      icon: '💨',
      title: 'Riadené vetranie s rekuperáciou',
      current: 'Prirodzené vetranie (n = 0,50 h⁻¹)',
      recommendation: 'Rekuperačná jednotka η ≥ 70 % → ekvivalentné n = 0,15 h⁻¹',
      saving: Math.round(saving),
      savingEur: Math.round(saving * fuelPrice / effectiveCOP),
    })
  }

  // --- Rozloženie strát (pre grafy) ---
  const lossBreakdown = [
    { name: 'Steny',    value: Math.round(qWall),    pct: Math.round(qWall    / qTotal * 100) },
    { name: 'Okná',     value: Math.round(qWindows),  pct: Math.round(qWindows / qTotal * 100) },
    { name: 'Dvere',    value: Math.round(qDoors),    pct: Math.round(qDoors   / qTotal * 100) },
    { name: 'Strecha',  value: Math.round(qRoof),     pct: Math.round(qRoof    / qTotal * 100) },
    { name: 'Podlaha',  value: Math.round(qFloor),    pct: Math.round(qFloor   / qTotal * 100) },
    { name: 'Vetranie', value: Math.round(qVent),     pct: Math.round(qVent    / qTotal * 100) },
  ]

  return {
    totalArea,
    volume,
    qTotal:         Math.round(qTotal),
    qWall:          Math.round(qWall),
    qWindows:       Math.round(qWindows),
    qDoors:         Math.round(qDoors),
    qRoof:          Math.round(qRoof),
    qFloor:         Math.round(qFloor),
    qVent:          Math.round(qVent),
    lossBreakdown,
    eHeating:       Math.round(eHeating),
    eDHW:           Math.round(eDHW),
    eTotal:         Math.round(eTotal),
    specificEnergy: Math.round(specificEnergy),
    energyClass,
    annualCost:     Math.round(annualCost),
    alternatives,
    improvements,
    totalSaving:    improvements.reduce((s, i) => s + i.saving, 0),
    totalSavingEur: improvements.reduce((s, i) => s + i.savingEur, 0),
    cityData,
    heatingPct: Math.round(eHeating / eTotal * 100),
    dhwPct:     Math.round(eDHW    / eTotal * 100),
    uWall,
  }
}
