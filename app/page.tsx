import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Testimonials from "@/components/sections/testimonials"
import Gallery from "@/components/sections/gallery"
import Contact from "@/components/sections/contact"
import Cta from "@/components/sections/cta"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Cta />
    </main>
  )
}

