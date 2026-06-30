import { useState } from 'react'
import BuildingStep from './BuildingStep'
import EnergyStep from './EnergyStep'
import ResultsStep from './ResultsStep'
import { calculate, CITIES } from './calculations'
const DEFAULT_BUILDING = { width: 10, length: 12, floors: 1, floorHeight: 2.8, wallMaterial: 0, wallThickness: 0.38, wallInsulation: 0, windows: [{ type: 0, width: 1.2, height: 1.4, count: 4 }], doors: [{ type: 0, width: 0.9, height: 2.1, count: 1 }], roofType: 0, floorType: 0 }
const DEFAULT_ENERGY = { city: 1, interiorTemp: 20, ventilation: 'natural', heatingSystem: 0, heatSource: 2, fuelPrice: null, persons: 3, dhwConsumption: 1, dhwHeatType: 0, dhwTemp: 55 }
const STEPS = ['Budova', 'Energia', 'Výsledky']
const STEP_ICONS = ['🏠', '⚡', '📊']
export default function Configurator() {
  const [step, setStep] = useState(0)
  const [building, setBuilding] = useState(DEFAULT_BUILDING)
  const [energy, setEnergy] = useState(DEFAULT_ENERGY)
  const [results, setResults] = useState(null)
  const goNext = () => { if (step === 1) setResults(calculate(building, energy)); setStep(s => Math.min(s+1, 2)) }
  const goBack = () => setStep(s => Math.max(s-1, 0))
  return (
    <section id="konfigurator" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle border border-primary/20 text-primary text-xs font-semibold mb-4">Konfigurátor vykurovania</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">Optimalizácia vášho vykurovania</h2>
          <p className="text-muted-fg max-w-xl mx-auto">Zadajte parametre vašej budovy a získajte orientačný výpočet tepelných strát, porovnanie zdrojov tepla a odporúčanie optimálneho riešenia.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-border card-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/50">
              <div className="flex items-center gap-2 mb-1"><span>🏠</span><h3 className="font-heading font-bold text-foreground">Energetický konfigurátor</h3></div>
              <p className="text-xs text-muted-fg">Výpočet tepelných strát a ročnej potreby energie podľa STN 73 0540</p>
            </div>
            <div className="px-6 py-4 border-b border-border">
              <div className="flex items-center justify-center gap-2">{STEPS.map((s,i) => (
                <div key={i} className="flex items-center">
                  <button onClick={() => i<step && setStep(i)} disabled={i>step} className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${i===step?'bg-primary text-white':i<step?'bg-green-100 text-green-700 cursor-pointer hover:bg-green-200':'bg-muted text-muted-fg cursor-default'}`}><span>{STEP_ICONS[i]}</span>{s}</button>
                  {i<STEPS.length-1 && <div className={`w-8 h-0.5 mx-1 ${i<step?'bg-green-400':'bg-border'}`} />}
                </div>
              ))}</div>
            </div>
            <div className="px-6 py-6">
              {step===0 && <BuildingStep data={building} onChange={setBuilding} />}
              {step===1 && <EnergyStep data={energy} building={building} onChange={setEnergy} />}
              {step===2 && <ResultsStep results={results} energy={energy} onBack={goBack} />}
            </div>
            <div className="px-6 py-4 border-t border-border bg-muted/50 flex justify-between items-center">
              {step>0 ? (<button onClick={goBack} className="px-5 py-2 rounded-lg text-sm font-medium text-foreground border border-border hover:border-primary hover:text-primary transition-colors">← Späť</button>) : <div />}
              {step<2 && (<button onClick={goNext} className="px-6 py-2 rounded-lg text-sm font-semibold text-white bg-brand-gradient hover:opacity-90 transition-opacity">{step===1?'Vypočítať výsledky →':'Ďalej → Energia a lokalita'}</button>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}