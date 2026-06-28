import { useEffect, useRef, useState } from 'react'
import Container from '../../layout/Container'
import aboutImage from '../../assets/images/about-documents.jpg'

function AboutPreview() {
  const sectionRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const movement = rect.top * -0.40

      setOffset(movement)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07172f] py-28 text-white"
    >
      
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={aboutImage}
          alt=""
          className="absolute left-0 top-[-18%] h-[140%] w-full object-cover"
          style={{
            transform: `translate3d(0, ${offset}px, 0)`,
            willChange: 'transform',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[#07172f]/2" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07172f]/15 via-[#07172f]/70 to-[#07172f]/35" />

      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hidden lg:block" />

        <div className="ml-auto max-w-2xl rounded-[1.5rem] bg-white/95 p-8 text-[#0F1E3A] shadow-2xl backdrop-blur-md lg:p-10">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-500">
            Despre Extensys
          </p>

          <h2 className="text-3xl font-black leading-tight lg:text-4xl">
            Construim soluții software pentru procese care contează.
          </h2>

          <div className="my-6 h-1 w-24 rounded-full bg-orange-500" />

          <p className="text-lg leading-relaxed text-slate-600">
            Extensys Solutions dezvoltă platforme software dedicate
            digitalizării, automatizării și controlului fluxurilor
            operaționale. Prin EMDoc, organizațiile pot transforma birocrația
            într-un proces digital, sigur și complet trasabil.
          </p>

          <a
            href="/about"
            
            className="hidden mt-5 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/40 md:inline-flex"
            
          >
            Vezi mai mult ...
          </a>

          
        </div>
      </Container>
    </section>
  )
}

export default AboutPreview