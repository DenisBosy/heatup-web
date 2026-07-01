// ============================================================
// Výpočet tepelných strát podľa STN 73 0540 / EN 12831
// Ročná potreba energie metódou stupňodní podľa STN EN ISO 13790
// ============================================================

export const WALL_MATERIALS = [
  { label: 'Porotherm 38 (λ=0.17)', lambda: 0.17, defaultThickness: 0.38 },
  { label: 'Porotherm 44 T Profi (λ=0.09)', lambda: 0.09, defaultThickness: 0.44 },
  { label: 'Siporex / Ytong P2-400 (λ=0.12)', lambda: 0.12, defaultThickness: 0.30 },
  { label: 'Tehla plná pálená 45cm (λ=0.85)', lambda: 0.85, defaultThickness: 0.45 },
  { label: 'Drevená konštrukcia (λ=0.13)', lambda: 0.13, defaultThickness: 0.20 },
]

export const WALL_INSULATION = [
  { label: 'Bez zateplenia', lambda: null, thickness: 0 },
  { label: 'EPS 100mm (λ=0.040)', lambda: 0.040, thickness: 0.10 },
  { label: 'EPS 150mm (λ=0.040)', lambda: 0.040, thickness: 0.15 },
  { label: 'Grafitový EPS 150mm (λ=0.032)', lambda: 0.032, thickness: 0.15 },
  { label: 'Minerálna vlna 150mm (λ=0.035)', lambda: 0.035, thickness: 0.15 },
]

export const WINDOW_TYPES = [
  { label: 'Dvojsklo izolačné (U=1.3)', u: 1.3 },
  { label: 'Trojsklo (U=0.8)', u: 0.8 },
  { label: 'Trojsklo pasívne (U=0.6)', u: 0.6 },
  { label: 'Jednoduché zasklenie (U=2.8)', u: 2.8 },
]

export const DOOR_TYPES = [
  { label: 'Zateplené vchodové dvere (U=1.2)', u: 1.2 },
  { label: 'Neizolované dvere (U=2.0)', u: 2.0 },
  { label: 'Pasívne dvere (U=0.8)', u: 0.8 },
]

export const ROOF_TYPES = [
  { label: 'Zateplená šikmá strecha 200mm min. vlna (U=0.20)', u: 0.20 },
  { label: 'Zateplená šikmá strecha 300mm min. vlna (U=0.13)', u: 0.13 },
  { label: 'Plochá strecha EPS 150mm (U=0.22)', u: 0.22 },
  { label: 'Nezateplená / bez tepelnej izolácie (U=1.5)', u: 1.5 },
]

export const FLOOR_TYPES = [
  { label: 'Betón + 50mm EPS (staršia rekonštrukcia) (U=0.35)', u: 0.35 },
  { label: 'Betón + 100mm EPS (U=0.22)', u: 0.22 },
  { label: 'Betón + 150mm EPS (U=0.16)', u: 0.16 },
  { label: 'Nezateplená betónová podlaha (U=0.80)', u: 0.80 },
]

// Klimatické dáta podľa STN 73 0540-3
// te  = vonkajšia výpočtová teplota [°C]
// tavg = priemerná ročná teplota [°C]
// tes  = stredná teplota vykurovacieho obdobia [°C] (pri t0=12°C)
// hdd  = počet dní vykurovacieho obdobia
export const CITIES = [
  { label: 'Bratislava',     te: -11, tavg: 9.9, tes: 4.0, hdd: 202 },
  { label: 'Žilina',         te: -15, tavg: 7.2, tes: 2.7, hdd: 232 },
  { label: 'Košice',         te: -13, tavg: 8.4, tes: 3.0, hdd: 218 },
  { label: 'Banská Bystrica',te: -15, tavg: 8.0, tes: 2.8, hdd: 223 },
  { label: 'Nitra',          te: -11, tavg: 9.6, tes: 3.8, hdd: 206 },
  { label: 'Prešov',         te: -15, tavg: 8.3, tes: 2.8, hdd: 218 },
  { label: 'Trenčín',        te: -12, tavg: 8.8, tes: 3.6, hdd: 216 },
  { label: 'Trnava',         te: -11, tavg: 9.5, tes: 3.7, hdd: 207 },
]

export const HEATING_SYSTEMS = [
  { label: 'Štandardné radiátory',          tsupply: 55, label_short: 'Radiátory 55°C', copAdj: 1.00 },
  { label: 'Nízkoteplotné radiátory',        tsupply: 45, label_short: 'Radiátory 45°C', copAdj: 1.10 },
  { label: 'Podlahové vykurovanie',          tsupply: 35, label_short: 'Podlaha 35°C',   copAdj: 1.30 },
  { label: 'Stropné vykurovanie/chladenie',  tsupply: 30, label_short: 'Stropné 30°C',   copAdj: 1.40 },
]

