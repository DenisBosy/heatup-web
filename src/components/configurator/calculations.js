// Výpočet tepelných strát podľa STN 73 0540 / EN 12831
export const WALL_MATERIALS = [
  { label: 'Porotherm 38 (λ=0.17)', lambda: 0.17, defaultThickness: 0.38 },
  { label: 'Porotherm 44 T Profi (λ=0.09)', lambda: 0.09, defaultThickness: 0.44 },
  { label: 'Siporex / ytong 30cm (λ=0.12)', lambda: 0.12, defaultThickness: 0.30 },
  { label: 'Tehla plná 45cm (λ=0.85)', lambda: 0.85, defaultThickness: 0.45 },
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
  { label: 'Jednoduché (U=2.8)', u: 2.8 },
]
export const DOOR_TYPES = [
  { label: 'Zateplené vchodové dvere (U=1.2)', u: 1.2 },
  { label: 'Neizolované dvere (U=2.0)', u: 2.0 },
  { label: 'Pasívne dvere (U=0.8)', u: 0.8 },
]
export const ROOF_TYPES = [
  { label: 'Zateplená (200mm minerálna vlna) (U=0.2)', u: 0.2 },
  { label: 'Zateplená (300mm minerálna vlna) (U=0.13)', u: 0.13 },
  { label: 'Plochá strecha EPS 150mm (U=0.22)', u: 0.22 },
  { label: 'Nezateplená (U=1.5)', u: 1.5 },
]
export const FLOOR_TYPES = [
  { label: 'Betón + 50mm EPS (U=0.35)', u: 0.35 },
  { label: 'Betón + 100mm EPS (U=0.22)', u: 0.22 },
  { label: 'Betón + 150mm EPS (U=0.16)', u: 0.16 },
  { label: 'Nezateplená (U=0.8)', u: 0.8 },
]
export const CITIES = [
  { label: 'Bratislava', te: -11, tavg: 5.8, hdd: 183 },
  { label: 'Žilina', te: -13, tavg: 3.9, hdd: 212 },
  { label: 'Košice', te: -14, tavg: 4.8, hdd: 200 },
  { label: 'Banská Bystrica', te: -14, tavg: 4.2, hdd: 215 },
  { label: 'Nitra', te: -12, tavg: 5.2, hdd: 190 },
  { label: 'Prešov', te: -15, tavg: 4.0, hdd: 220 },
  { label: 'Trenčín', te: -13, tavg: 4.5, hdd: 205 },
  { label: 'Trnava', te: -11, tavg: 5.6, hdd: 185 },
]
export const HEATING_SYSTEMS = [
  { label: 'Štandardné radiátory', tsupply: 55, copAdj: 1.0 },
  { label: 'Nízkoteplotné radiátory', tsupply: 45, copAdj: 1.1 },
  { label: 'Podlahové vykurovanie', tsupply: 35, copAdj: 1.25 },
  { label: 'Stropné vykurovanie/chladenie', tsupply: 30, copAdj: 1.35 },
]
export const HEAT_SOURCES = [
  { label: 'Tepelné čerpadlo vzduch-voda', type: 'hp_air', cop: 3.2, fuel: 'Elektrina', defaultPrice: 0.18, efficiency: 1.0 },
  { label: 'Tepelné čerpadlo zem-voda', type: 'hp_ground', cop: 3.8, fuel: 'Elektrina', defaultPrice: 0.18, efficiency: 1.0 },
  { label: 'Plynový kondenzačný kotol', type: 'gas', cop: 1.0, fuel: 'Zemný plyn', defaultPrice: 0.065, efficiency: 0.97 },
  { label: 'Kotol na drevo / pelety', type: 'wood', cop: 1.0, fuel: 'Drevo/pelety', defaultPrice: 0.06, efficiency: 0.85 },
  { label: 'Elektrokotol', type: 'electric', cop: 1.0, fuel: 'Elektrina', defaultPrice: 0.18, efficiency: 0.99 },
]
export const DHW_CONSUMPTION = [
  { label: 'Nízka (30 l/os/deň)', liters: 30 },
  { label: 'Štandardná (40 l/os/deň)', liters: 40 },
  { label: 'Vysoká (55 l/os/deň)', liters: 55 },
]
export const DHW_HEAT_TYPES = [
  { label: 'Zásobníkový – moderný (straty ~15%)', losses: 0.15 },
  { label: 'Zásobníkový – starý (straty ~25%)', losses: 0.25 },
  { label: 'Prietokový ohrievač (straty ~5%)', losses: 0.05 },
]
function wallU(material, thickness, insulation) {
  const R = 1 / (0.13 + thickness / material.lambda + (insulation && insulation.lambda ? insulation.thickness / insulation.lambda : 0) + 0.04)
  return R
}
export function calculate(building, energy) {
  const { width, length, floors, floorHeight, wallMaterial, wallThickness, wallInsulation, windows, doors, roofType, floorType } = building
  const { city, interiorTemp, ventilation, heatingSystem, heatSource, persons, dhwConsumption, dhwHeatType, dhwTemp } = energy
  const floorArea = width * length
  const totalArea = floorArea * floors
  const volume = totalArea * floorHeight
  const perimeter = 2 * (width + length)
  const wallHeight = floorHeight * floors
  const totalWindowArea = windows.reduce((s, w) => s + w.width * w.height * w.count, 0)
  const totalDoorArea = doors.reduce((s, d) => s + d.width * d.height * d.count, 0)
  const netWallArea = perimeter * wallHeight - totalWindowArea - totalDoorArea
  const uWall = wallU(WALL_MATERIALS[wallMaterial], wallThickness, WALL_INSULATION[wallInsulation])
  const cityData = CITIES[city]
  const dT = interiorTemp - cityData.te
  const qWall = netWallArea * uWall * dT
  const qWindows = windows.reduce((s, w) => s + w.width * w.height * w.count * WINDOW_TYPES[w.type].u * dT, 0)
  const qDoors = doors.reduce((s, d) => s + d.width * d.height * d.count * DOOR_TYPES[d.type].u * dT, 0)
  const qRoof = totalArea * ROOF_TYPES[roofType].u * dT
  const qFloor = totalArea * FLOOR_TYPES[floorType].u * dT * 0.6
  const qVent = volume * (ventilation === 'natural' ? 0.5 : 0.15) * 0.33 * dT
  const qTotal = qWall + qWindows + qDoors + qRoof + qFloor + qVent
  const eHeating = qTotal * cityData.hdd * 24 / dT / 1000
  const eBaseDHW = persons * DHW_CONSUMPTION[dhwConsumption].liters * (dhwTemp - 10) * 4.187 / 3600 * 365
  const eDHW = eBaseDHW * (1 + DHW_HEAT_TYPES[dhwHeatType].losses)
  const eTotal = eHeating + eDHW
  const specificEnergy = eTotal / totalArea
  let energyClass
  if (specificEnergy < 30) energyClass = 'A0 – Ultranízkoenergetická'
  else if (specificEnergy < 50) energyClass = 'A1 – Nízkoenergetická'
  else if (specificEnergy < 75) energyClass = 'A2 – Nízkoenergetická'
  else if (specificEnergy < 100) energyClass = 'B – Úsporná'
  else if (specificEnergy < 150) energyClass = 'C – Štandardná'
  else if (specificEnergy < 200) energyClass = 'D – Vyššia'
  else energyClass = 'E – Nehospodárna'
  const source = HEAT_SOURCES[heatSource]
  const effectiveCOP = source.cop * source.efficiency * HEATING_SYSTEMS[heatingSystem].copAdj
  const fuelPrice = energy.fuelPrice ?? source.defaultPrice
  const annualCost = (eHeating / effectiveCOP + eDHW / effectiveCOP) * fuelPrice
  const alternatives = HEAT_SOURCES.map(hs => ({ label: hs.label, cost: Math.round((eHeating + eDHW) / (hs.cop * hs.efficiency) * hs.defaultPrice), cop: hs.cop, type: hs.type })).sort((a, b) => a.cost - b.cost)
  const improvements = []
  if (uWall > 0.25) { const s = (uWall - 0.14) * netWallArea * cityData.hdd * 24 / 1000; improvements.push({ icon: '🧱', title: 'Zateplenie obvodových stien', current: `U = ${uWall.toFixed(2)} W/(m²·K)`, recommendation: 'Grafitový EPS 150mm → U = 0.14', saving: Math.round(s), savingEur: Math.round(s * fuelPrice / effectiveCOP) }) }
  if (FLOOR_TYPES[floorType].u > 0.22) { const s = (FLOOR_TYPES[floorType].u - 0.22) * totalArea * 0.6 * cityData.hdd * 24 / 1000; improvements.push({ icon: '🏗️', title: 'Zateplenie podlahy', current: `U = ${FLOOR_TYPES[floorType].u.toFixed(2)} W/(m²·K)`, recommendation: 'Betón + 100mm EPS → U = 0.22', saving: Math.round(s), savingEur: Math.round(s * fuelPrice / effectiveCOP) }) }
  if (windows.length > 0) { const avgU = totalWindowArea > 0 ? windows.reduce((s, w) => s + WINDOW_TYPES[w.type].u * w.width * w.height * w.count, 0) / totalWindowArea : 1.3; if (avgU > 0.8) { const s = (avgU - 0.8) * totalWindowArea * cityData.hdd * 24 / 1000; improvements.push({ icon: '🪟', title: 'Výmena okien', current: `U = ${avgU.toFixed(2)} W/(m²·K)`, recommendation: 'Trojsklo U = 0.8 W/(m²·K)', saving: Math.round(s), savingEur: Math.round(s * fuelPrice / effectiveCOP) }) } }
  const lossBreakdown = [
    { name: 'Steny', value: Math.round(qWall), pct: Math.round(qWall / qTotal * 100) },
    { name: 'Okná', value: Math.round(qWindows), pct: Math.round(qWindows / qTotal * 100) },
    { name: 'Dvere', value: Math.round(qDoors), pct: Math.round(qDoors / qTotal * 100) },
    { name: 'Strecha', value: Math.round(qRoof), pct: Math.round(qRoof / qTotal * 100) },
    { name: 'Podlaha', value: Math.round(qFloor), pct: Math.round(qFloor / qTotal * 100) },
    { name: 'Vetranie', value: Math.round(qVent), pct: Math.round(qVent / qTotal * 100) },
  ]
  return { totalArea, volume, qTotal: Math.round(qTotal), lossBreakdown, eHeating: Math.round(eHeating), eDHW: Math.round(eDHW), eTotal: Math.round(eTotal), specificEnergy: Math.round(specificEnergy), energyClass, annualCost: Math.round(annualCost), alternatives, improvements, totalSaving: improvements.reduce((s,i)=>s+i.saving,0), totalSavingEur: improvements.reduce((s,i)=>s+i.savingEur,0), cityData, heatingPct: Math.round(eHeating/eTotal*100), dhwPct: Math.round(eDHW/eTotal*100) }
}