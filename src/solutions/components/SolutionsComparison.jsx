import Container from '../../layout/Container'

const rows = [
  ['Management documente', 'Excelent', 'Parțial', 'Custom'],
  ['Integrare sisteme', 'Parțial', 'Excelent', 'Excelent'],
  ['Automatizare procese', 'Ridicat', 'Ridicat', 'Custom'],
  ['Platformă complet personalizată', 'Nu', 'Parțial', 'Da'],
]

function SolutionsComparison() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Comparație
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Care soluție este potrivită pentru tine?
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.05] text-sm font-bold text-white">
            <div className="p-5">Capabilitate</div>
            <div className="p-5">EMDoc</div>
            <div className="p-5">Smart Connect</div>
            <div className="p-5">Enterprise</div>
          </div>

          {rows.map((row) => (
            <div
              key={row[0]}
              className="grid grid-cols-4 border-b border-white/10 text-sm text-slate-300 last:border-b-0"
            >
              {row.map((cell, index) => (
                <div
                  key={cell}
                  className={`p-5 ${index === 0 ? 'font-semibold text-white' : ''}`}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SolutionsComparison