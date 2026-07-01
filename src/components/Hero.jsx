export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center pt-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-brand-subtle opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle border border-primary/20 text-primary text-xs font-semibold mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Projekčná kancelária · Žilina
        </div>

        {/* Heading */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
          Projekcia vykurovania
          <br />
          <span className="gradient-text">a vzduchotechniky</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-fg max-w-2xl mx-auto mb-10 leading-relaxed">
          Projekčná kancelária HeatUp project so sídlom v Žiline. Od rodinných domov cez bytové komplexy až po
          priemyselné a administratívne budovy — navrhujeme energeticky úsporné systémy vykurovania, chladenia
          a vetrania na mieru, spracované v BIM (Revit).
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('kontakt')}
            className="px-8 py-3.5 rounded-full font-semibold text-white bg-brand-gradient hover:opacity-90 transition-opacity shadow-lg"
          >
            Kontaktujte ma →
          </button>
          <button
            onClick={() => scrollTo('referencie')}
            className="px-8 py-3.5 rounded-full font-semibold text-foreground border border-border hover:border-primary hover:text-primary transition-colors"
          >
            Zobraziť projekty
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 gap-8 max-w-xs mx-auto">
          {[
            { value: 'BIM', label: 'Revit projektovanie' },
            { value: 'SK', label: 'celé Slovensko' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-muted-fg mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
