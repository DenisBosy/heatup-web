import { WALL_MATERIALS, WALL_INSULATION, WINDOW_TYPES, DOOR_TYPES, ROOF_TYPES, FLOOR_TYPES } from './calculations'
function Field({ label, unit, children }) {
  return (<div><label className="block text-xs font-semibold text-muted-fg mb-1">{label}{unit && <span className="font-normal"> ({unit})</span>}</label>{children}</div>)
}
function NumInput({ value, onChange, min, max, step = 0.01 }) {
  return (<input type="number" value={value} min={min} max={max} step={step} onChange={e => onChange(parseFloat(e.target.value) || 0)} className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />)
}
function Select({ value, onChange, options }) {
  return (<select value={value} onChange={e => onChange(parseInt(e.target.value))} className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">{options.map((o,i) => <option key={i} value={i}>{o.label}</option>)}</select>)
}
export default function BuildingStep({ data, onChange }) {
  const set = (key, val) => onChange({ ...data, [key]: val })
  const addWindow = () => set('windows', [...data.windows, { type: 0, width: 1.2, height: 1.4, count: 1 }])
  const removeWindow = i => set('windows', data.windows.filter((_,idx) => idx !== i))
  const setWindow = (i, key, val) => set('windows', data.windows.map((w,idx) => idx === i ? { ...w, [key]: val } : w))
  const addDoor = () => set('doors', [...data.doors, { type: 0, width: 0.9, height: 2.1, count: 1 }])
  const removeDoor = i => set('doors', data.doors.filter((_,idx) => idx !== i))
  const setDoor = (i, key, val) => set('doors', data.doors.map((d,idx) => idx === i ? { ...d, [key]: val } : d))
  return (
    <div className="space-y-8">
      <div>
        <h4 className="font-semibold text-foreground mb-4">Rozmery budovy</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Field label="Šírka budovy" unit="m"><NumInput value={data.width} onChange={v => set('width', v)} min={3} max={100} step={0.5} /></Field>
          <Field label="Dĺžka budovy" unit="m"><NumInput value={data.length} onChange={v => set('length', v)} min={3} max={200} step={0.5} /></Field>
          <Field label="Plocha podlažia" unit="m²"><input type="number" value={Math.round(data.width * data.length)} readOnly className="w-full px-3 py-2 rounded-lg border border-border text-sm bg-muted text-muted-fg" /></Field>
          <Field label="Počet podlaží"><NumInput value={data.floors} onChange={v => set('floors', Math.max(1, Math.round(v)))} min={1} max={20} step={1} /></Field>
        </div>
        <div className="mt-4 max-w-xs"><Field label="Výška podlažia" unit="m"><NumInput value={data.floorHeight} onChange={v => set('floorHeight', v)} min={2} max={5} step={0.1} /></Field></div>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-4">Obvodové steny</h4>
        <div className="grid sm:grid-cols-3 gap-4">
          <Field label="Materiál steny"><Select value={data.wallMaterial} onChange={v => { const mat = WALL_MATERIALS[v]; onChange({ ...data, wallMaterial: v, wallThickness: mat.defaultThickness }) }} options={WALL_MATERIALS} /></Field>
          <Field label="Hrúbka steny" unit="m"><NumInput value={data.wallThickness} onChange={v => set('wallThickness', v)} min={0.1} max={1} step={0.01} /></Field>
          <Field label="Izolácia"><Select value={data.wallInsulation} onChange={v => set('wallInsulation', v)} options={WALL_INSULATION} /></Field>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-foreground">Okná</h4>
          <button onClick={addWindow} className="text-xs px-3 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors">+ Pridať okno</button>
        </div>
        {data.windows.length === 0 && <p className="text-sm text-muted-fg italic">Žiadne okná. Kliknite na + Pridať okno.</p>}
        <div className="space-y-3">{data.windows.map((w,i) => (
          <div key={i} className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-3 rounded-lg bg-muted items-end">
            <div className="sm:col-span-2"><Field label="Typ"><Select value={w.type} onChange={v => setWindow(i,'type',v)} options={WINDOW_TYPES} /></Field></div>
            <Field label="Šírka (m)"><NumInput value={w.width} onChange={v => setWindow(i,'width',v)} min={0.3} max={5} step={0.1} /></Field>
            <Field label="Výška (m)"><NumInput value={w.height} onChange={v => setWindow(i,'height',v)} min={0.3} max={3} step={0.1} /></Field>
            <Field label="Počet"><div className="flex gap-2 items-center"><NumInput value={w.count} onChange={v => setWindow(i,'count',Math.max(1,Math.round(v)))} min={1} max={50} step={1} /><button onClick={() => removeWindow(i)} className="text-accent hover:text-red-700 text-lg">×</button></div></Field>
          </div>
        ))}</div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-foreground">Dvere</h4>
          <button onClick={addDoor} className="text-xs px-3 py-1.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors">+ Pridať dvere</button>
        </div>
        {data.doors.length === 0 && <p className="text-sm text-muted-fg italic">Žiadne dvere.</p>}
        <div className="space-y-3">{data.doors.map((d,i) => (
          <div key={i} className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-3 rounded-lg bg-muted items-end">
            <div className="sm:col-span-2"><Field label="Typ"><Select value={d.type} onChange={v => setDoor(i,'type',v)} options={DOOR_TYPES} /></Field></div>
            <Field label="Šírka (m)"><NumInput value={d.width} onChange={v => setDoor(i,'width',v)} min={0.6} max={3} step={0.1} /></Field>
            <Field label="Výška (m)"><NumInput value={d.height} onChange={v => setDoor(i,'height',v)} min={1.8} max={3} step={0.1} /></Field>
            <Field label="Počet"><div className="flex gap-2 items-center"><NumInput value={d.count} onChange={v => setDoor(i,'count',Math.max(1,Math.round(v)))} min={1} max={20} step={1} /><button onClick={() => removeDoor(i)} className="text-accent hover:text-red-700 text-lg">×</button></div></Field>
          </div>
        ))}</div>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-4">Strecha a podlaha</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Typ strechy"><Select value={data.roofType} onChange={v => set('roofType', v)} options={ROOF_TYPES} /></Field>
          <Field label="Typ podlahy"><Select value={data.floorType} onChange={v => set('floorType', v)} options={FLOOR_TYPES} /></Field>
        </div>
      </div>
    </div>
  )
}