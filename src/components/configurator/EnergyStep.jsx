import {
  CITIES, HEATING_SYSTEMS, HEAT_SOURCES,
  DHW_CONSUMPTION, DHW_HEAT_TYPES
} from './calculations'

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-muted-fg mb-1">{label}</label>
      {children}
    </div>
  )
}

function NumInput({ value, onChange, min, max, step = 1 }) {
  return (
    <input
      type="number"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={e => onChange(parseFloat(e.target.value) || 0)}
      className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
    />
  )
}

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={e => onChange(parseInt(e.target.value))}
      className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
    >
      {options.map((o, i) => <option key={i} value={i}>{o.label}</option>)}
    </select>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-muted-fg">{label}</span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  )
}

export default function EnergyStep({ data, building, onChange }) {
  const set = (key, val) => onChange({ ...data, [key]: val })
  const city = CITIES[data.city]
  const source = HEAT_SOURCES[data.heatSource]

  return (
    <div className="space-y-8">
      {/* Lokalita */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Lokalita</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Mesto / oblasť">
            <Select value={data.city} onChange={v => set('city', v)} options={CITIES} />
          </Field>
          <Field label="Vnútorná teplota (°C)">
            <NumInput value={data.interiorTemp} onChange={v => set('interiorTemp', v)} min={18} max={25} step={0.5} />
          </Field>
        </div>
        {city && (
          <div className="mt-4 p-4 rounded-lg bg-muted grid grid-cols-3 gap-2">
            <InfoRow label="Výpočtová teplota" value={`${city.te} °C`} />
            <InfoRow label="Priem. teplota (vyk. obdobie)" value={`${city.tes} °C`} />
            <InfoRow label="Vykurovacie dni" value={city.hdd} />
          </div>
        )}
      </div>

      {/* Vetranie */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Vetranie</h4>
        <div className="p-4 rounded-lg bg-muted mb-4 text-sm text-muted-fg">
          Objem budovy: <strong className="text-foreground">{Math.round(building.width * building.length * building.floors * building.floorHeight)} m³</strong>
        </div>
        <div className="flex gap-3">
          {[
            { val: 'natural', label: '🏠 Prirodzené vetranie (n = 0,5 h⁻¹)' },
            { val: 'recuperation', label: '♻️ Rekuperácia (n = 0,15 h⁻¹)' },
          ].map(opt => (
            <button
              key={opt.val}
              onClick={() => set('ventilation', opt.val)}
              className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium border transition-colors ${
                data.ventilation === opt.val
                  ? 'bg-primary text-white border-primary'
                  : 'border-border text-foreground hover:border-primary'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Distribučný systém */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Distribučný systém</h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {HEATING_SYSTEMS.map((hs, i) => (
            <button
              key={i}
              onClick={() => set('heatingSystem', i)}
              className={`p-4 rounded-lg text-left border transition-colors ${
                data.heatingSystem === i
                  ? 'bg-primary/5 border-primary text-primary'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="font-semibold text-sm">{hs.label}</div>
              <div className="text-xs text-muted-fg mt-0.5">Prívod {hs.tsupply}°C</div>
            </button>
          ))}
        </div>
      </div>

      {/* Zdroj tepla */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Zdroj tepla</h4>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {HEAT_SOURCES.map((hs, i) => (
            <button
              key={i}
              onClick={() => set('heatSource', i)}
              className={`p-4 rounded-lg text-left border transition-colors ${
                data.heatSource === i
                  ? 'bg-primary/5 border-primary'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="font-semibold text-sm text-foreground">{hs.label}</div>
              <div className="text-xs text-muted-fg mt-0.5">{hs.fuel} · {hs.defaultPrice} €/kWh</div>
            </button>
          ))}
        </div>
        {source && (
          <Field label="Cena paliva (€/kWh)">
            <input
              type="number"
              value={data.fuelPrice ?? source.defaultPrice}
              min={0.01}
              max={1}
              step={0.001}
              onChange={e => set('fuelPrice', parseFloat(e.target.value))}
              className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary max-w-xs"
            />
          </Field>
        )}
      </div>

      {/* TÚV */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Teplá úžitková voda (TÚV)</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Počet osôb">
            <NumInput value={data.persons} onChange={v => set('persons', Math.max(1, Math.round(v)))} min={1} max={20} step={1} />
          </Field>
          <Field label="Spotreba vody">
            <Select value={data.dhwConsumption} onChange={v => set('dhwConsumption', v)} options={DHW_CONSUMPTION} />
          </Field>
          <Field label="Typ ohrevu">
            <Select value={data.dhwHeatType} onChange={v => set('dhwHeatType', v)} options={DHW_HEAT_TYPES} />
          </Field>
          <Field label="Teplota teplej vody (°C)">
            <NumInput value={data.dhwTemp} onChange={v => set('dhwTemp', v)} min={45} max={65} step={1} />
          </Field>
        </div>
      </div>
    </d