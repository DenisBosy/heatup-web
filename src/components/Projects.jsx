import { useState } from 'react'

const PROJECTS = [
  {
    img: 'https://www.heatup.sk/assets/view-1-Dyjczf_M.jpg',
    type: 'PROJEKT STAVBY (DRS)',
    year: '2025',
    title: 'Campus Univerzity Alexandra Dubčeka v Trenčíne',
    desc: 'Stropné vykurovanie a chladenie',
    tags: ['Stropné vykurovanie', 'Stropné chladenie'],
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-tDWB-vBY.png',
    type: 'PROJEKT STAVBY (DRS)',
    year: '2024',
    title: 'Odovzdávacia stanica tepla pre bytový dom',
    desc: 'Vykurovanie a príprava teplej pitnej vody z horúcovodu',
    tags: ['Odovzdávacia stanica tepla', 'Horúcovod'],
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-Bob0EynY.png',
    type: 'PROJEKT STAVBY (DRS)',
    year: '2024',
    title: 'Zdroj chladu pre bytový dom',
    desc: 'Kombinovaný change-over systém vykurovania a chladenia',
    tags: ['Tepelné čerpadlo', 'Change-over systém'],
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-B018uGt6.jpg',
    type: 'PROJEKT STAVBY (DRS)',
    year: '2025',
    title: 'Vykurovanie administratívnej budovy Besico Banská Bystrica',
    desc: 'Vykurovanie a príprava teplej pitnej vody pre administratívnu budovu vo výrobno-skladovej hale',
    tags: ['Plynový kotol', 'Infražiariče'],
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-DcEIcD7L.jpg',
    type: 'PROJEKT STAVBY (DRS)',
    year: '2025',
    title: 'Vetranie skladovo-výrobnej haly s administratívnou časťou',
    desc: 'Vzduchotechnika a vykurovanie pomocou rooftop jednotiek',
    tags: ['Vzduchotechnika', 'Rooftop jednotky'],
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-HKWjPKGF.jpg',
    type: 'PROJEKT STAVBY (DRS)',
    year: '2026',
    title: 'Podlahové vykurovanie rodinného domu s tepelným čerpadlom',
    desc: 'Vykurovanie a príprava teplej vody s využitím akumulácie energie z fotovoltiky',
    tags: ['Tepelné čerpadlo', 'Podlahové vykurovanie'],
  },
  {
    img: 'https://www.heatup.sk/assets/vzt-1np-CJ1klMi3.jpg',
    type: 'REALIZAČNÝ PROJEKT',
    year: '2024',
    title: 'Prevádzkový objekt televízie JOJ, Bratislava',
    desc: 'Vzduchotechnika a VRV systém chladenia',
    tags: ['Vzduchotechnika', 'VRV systém'],
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="referencie" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle border border-primary/20 text-primary text-xs font-semibold mb-4">
            Referencie
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Výber z dokončených projektov
          </h2>
          <p className="text-muted-fg">Projekty postupne dopĺňame. Kliknite pre detail projektu.</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={p.img}
                  alt={`${p.title} – ${p.desc}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 text-primary">
                    {p.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded text-[10px] font-bold bg-accent text-white">
                    {p.year}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-1 line-clamp-2">{p.title}</h3>
                <p className="text-sm text-muted-fg mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-muted text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
