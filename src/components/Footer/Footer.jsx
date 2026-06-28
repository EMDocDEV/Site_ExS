import Container from '../../layout/Container'

function Footer() {
  return (
    <footer className="bg-[#07172f] py-12 text-white">
      <div className="inset-x-0 top-0 flex justify-center">
        <div className="h-px w-250 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      </div>
      <Container>
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-4">
          <div>
            <div className="mb-3 text-xl font-black">Extensys Solutions</div>
            <p className="text-sm leading-relaxed text-slate-400">
              Soluții software enterprise pentru digitalizarea proceselor
              documentare.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-black">Companie</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <a href="#about" className="block hover:text-orange-400">Despre noi</a>
              <a href="#services" className="block hover:text-orange-400">Servicii</a>
              <a href="#contact" className="block hover:text-orange-400">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-black">Soluții</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <a href="/solutions/emdoc" className="block hover:text-orange-400">EMDoc</a>
              <a href="/solutions/emdoc-b2b-smartconnect" className="block hover:text-orange-400">
                EMDoc B2B Smart Connect
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-black">Contact</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div>office@extensys.ro</div>
              <div>+40 728 999 274</div>
              <div>România</div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-0 text-sm text-slate-500">
          <div className="inset-x-0 top-0 flex justify-center">
            <div className="h-px w-250 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
          </div>
          © 2026 Extensys Solutions. Toate drepturile rezervate.
        </div>
        
      </Container>
      
    </footer>
  )
}

export default Footer