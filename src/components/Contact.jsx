export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle border border-primary/20 text-primary text-xs font-semibold mb-4">Kontakt</div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">Kontakt</h2>
          <p className="text-muted-fg max-w-xl mx-auto">Projektant vykurovania, vzduchotechniky a chladenia – Žilina. Pôsobíme po celom Slovensku. Máte záujem o spoluprácu? Neváhajte nás kontaktovať.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <a href="tel:+421917425920" className="flex items-center gap-4 p-5 rounded-xl bg-white card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="w-12 h-12 rounded-full bg-brand-subtle flex items-center justify-center text-2xl flex-shrink-0">📞</div>
              <div><div className="text-xs text-muted-fg mb-0.5">Telefón</div><div className="font-semibold text-foreground group-hover:text-primary transition-colors">+421 917 425 920</div></div>
            </a>
            <a href="mailto:bosy@heatup.sk" className="flex items-center gap-4 p-5 rounded-xl bg-white card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5 group">
              <div className="w-12 h-12 rounded-full bg-brand-subtle flex items-center justify-center text-2xl flex-shrink-0">✉️</div>
              <div><div className="text-xs text-muted-fg mb-0.5">E-mail</div><div className="font-semibold text-foreground group-hover:text-primary transition-colors">bosy@heatup.sk</div></div>
            </a>
            <div className="flex items-center gap-4 p-5 rounded-xl bg-white card-shadow">
              <div className="w-12 h-12 rounded-full bg-brand-subtle flex items-center justify-center text-2xl flex-shrink-0">📍</div>
              <div><div className="text-xs text-muted-fg mb-0.5">Adresa</div><div className="font-semibold text-foreground">Vysokoškolákov 8556/33B</div><div className="text-sm text-muted-fg">010 08 Žilina</div></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white card-shadow">
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">HeatUp Project s. r. o.</h3>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between"><span className="text-muted-fg">IČO</span><span className="font-medium text-foreground">57282218</span></div>
                <div className="flex justify-between"><span className="text-muted-fg">DIČ</span><span className="font-medium text-foreground">2122641906</span></div>
                <div className="pt-2 text-xs text-muted-fg border-t border-border mt-2">Obchodný register Okresného súdu Žilina, oddiel: Sro, vložka č. 89084/L</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}