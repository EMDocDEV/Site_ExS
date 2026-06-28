import {
  AlertTriangle,
  ArrowDown,
  FileText,
  FolderOpen,
  MessageSquareText,
  ReceiptText,
  SearchX,
  Timer,
  Workflow,
} from 'lucide-react'

import Container from '../../layout/Container'

const documents = [
  'Referate',
  'Contracte',
  'Dosare',
  'Facturi',
  'Adrese',
  'Cereri',
]

const problems = [
  {
    icon: Timer,
    title: 'Aprobări lente',
    text: 'Documentele așteaptă zile întregi între departamente.',
  },
  {
    icon: SearchX,
    title: 'Informații greu de găsit',
    text: 'Timp pierdut în căutarea versiunii corecte.',
  },
  {
    icon: FolderOpen,
    title: 'Documente dispersate',
    text: 'Fișiere, emailuri și arhive separate, greu de urmărit.',
  },
  {
    icon: Workflow,
    title: 'Lipsă de trasabilitate',
    text: 'Nu este clar cine, când și ce acțiune a făcut.',
  },
]

function Challenge() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.12),transparent_26%),radial-gradient(circle_at_85%_70%,rgba(30,58,138,0.12),transparent_28%)]" />

      <Container className="relative">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-orange-500">
            Provocarea
          </p>

          <h2 className="text-4xl font-extrabold leading-tight text-[#0F1E3A] lg:text-5xl">
            Birocrația încetinește organizațiile.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Instituțiile și companiile gestionează zilnic sute sau mii de
            documente. Fiecare document trebuie urmărit, aprobat, arhivat și
            găsit atunci când contează.
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((item, index) => {
            const icons = [
              FileText,
              MessageSquareText,
              FolderOpen,
              ReceiptText,
              FileText,
              MessageSquareText,
            ]
            const Icon = icons[index]

            return (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Icon size={22} />
                </div>
                <span className="font-bold text-[#0F1E3A]">{item}</span>
              </div>
            )
          })}
        </div>

        <div className="mb-10 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500 shadow-md">
            <ArrowDown size={24} />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F1E3A] text-orange-400">
                <Icon size={24} />
              </div>

              <h3 className="mb-3 text-xl font-extrabold text-[#0F1E3A]">
                {title}
              </h3>

              <p className="leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl bg-[#0F1E3A] p-8 text-center text-white shadow-2xl lg:p-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">
            <AlertTriangle size={28} />
          </div>

          <p className="text-2xl font-extrabold leading-tight lg:text-3xl">
            Problema nu este documentul.
            <br />
            <span className="text-orange-400">Problema este traseul lui.</span>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Challenge