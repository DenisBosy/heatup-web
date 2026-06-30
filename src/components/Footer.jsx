export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
          <img src="https://www.heatup.sk/assets/logo-DLdpf-AR.jpg" alt="HeatUp Project" className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
        </button>
        <p className="text-sm text-white/60 text-center">© {new Date().getFullYear()} HeatUp project s.r.o. Všetky práva vyhradené.</p>
      </div>
    </footer>
  )
}