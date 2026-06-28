import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Container from '../../layout/Container'
import networkBg from '../../assets/images/network-bg.jpg'

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#07172f] py-20 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-99"
        style={{ backgroundImage: `url(${networkBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07172f]/95 via-[#07172f]/85 to-[#07172f]/65" />

      <Container className="relative">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 lg:p-10">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-400">
              Contact
            </p>

            <h2 className="max-w-xl text-3xl font-black leading-tight lg:text-4xl">
              Hai să discutăm despre proiectul tău.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">
              Spune-ne ce procese vrei să digitalizezi, iar noi îți arătăm cum
              pot fi transformate în fluxuri clare și trasabile.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex h-12 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_12px_35px_rgba(249,115,22,.35)]"
            >
              Solicită demo <ArrowRight size={18} />
            </a>

          </div>

          <div className="border-t border-white/15 bg-[#07172f]/55 p-8 lg:border-l lg:border-t-0 lg:p-22">
            <div className="space-y-5">
              {[
                [Phone, '+40 728 999 274'],
                [Mail, 'office@extensys.ro'],
                [MapPin, 'România'],
              ].map(([Icon, text]) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                    <Icon size={20} />
                  </div>
                  <span className="font-bold text-slate-100">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CTA