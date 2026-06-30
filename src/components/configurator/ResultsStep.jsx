import { HEAT_SOURCES, HEATING_SYSTEMS } from './calculations'
const CLASS_COLORS = { 'A0':'bg-green-600','A1':'bg-green-500','A2':'bg-lime-500','B':'bg-yellow-400','C':'bg-orange-400','D':'bg-orange-500','E':'bg-red-500' }
function polarToXY(cx,cy,r,angle) { const rad=angle*Math.PI/180; return {x:cx+r*Math.cos(rad),y:cy+r*Math.sin(rad)} }
function PieChart({ data }) {
  const total = data.reduce((s,d)=>s+d.value,0)
  const colors = ['#1e3a8a','#7c3aed','#db2777','#0891b2','#059669','#d97706']
  let cum = 0
  const paths = data.map((d,i) => {
    const angle = d.value/total*360; const start = polarToXY(50,50,40,cum-90); cum+=angle; const end = polarToXY(50,50,40,cum-90)
    return <path key={i} d={`M 50 50 L ${start.x} ${start.y} A 40 40 0 ${angle>180?1:0} 1 ${end.x} ${end.y} Z`} fill={colors[i%colors.length]} stroke="white" strokeWidth="1" />
  })
  return (<div className="flex items-center gap-6 flex-wrap"><svg viewBox="0 0 100 100" className="w-32 h-32 flex-shrink-0">{paths}</svg><div className="space-y-1.5">{data.map((d,i)=>(<div key={i} className="flex items-center gap-2 text-xs"><span className="w-3 h-3 rounded-sm flex-shrink-0" style={{background:colors[i%colors.length]}} /><span className="text-foreground">{d.name}</span><span className="text-muted-fg ml-auto pl-4">{d.pct}%</span></div>))}</div></div>)
}
export default function ResultsStep({ results, energy, onBack }) {
  if (!results) return null
  const source = HEAT_SOURCES[energy.heatSource]
  const system = HEATING_SYSTEMS[energy.heatingSystem]
  const classKey = results.energyClass.split(' ')[0]
  const classColor = CLASS_COLORS[classKey] || 'bg-gray-400'
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-muted text-center">
          <div className="text-xs text-muted-fg mb-1">Energetická trieda</div>
          <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-bold mb-1 ${classColor}`}>{results.energyClass.split('–')[0].trim()}</div>
          <div className="text-xs text-muted-fg">{results.specificEnergy} kWh/(m²·rok)</div>
        </div>
        <div className="p-4 rounded-xl bg-muted text-center"><div className="text-xs text-muted-fg mb-1">Tepelná strata</div><div className="text-2xl font-bold font-heading gradient-text">{(results.qTotal/1000).toFixed(1)}</div><div className="text-xs text-muted-fg">kW</div></div>
        <div className="p-4 rounded-xl bg-muted text-center"><div className="text-xs text-muted-fg mb-1">Ročná energia</div><div className="text-2xl font-bold font-heading gradient-text">{results.eTotal.toLocaleString()}</div><div className="text-xs text-muted-fg">kWh/rok</div></div>
        <div className="p-4 rounded-xl bg-brand-subtle border border-primary/20 text-center"><div className="text-xs text-muted-fg mb-1">Ročné náklady</div><div className="text-2xl font-bold font-heading text-primary">{results.annualCost.toLocaleString()}</div><div className="text-xs text-muted-fg">€/rok</div></div>
      </div>
      <div className="p-4 rounded-xl border border-primary/20 bg-brand-subtle">
        <div className="flex items-center gap-2 mb-2"><span>💡</span><span className="text-sm font-semibold text-primary">Aktuálna kombinácia</span></div>
        <div className="font-semibold text-foreground">{source.label} + {system.label}</div>
        <div className="text-sm text-muted-fg mt-1">{results.annualCost.toLocaleString()} €/rok</div>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-3">Porovnanie zdrojov tepla (ročné náklady)</h4>
        <div className="space-y-2">{results.alternatives.map((alt,i) => {
          const isSel = HEAT_SOURCES[energy.heatSource].label === alt.label
          const savings = results.annualCost - alt.cost
          return (<div key={i} className={`flex items-center justify-between p-3 rounded-lg text-sm ${isSel ? 'bg-primary/5 border border-primary' : 'bg-muted'}`}>
            <span className="text-foreground font-medium">{alt.label}</span>
            <div className="text-right"><div className="font-bold text-foreground">{alt.cost.toLocaleString()} €</div>{savings>0&&!isSel&&<div className="text-xs text-green-600 font-medium">Úspora: {savings.toLocaleString()} €/rok</div>}</div>
          </div>)
        })}</div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl bg-muted"><h4 className="font-semibold text-foreground mb-4 text-sm">Vykurovanie vs. TÚV</h4><PieChart data={[{name:'Vykurovanie',value:results.eHeating,pct:results.heatingPct},{name:'Ohrev TÚV',value:results.eDHW,pct:results.dhwPct}]} /></div>
        <div className="p-4 rounded-xl bg-muted"><h4 className="font-semibold text-foreground mb-4 text-sm">Rozloženie tepelných strát</h4><div className="space-y-2">{results.lossBreakdown.map(l=>(<div key={l.name} className="flex items-center gap-3 text-sm"><span className="w-16 text-right text-xs text-muted-fg flex-shrink-0">{l.name}</span><div className="flex-1 bg-white rounded-full h-3 overflow-hidden"><div className="h-full rounded-full bg-primary transition-all duration-500" style={{width:`${l.pct}%`}} /></div><span className="w-10 text-xs font-semibold text-foreground">{l.pct}%</span></div>))}</div></div>
      </div>
      {results.improvements.length > 0 && (<div>
        <h4 className="font-semibold text-foreground mb-3">🏠 Odporúčania na zlepšenie obálky budovy</h4>
        <div className="space-y-3">{results.improvements.map((imp,i)=>(<div key={i} className="p-4 rounded-xl border border-border bg-white"><div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{imp.icon}</span><div className="flex-1 min-w-0"><div className="font-semibold text-foreground text-sm">{imp.title}</div><div className="text-xs text-muted-fg mt-1">Aktuálne: {imp.current}</div><div className="text-xs text-muted-fg">Odporúčanie: {imp.recommendation}</div></div><div className="text-right flex-shrink-0"><div className="text-green-600 font-bold text-sm">{imp.savingEur} €/rok</div><div className="text-xs text-muted-fg">{imp.saving.toLocaleString()} kWh/rok</div></div></div></div>))}</div>
        <div className="text-sm text-muted-fg text-right mt-2">Celková možná úspora: <strong className="text-green-600">{results.totalSaving.toLocaleString()} kWh/rok → {results.totalSavingEur.toLocaleString()} €/rok</strong></div>
      </div>)}
      <div className="p-5 rounded-xl border border-primary/20 bg-brand-subtle text-center">
        <h4 className="font-semibold text-foreground mb-2">Máte záujem o presný výpočet?</h4>
        <p className="text-sm text-muted-fg mb-4">Tieto výsledky sú orientačné. Pre presnú projektovú dokumentáciu podľa STN EN 12831 ma kontaktujte.</p>
        <button onClick={() => document.getElementById('kontakt')?.scrollIntoView({behavior:'smooth'})} className="px-6 py-2.5 rounded-full font-semibold text-white bg-brand-gradient hover:opacity-90 transition-opacity">Kontaktujte ma →</button>
      </div>
      <p className="text-xs text-muted-fg text-center leading-relaxed">⚠️ Uvedené hodnoty sú orientačné. Výpočet vychádza zo zjednodušeného modelu podľa STN 73 0540 a nenahrádzuje odborný energetický audit ani projektovú dokumentáciu.</p>
    </div>
  )
}