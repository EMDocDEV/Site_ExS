import { useState } from 'react'
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
    value: '+40 728 999 274',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'office@extensys.ro',
  },
  {
    icon: MapPin,
    label: 'Adresă',
    value: 'Bucuresti, România',
  },
  {
    icon: Clock,
    label: 'Program',
    value: 'Luni - Vineri, 08:30 - 16:00',
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
      'Da. Pe lângă aplicațiile existente, dezvoltăm soluții software adaptate proceselor specifice fiecărei companii.',
  },
  {
    question: 'Oferiți suport după implementare?',
    answer:
      'Da. Putem asigura mentenanță, suport, optimizări și dezvoltări ulterioare în funcție de nevoile proiectului.',
  },
]

function SectionLine() {
  return (
    <div className="absolute inset-x-0 top-0 flex justify-center">
      <div className="h-[1.5px] w-430 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
    </div>
  )
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    project: 'Management documente / EMDoc',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    const phoneRegex = /^[0-9+\s().-]{8,20}$/

        if (!form.name.trim()) {
          alert('Te rugăm să completezi numele.')
          return
        }

        if (!emailRegex.test(form.email.trim())) {
          alert('Te rugăm să introduci o adresă de email validă.')
          return
        }

        if (!phoneRegex.test(form.phone.trim())) {
          alert('Te rugăm să introduci un număr de telefon valid.')
          return
        }

        if (!form.message.trim() || form.message.trim().length < 10) {
          alert('Te rugăm să completezi mesajul cu minimum 10 caractere.')
          return
}

    setLoading(true)

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (result.success) {
        alert('Mesajul a fost trimis.')

        setForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          project: 'Management documente / EMDoc',
          message: '',
        })
      } else {
        alert(result.message || 'Mesajul nu a putut fi trimis.')
      }
    } catch (error) {
      alert('Eroare la trimiterea mesajului.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="overflow-hidden bg-[#071326] text-white">
      <section className="relative min-h-[68vh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.24),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_40%)]" />
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />

        <Container className="relative z-10 flex min-h-[68vh] items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
              <MessageSquare size={16} />
              Contact Extensys Solutions
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Hai să discutăm despre următorul pas în{' '}
              <span className="text-orange-500">digitalizarea companiei </span>
              tale.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Spune-ne ce procese vrei să simplifici, ce sisteme vrei să
              conectezi sau ce soluție software ai nevoie să construim.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-24">
        <SectionLine />

        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
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
                {contactCards.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.42,
                        delay: index * 0.06,
                        ease: 'easeOut',
                      }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 transition duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.07] hover:shadow-orange-500/10"
                    >
                      <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-orange-400/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                      <div className="relative flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-orange-300 transition duration-300 group-hover:scale-110 group-hover:bg-orange-400/15">
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
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:border-orange-400/30 hover:bg-white/[0.065] md:p-8"
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl" />
              <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />

              <form onSubmit={handleSubmit} className="relative space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      Nume
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Numele tău"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F1E3A]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      Companie
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Compania"
                      className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F1E3A]"
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
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@companie.ro"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F1E3A]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      pattern="[0-9+\s().-]{8,20}"
                      placeholder="+40"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F1E3A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Tip proiect
                  </label>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition focus:border-orange-400/60 focus:bg-[#0F1E3A]"
                  >
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
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Spune-ne câteva detalii despre proiect..."
                    required
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#0F1E3A]/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F1E3A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-2xl hover:shadow-orange-500/35 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? 'Se trimite...' : 'Trimite mesajul'}
                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
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

      <section className="relative border-y border-white/10 bg-white/[0.03] py-24">
        <SectionLine />

        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:border-orange-400/30 hover:bg-white/[0.065]"
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl" />

              <div className="relative flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#0F1E3A]/80 text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/30 bg-orange-400/10 text-orange-300">
                    <MapPin size={34} />
                  </div>
                  <p className="mt-4 text-lg font-bold">Hartă Google Maps</p>
                  <p className="mt-2 text-sm text-slate-400">
                    ...... in lucru
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative py-24">
        <SectionLine />

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
                transition={{
                  duration: 0.42,
                  delay: index * 0.06,
                  ease: 'easeOut',
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 transition duration-300 open:border-orange-400/40 open:bg-white/[0.06] hover:border-orange-400/30 hover:bg-white/[0.055]"
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

      <section className="relative pb-24 pt-4">
        <SectionLine />

        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-orange-500 p-8 text-center shadow-2xl shadow-orange-500/25 md:p-14">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-[#0F1E3A]/20 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Ai un proces care poate fi digitalizat?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
                Trimite-ne câteva detalii și revenim cu o propunere de
                discuție.
              </p>

              <a
                href="mailto:office@extensys.ro"
                className="group mt-8 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#0F1E3A] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-2xl hover:shadow-black/20"
              >
                Scrie-ne direct
                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default Contact