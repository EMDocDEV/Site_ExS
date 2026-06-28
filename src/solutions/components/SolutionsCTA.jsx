import { ArrowRight } from 'lucide-react'
import Container from '../../layout/Container'

function SolutionsCTA() {
  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-[2rem] bg-orange-500 p-8 text-center shadow-2xl shadow-orange-500/25 md:p-14">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Hai să construim soluția potrivită pentru compania ta.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
            Discutăm despre procesele tale, identificăm blocajele și propunem o
            soluție software clară, scalabilă și eficientă.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0F1E3A] transition hover:bg-slate-100"
          >
            Programează o discuție
            <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </section>
  )
}

export default SolutionsCTA