export const HEAT_SOURCES = [
  { label: 'Tepelné čerpadlo vzduch-voda', type: 'hp_air',    cop: 2.8, fuel: 'Elektrina',   defaultPrice: 0.20, efficiency: 1.0 },
  { label: 'Tepelné čerpadlo zem-voda',    type: 'hp_ground', cop: 3.5, fuel: 'Elektrina',   defaultPrice: 0.20, efficiency: 1.0 },
  { label: 'Plynový kondenzačný kotol',    type: 'gas',       cop: 1.0, fuel: 'Zemný plyn',  defaultPrice: 0.072, efficiency: 0.97 },
  { label: 'Kotol na pelety',              type: 'wood',      cop: 1.0, fuel: 'Pelety',       defaultPrice: 0.065, efficiency: 0.87 },
  { label: 'Elektrokotol',                 type: 'electric',  cop: 1.0, fuel: 'Elektrina',   defaultPrice: 0.20, efficiency: 0.99 },
]

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
// POMOCNÁ FUNKCIA
// ============================================================

/**
 * U-hodnota steny vrátane ΔU tepelných mostov [W/(m²·K)]
 * Rsi=0,13; Rse=0,04 podľa EN ISO 6946
 * ΔU=0,05 pre ETICS; ΔU=0,10 pre nezateplenú murovanú konštrukciu
 */
function wallU(material, thickness, insulation) {
  const Rsi = 0.13
  const Rse = 0.04
  const R_wall = thickness / material.lambda
  const R_ins = (insulation && insulation.lambda) ? insulation.thickness / insulation.lambda : 0
  const U_base = 1 / (Rsi + R_wall + R_ins + Rse)
  const deltaU = (insulation && insulation.lambda) ? 0.05 : 0.10
  return U_base + deltaU
}

// ============================================================
// HLAVNÝ VÝPOČET
// ============================================================

/**
 * Ročná potreba tepla (metóda stupňodní, STN EN ISO 13790 §C.2):
 *   E = Q_návr [W] × n [dni] × (ti – tes) [K] × 24 [h/deň]
 *       ─────────────────────────────────────────────────────
 *                     (ti – te) [K] × 1000
 */
