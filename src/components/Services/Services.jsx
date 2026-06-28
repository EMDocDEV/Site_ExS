import Container from '../../layout/Container'

const services = [
  {
    image: '/src/assets/images/service-analyse.jpg',
    title: 'Analiză și proiectare procese',
    text: 'Analizăm nevoile, identificăm blocajele, stabilim fluxurile și definim împreună procesul digital optim.',
    items: ['Analiză procese', 'Modelare fluxuri operaționale', 'Plan de digitalizare'],
  },
  {
    image: '/src/assets/images/service-implementation.jpg',
    title: 'Configurare și implementare',
    text: 'Conectăm solutiile noastre la sistemele informatice existente și activăm procese digitale rapide și conforme.',
    items: ['Automatizare fluxuri', 'Semnătură olograf digitalizata', 'Go-live controlat'],
  },
  {
    image: '/src/assets/images/service-support.jpg',
    title: 'Training, mentenanță și suport',
    text: 'Asigurăm asistență continuă, actualizări și instruire pentru adoptare rapidă și utilizare corectă.',
    items: ['Training utilizatori', 'Suport tehnic', 'Mentenanță și actualizări'],
  },
]

function Services() {
  return (
    <section className="bg-slate-100 py-24">
      <Container>
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-500">
            Servicii
          </p>

          <h2 className="text-4xl font-black text-[#0F1E3A]">
            De la analiza circuitelor la adopție completă.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[1.6rem] bg-white shadow-xl shadow-slate-200/70 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-black leading-tight text-[#0F1E3A]">
                  {service.title}
                </h3>

                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  {service.text}
                </p>

                <div className="mb-7 space-y-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-sm font-black text-orange-500">
                        ✓
                      </span>
                      <span className="font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex font-extrabold text-orange-500 transition group-hover:translate-x-1"
                >
                  
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services