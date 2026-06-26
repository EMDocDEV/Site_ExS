import { ArrowRight, FileText, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../../layout/Container'
import { products } from '../../data/products'

const icons = {
  emdoc: FileText,
  'emdoc-b2b-smartconnect': Share2,
}

function Products() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-orange-500">
            Produsele noastre
          </p>

          <h2 className="text-4xl font-extrabold text-[#0F1E3A]">
            Soluții software dezvoltate pentru procese reale de business.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Extensys Solutions dezvoltă produse software dedicate digitalizării,
            automatizării și conectării fluxurilor operaționale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => {
            const Icon = icons[product.id] || FileText

            return (
              <Link
                key={product.id}
                to={product.route}
                className="group rounded-3xl border border-slate-200 bg-[#F5F7FA] p-8 transition hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <Icon size={28} />
                </div>

                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  {product.label}
                </p>

                <h3 className="mb-4 text-2xl font-extrabold text-[#0F1E3A]">
                  {product.name}
                </h3>

                <p className="mb-8 leading-relaxed text-slate-600">
                  {product.description}
                </p>

                <div className="inline-flex items-center gap-2 font-bold text-orange-600">
                  Vezi soluția
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Products