export function calculate(building, energy) {
  const { width, length, floors, floorHeight, wallMaterial, wallThickness, wallInsulation,
    windows, doors, roofType, floorType } = building
  const { city, interiorTemp, ventilation, heatingSystem, heatSource,
    persons, dhwConsumption, dhwHeatType, dhwTemp } = energy

  const floorArea = width * length
  const totalArea = floorArea * floors
  const volume = totalArea * floorHeight

  const perimeter = 2 * (width + length)
  const wallHeight = floorHeight * floors
  const totalWindowArea = windows.reduce((sum, w) => sum + w.width * w.height * w.count, 0)
  const totalDoorArea = doors.reduce((sum, d) => sum + d.width * d.height * d.count, 0)
  const grossWallArea = perimeter * wallHeight
  const netWallArea = grossWallArea - totalWindowArea - totalDoorArea

  const uWall = wallU(WALL_MATERIALS[wallMaterial], wallThickness, WALL_INSULATION[wallInsulation])
  const uRoof = ROOF_TYPES[roofType].u
  const uFloor = FLOOR_TYPES[floorType].u

  const cityData = CITIES[city]
  const dT     = interiorTemp - cityData.te   // návrhový teplotný rozdiel [K]
  const dT_avg = interiorTemp - cityData.tes  // priemerný rozdiel vykurovacieho obdobia [K]

  // Tepelné straty prestupom [W]
  const qWall    = netWallArea * uWall * dT
  const qWindows = windows.reduce((sum, w) => sum + WINDOW_TYPES[w.type].u * w.width * w.height * w.count * dT, 0)
  const qDoors   = doors.reduce((sum, d) => sum + DOOR_TYPES[d.type].u * d.width * d.height * d.count * dT, 0)
  const qRoof    = totalArea * uRoof * dT
  const qFloor   = totalArea * uFloor * dT * 0.60  // bu=0,60 pre podlahu na zemine (EN 12831)

  // Tepelné straty vetraním [W] – 0,34 = rho*cp/3600 [Wh/(m³·K)]
  const n_air = ventilation === 'natural' ? 0.50 : 0.15
  const qVent = volume * n_air * 0.34 * dT

  const qTotal = qWall + qWindows + qDoors + qRoof + qFloor + qVent

  // Ročná potreba tepla na vykurovanie [kWh/rok] – metóda stupňodní
  const eHeating = qTotal * cityData.hdd * dT_avg * 24 / dT / 1000

  // Ohrev TÚV [kWh/rok]
  const dhwData = DHW_CONSUMPTION[dhwConsumption]
  const dhwHeat = DHW_HEAT_TYPES[dhwHeatType]
  const dhwTempDelta = dhwTemp - 10
  const eBaseDHW = persons * dhwData.liters * dhwTempDelta * 4.187 / 3600 * 365
  const eDHW = eBaseDHW * (1 + dhwHeat.losses)

  const eTotal = eHeating + eDHW
  const specificEnergy = eTotal / totalArea

  // Energetická trieda (vyhláška 364/2012 Z.z.)
  let energyClass
  if      (specificEnergy <  30) energyClass = 'A0 – Ultranízkoenergetická'
  else if (specificEnergy <  50) energyClass = 'A1 – Nízkoenergetická'
  else if (specificEnergy <  75) energyClass = 'A2 – Nízkoenergetická'
  else if (specificEnergy < 100) energyClass = 'B – Úsporná'
  else if (specificEnergy < 150) energyClass = 'C – Štandardná'
  else if (specificEnergy < 200) energyClass = 'D – Vyššia spotreba'
  else if (specificEnergy < 300) energyClass = 'E – Nehospodárna'
  else                           energyClass = 'F – Veľmi nehospodárna'

  // Ročné náklady
  const source = HEAT_SOURCES[heatSource]
  const effectiveCOP = source.cop * source.efficiency * HEATING_SYSTEMS[heatingSystem].copAdj
  const fuelPrice = energy.fuelPrice ?? source.defaultPrice
  const annualCost = (eHeating + eDHW) / effectiveCOP * fuelPrice

  // Porovnanie zdrojov
  const alternatives = HEAT_SOURCES.map(hs => {
    const eff = hs.cop * hs.efficiency
    const cost = (eHeating + eDHW) / eff * hs.defaultPrice
    return { label: hs.label, cost: Math.round(cost), cop: hs.cop, type: hs.type }
  }).sort((a, b) => a.cost - b.cost)

  // Odporúčania – úspora kWh = ΔU × A × n × dT_avg × 24 / dT / 1000
  const improvements = []

  if (uWall > 0.25) {
    const betterU = 0.14
    const saving = (uWall - betterU) * netWallArea * cityData.hdd * dT_avg * 24 / dT / 1000
    improvements.push({
      icon: '🧱', title: 'Zateplenie obvodových stien',
      current: `U = ${uWall.toFixed(2)} W/(m²·K)`,
      recommendation: 'Grafitový EPS 150mm (λ=0,032) + ETICS → U ≈ 0,14 W/(m²·K)',
      saving: Math.round(saving), savingEur: Math.round(saving * fuelPrice / effectiveCOP),
    })
  }

  if (uFloor > 0.22) {
    const betterU = 0.22
    const saving = (uFloor - betterU) * totalArea * 0.60 * cityData.hdd * dT_avg * 24 / dT / 1000
    improvements.push({
      icon: '🏗️', title: 'Zateplenie podlahy',
      current: `U = ${uFloor.toFixed(2)} W/(m²·K)`,
      recommendation: 'Betón + 100mm EPS → U = 0,22 W/(m²·K)',
      saving: Math.round(saving), savingEur: Math.round(saving * fuelPrice / effectiveCOP),
    })
  }

  if (windows.length > 0) {
    const avgU = totalWindowArea > 0
      ? windows.reduce((sum, w) => sum + WINDOW_TYPES[w.type].u * w.width * w.height * w.count, 0) / totalWindowArea
      : 1.3
    if (avgU > 0.8) {
      const betterU = 0.8
      const saving = (avgU - betterU) * totalWindowArea * cityData.hdd * dT_avg * 24 / dT / 1000
      improvements.push({
        icon: '🪟', title: 'Výmena okien',
        current: `U = ${avgU.toFixed(2)} W/(m²·K)`,
        recommendation: 'Trojsklo Uw = 0,8 W/(m²·K)',
        saving: Math.round(saving), savingEur: Math.round(saving * fuelPrice / effectiveCOP),
      })
    }
  }

  const lossBreakdown = [
    { name: 'Steny',    value: Math.round(qWall),    pct: Math.round(qWall    / qTotal * 100) },
    { name: 'Okná',     value: Math.round(qWindows), pct: Math.round(qWindows / qTotal * 100) },
    { name: 'Dvere',    value: Math.round(qDoors),   pct: Math.round(qDoors   / qTotal * 100) },
    { name: 'Strecha',  value: Math.round(qRoof),    pct: Math.round(qRoof    / qTotal * 100) },
    { name: 'Podlaha',  value: Math.round(qFloor),   pct: Math.round(qFloor   / qTotal * 100) },
    { name: 'Vetranie', value: Math.round(qVent),    pct: Math.round(qVent    / qTotal * 100) },
  ]

  return {
    totalArea, volume,
    qTotal: Math.round(qTotal), qWall: Math.round(qWall), qWindows: Math.round(qWindows),
    qDoors: Math.round(qDoors), qRoof: Math.round(qRoof), qFloor: Math.round(qFloor), qVent: Math.round(qVent),
    lossBreakdown,
    eHeating: Math.round(eHeating), eDHW: Math.round(eDHW), eTotal: Math.round(eTotal),
    specificEnergy: Math.round(specificEnergy), energyClass,
    annualCost: Math.round(annualCost), alternatives,
    improvements,
    totalSaving: improvements.reduce((s, i) => s + i.saving, 0),
    totalSavingEur: improvements.reduce((s, i) => s + i.savingEur, 0),
    cityData,
    heatingPct: Math.round(eHeating / eTotal * 100),
    dhwPct: Math.round(eDHW / eTotal * 100),
    uWall,
  }
}
