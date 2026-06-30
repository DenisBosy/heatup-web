const SERVICES = [
  {icon:'🔥',title:'Projekt vykurovania a prípravy teplej vody',desc:'Návrh optimálnych zdrojov tepla – tepelné čerpadlá (vzduch-voda, zem-voda), plynové kondenzačné kotly, biomasa – a distribučných systémov: podlahové, stenové aj radiátorové vykurovanie pre rodinné domy a bytové stavby.'},
  {icon:'💨',title:'Projekt vzduchotechniky a rekuperácie',desc:'Riešenia pre zdravú mikroklímu – od riadeného vetrania s rekuperáciou tepla v nízkoenergetických rodinných domoch až po priemyselnú vzduchotechniku, VZT pre administratívne budovy a odvod tepla z výrobných hál.'},
  {icon:'❄️',title:'Projekt klimatizácie a chladenia',desc:'Návrh systémov pre letný tepelný komfort – split a multisplit systémy, VRV / VRF systémy, stropné chladenie a aktivácia betónového jadra (TABS) pre administratívne a bytové projekty.'},
  {icon:'📊',title:'Energetická optimalizácia a poradenstvo TZB',desc:'Posúdenie efektivity navrhnutých riešení, výpočty tepelných strát a ziskov podľa STN EN 12831 a konzultácie pri výbere technológií s ohľadom na investičné a prevádzkové náklady.'},
  {icon:'🏗️',title:'Projekty spracované v BIM / Revit',desc:'Pracujem v prostredí BIM (Revit), čo zaručuje vysokú mieru koordinácie medzi profesiami a minimalizáciu chýb na stavbe. 3D modelovanie umožňuje presné napojenia a lepšiu vizualizáciu technických riešení.'},
]
const EXTRAS=['Výkaz výmer a rozpočet (podklad pre výber dodávateľa)','Technickú správu a výpočty tepelných strát/ziskov','Odborný autorský dozor počas realizácie']
export default function Services() {
  return (
    <section id="sluzby" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle border border-primary/20 text-primary text-xs font-semibold mb-4">Služby</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">Komplexné projekčné riešenia HVAC</h2>
          <p className="text-muted-fg max-w-2xl mx-auto">Zabezpečujem všetky stupne projektovej dokumentácie pre rodinné domy, bytové komplexy aj administratívne budovy.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((s,i) => (
            <div key={i} className="p-6 rounded-xl border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5 bg-white">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-fg leading-relaxed">{s.desc}</p>
            </div>
          ))}
          <div className="p-6 rounded-xl border border-primary/20 bg-brand-subtle md:col-span-2 lg:col-span-1">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">K projektovej dokumentácii ponúkame aj</h3>
            <ul className="space-y-2">{EXTRAS.map((e,i) => (<li key={i} className="flex items-start gap-2 text-sm text-foreground"><span className="text-accent mt-0.5 flex-shrink-0">✓</span>{e}</li>))}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}