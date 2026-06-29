import { ArrowRight } from 'lucide-react'
import Container from '../../layout/Container'

function SolutionsCTA() {
  return (
    <section className="relative pb-24 pt-4">
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[1.5px] w-430  bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-orange-500 p-8 text-center shadow-2xl shadow-orange-500/25 md:p-14">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-[#0F1E3A]/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Hai să construim soluția potrivită pentru compania ta.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
              Discutăm despre procesele tale, identificăm blocajele și propunem o
              soluție software clară, scalabilă și eficientă.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#0F1E3A] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-2xl hover:shadow-black/20"
            >
              Programează o discuție
              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SolutionsCTA