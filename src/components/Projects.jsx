import { useState, useEffect } from 'react'

const PROJECTS = [
  {
    img: 'https://www.heatup.sk/assets/view-1-Dyjczf_M.jpg',
    images: [
      'https://www.heatup.sk/assets/view-1-Dyjczf_M.jpg',
    ],
    type: 'PROJEKT STAVBY (DRS)',
    year: '2025',
    title: 'Campus Univerzity Alexandra Dubčeka v Trenčíne',
    desc: 'Stropné vykurovanie a chladenie',
    longDesc: 'Projekt riešil stropné vykurovanie a chladenie pre priestory kampusu Univerzity Alexandra Dubčeka v Trenčíne. Navrhnutý systém zabezpečuje rovnomerné tepelné podmienky v celom objekte pri minimálnych prevádzkových nákladoch.',
    tags: ['Stropné vykurovanie', 'Stropné chladenie'],
    pdf: null,
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-tDWB-vBY.png',
    images: [
      'https://www.heatup.sk/assets/view-1-tDWB-vBY.png',
    ],
    type: 'PROJEKT STAVBY (DRS)',
    year: '2024',
    title: 'Odovzdávacia stanica tepla pre bytový dom',
    desc: 'Vykurovanie a príprava teplej pitnej vody z horúcovodu',
    longDesc: 'Projekt zahŕňal návrh odovzdávacej stanice tepla napojenej na horúcovodnú sieť. Systém zabezpečuje vykurovanie bytového domu a prípravu teplej pitnej vody s vysokou energetickou účinnosťou.',
    tags: ['Odovzdávacia stanica tepla', 'Horúcovod'],
    pdf: null,
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-Bob0EynY.png',
    images: [
      'https://www.heatup.sk/assets/view-1-Bob0EynY.png',
    ],
    type: 'PROJEKT STAVBY (DRS)',
    year: '2024',
    title: 'Zdroj chladu pre bytový dom',
    desc: 'Kombinovaný change-over systém vykurovania a chladenia',
    longDesc: 'Návrh kombinovaného change-over systému, ktorý umožňuje využitie tepelného čerpadla na vykurovanie v zimnom období aj na chladenie v letnom období. Systém je optimalizovaný pre bytový dom s dôrazom na nízke prevádzkové náklady.',
    tags: ['Tepelné čerpadlo', 'Change-over systém'],
    pdf: null,
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-B018uGt6.jpg',
    images: [
      'https://www.heatup.sk/assets/view-1-B018uGt6.jpg',
    ],
    type: 'PROJEKT STAVBY (DRS)',
    year: '2025',
    title: 'Vykurovanie administratívnej budovy Besico Banská Bystrica',
    desc: 'Vykurovanie a príprava teplej pitnej vody pre administratívnu budovu vo výrobno-skladovej hale',
    longDesc: 'Projekt vykurovania administratívnej časti výrobno-skladovej haly spoločnosti Besico v Banskej Bystrici. Riešenie kombinuje plynový kondenzačný kotol pre administratívnu zónu a infražiariče pre výrobno-skladové priestory.',
    tags: ['Plynový kotol', 'Infražiariče'],
    pdf: null,
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-DcEIcD7L.jpg',
    images: [
      'https://www.heatup.sk/assets/view-1-DcEIcD7L.jpg',
    ],
    type: 'PROJEKT STAVBY (DRS)',
    year: '2025',
    title: 'Vetranie skladovo-výrobnej haly s administratívnou časťou',
    desc: 'Vzduchotechnika a vykurovanie pomocou rooftop jednotiek',
    longDesc: 'Komplexný projekt vzduchotechniky a vykurovania pre skladovo-výrobnú halu s administratívnou časťou. Rooftop jednotky zabezpečujú vetranie, vykurovanie aj chladenie v jednom integrovanom systéme.',
    tags: ['Vzduchotechnika', 'Rooftop jednotky'],
    pdf: null,
  },
  {
    img: 'https://www.heatup.sk/assets/view-1-HKWjPKGF.jpg',
    images: [
      'https://www.heatup.sk/assets/view-1-HKWjPKGF.jpg',
    ],
    type: 'PROJEKT STAVBY (DRS)',
    year: '2026',
    title: 'Podlahové vykurovanie rodinného domu s tepelným čerpadlom',
    desc: 'Vykurovanie a príprava teplej vody s využitím akumulácie energie z fotovoltiky',
    longDesc: 'Návrh nízkoteplotného podlahového vykurovacieho systému v kombinácii s tepelným čerpadlom vzduch-voda. Systém využíva prebytkovú energiu z fotovoltických panelov na ohrev akumulačnej nádrže, čím minimalizuje prevádzkové náklady.',
    tags: ['Tepelné čerpadlo', 'Podlahové vykurovanie'],
    pdf: null,
  },
  {
    img: 'https://www.heatup.sk/assets/vzt-1np-CJ1klMi3.jpg',
    images: [
      'https://www.heatup.sk/assets/vzt-1np-CJ1klMi3.jpg',
    ],
    type: 'REALIZAČNÝ PROJEKT',
    year: '2024',
    title: 'Prevádzkový objekt televízie JOJ, Bratislava',
    desc: 'Vzduchotechnika a VRV systém chladenia',
    longDesc: 'Realizačný projekt vzduchotechniky a VRV systému chladenia pre prevádzkový objekt televízie JOJ v Bratislave. Návrh zohľadňoval špecifické požiadavky televíznych štúdií na akustiku, kvalitu vzduchu a tepelný komfort.',
    tags: ['Vzduchotechnika', 'VRV systém'],
    pdf: null,
  },
]

function Modal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-foreground transition-colors"
        >
          ×
        </button>
        <div className="relative bg-muted rounded-t-2xl overflow-hidden h-64 sm:h-80">
          <img
            src={project.images[activeImg]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 text-primary">
              {project.type}
            </span>
            <span className="px-2 py-1 rounded text-[10px] font-bold bg-accent text-white">
              {project.year}
            </span>
          </div>
          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === activeImg ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-brand-subtle text-primary">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-muted-fg leading-relaxed mb-6">{project.longDesc}</p>
          {project.pdf && (
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              📄 Stiahnuť projektovú dokumentáciu (PDF)
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="referencie" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle border border-primary/20 text-primary text-xs font-semibold mb-4">
            Referencie
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Výber z dokončených projektov
          </h2>
          <p className="text-muted-fg">Projekty postupne dopĺňame. Kliknite pre detail projektu.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
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
      {selected !== null && (
        <Modal project={PROJECTS[selected]} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
