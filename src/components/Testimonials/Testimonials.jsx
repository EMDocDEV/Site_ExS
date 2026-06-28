import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Container from '../../layout/Container'

const testimonials = [
  {
    image: '/src/assets/images/testimonial-1.jpg',
    role: 'Manager IT, organizație enterprise',
    title: 'Procesele au devenit clare, urmărite și mult mai rapide.',
    text: 'Am redus timpul pierdut cu documentele și am obținut vizibilitate completă asupra traseului fiecărui document.',
  },
  {
    image: '/src/assets/images/testimonial-2.jpg',
    role: 'Director operațional, instituție publică',
    title: 'Aprobările nu mai depind de hârtii și emailuri pierdute.',
    text: 'EMDoc ne-a ajutat să standardizăm fluxurile și să urmărim fiecare etapă din proces.',
  },
  {
    image: '/src/assets/images/testimonial-3.jpg',
    role: 'Responsabil administrativ, unitate medicală',
    title: 'Documentele sunt găsite rapid, iar trasabilitatea este completă.',
    text: 'Echipele lucrează mai organizat, iar informația importantă este disponibilă atunci când contează.',
  },
  
]

function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((current) => (current + 1) % testimonials.length)
  const prev = () =>
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )

  useEffect(() => {
    const interval = setInterval(next, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-white py-20">
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-[2px] w-450 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      </div>
      <Container>
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-500">
            Mărturii
          </p>

          <h2 className="text-4xl font-black text-[#0F1E3A]">
            Rezultate vizibile în procese reale.
          </h2>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0F1E3A] shadow-xl transition hover:bg-orange-500 hover:text-white lg:flex"
          >
            <ChevronLeft size={34} />
          </button>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <div
              className="flex transition-transform duration-2700 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((item) => (
                <article
                  key={item.title}
                  className="grid h-[360px] min-w-full bg-slate-100 lg:grid-cols-[0.95fr_2.05fr]"
                >
                  <div className="h-[360px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.role}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex h-[360px] flex-col justify-center p-10 lg:p-11">
                    <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-slate-500">
                      {item.role}
                    </p>

                    <h3 className="mb-6 text-3xl font-black leading-tight text-[#0F1E3A] lg:text-4xl">
                      {item.title}
                    </h3>

                    <p className="line-clamp-4 text-xl leading-relaxed text-slate-600">
                      „{item.text}”
                    </p>

                    <div className="mt-8 text-2xl text-orange-500">★★★★★</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-6 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0F1E3A] shadow-xl transition hover:bg-orange-500 hover:text-white lg:flex"
          >
            <ChevronRight size={34} />
          </button>

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.title}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full transition-all ${
                  active === index
                    ? 'w-10 bg-orange-500'
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials