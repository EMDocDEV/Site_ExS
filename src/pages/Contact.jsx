import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
  HelpCircle,
} from 'lucide-react'
import Container from '../layout/Container'

const contactCards = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+40 000 000 000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@extensys.ro',
  },
  {
    icon: MapPin,
    label: 'Adresă',
    value: 'România',
  },
  {
    icon: Clock,
    label: 'Program',
    value: 'Luni - Vineri, 09:00 - 18:00',
  },
]

const faqs = [
  {
    question: 'Cu ce tipuri de companii lucrați?',
    answer:
      'Lucrăm cu organizații care au nevoie de digitalizare, automatizare, integrare între sisteme sau soluții software personalizate.',
  },
  {
    question: 'Putem începe cu o analiză a proceselor existente?',
    answer:
      'Da. În mod normal începem printr-o discuție de descoperire și o analiză a fluxurilor actuale pentru a identifica blocajele și oportunitățile.',
  },
  {
    question: 'Dezvoltați și soluții custom?',
    answer:
      'Da. Pe lângă soluțiile existente, dezvoltăm aplicații software adaptate proceselor specifice fiecărei companii.',
  },
  {
    question: 'Oferiți suport după implementare?',
    answer:
      'Da. Putem asigura mentenanță, suport, optimizări și dezvoltări ulterioare în funcție de nevoile proiectului.',
  },
]

function Contact() {
  return (
    <main className="overflow-hidden bg-[#071326] text-white">
      <section className="relative min-h-[68vh] overflow-hidden border-b border-white/10">
      
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.24),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_40%)]" />

        <Container className="relative z-10 flex min-h-[68vh] items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
              <MessageSquare size={16} />
              Contact Extensys
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Hai să discutăm despre următorul pas în digitalizarea companiei
              tale.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Spune-ne ce procese vrei să simplifici, ce sisteme vrei să
              conectezi sau ce soluție software ai nevoie să construim.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                  Date contact
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                  Suntem aici pentru întrebări, proiecte și colaborări.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Completează formularul sau contactează-ne direct. Revenim cu
                  un răspuns cât mai curând.
                </p>
              </div>

              <div className="grid gap-4">
                {contactCards.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-orange-300">
                        <Icon size={22} />
                      </div>

                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-1 font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8"
            >
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      Nume
                    </label>
                    <input
                      type="text"
                      placeholder="Numele tău"
                      className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      Companie
                    </label>
                    <input
                      type="text"
                      placeholder="Compania"
                      className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@companie.ro"
                      className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder="+40"
                      className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Tip proiect
                  </label>
                  <select className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition focus:border-orange-400/60">
                    <option>Management documente / EMDoc</option>
                    <option>Integrare sisteme / Smart Connect</option>
                    <option>Soluție enterprise custom</option>
                    <option>Consultanță digitalizare</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Mesaj
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Spune-ne câteva detalii despre proiect..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-400"
                >
                  Trimite mesajul
                  <ArrowRight size={18} />
                </button>

                <p className="text-center text-xs leading-6 text-slate-400">
                  Prin trimiterea formularului, ești de acord să fii contactat
                  pentru solicitarea transmisă.
                </p>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                Localizare
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Lucrăm cu echipe și organizații din România.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Pentru întâlniri, demo-uri sau discuții tehnice, putem stabili
                o sesiune online sau o întâlnire dedicată.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1E3A] p-4 shadow-2xl shadow-black/30">
              <div className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.04] text-center">
                <div>
                  <MapPin className="mx-auto text-orange-300" size={38} />
                  <p className="mt-4 text-lg font-bold">Hartă Google Maps</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Aici vom integra harta după stabilirea adresei finale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              <HelpCircle size={16} />
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Întrebări frecvente
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 open:border-orange-400/40"
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="rounded-[2rem] bg-orange-500 p-8 text-center shadow-2xl shadow-orange-500/25 md:p-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Ai un proces care poate fi digitalizat?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
              Trimite-ne câteva detalii și revenim cu o propunere de discuție.
            </p>

            <a
              href="mailto:contact@extensys.ro"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0F1E3A] transition hover:bg-slate-100"
            >
              Scrie-ne direct
              <ArrowRight size={18} />
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default Contact