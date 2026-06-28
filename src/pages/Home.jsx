import Hero from '../components/Hero/Hero'
import WhyExtensys from '../components/WhyExtensys/WhyExtensys'
import Products from '../components/Products/Products'
import CTA from '../components/CTA/CTA'
import AboutPreview from '../components/AboutPreview/AboutPreview'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import Process from '../components/Process/Process'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutPreview />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="services">
        <Services />
      </section>

      <WhyExtensys />

      <section id="solutions">
        <Products />
      </section>

      <Testimonials />

      <section id="contact">
        <CTA />
      </section>

      <Footer />
    </>
  )
}

export default Home