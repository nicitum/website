import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Services from "./components/Services"
import Process from "./components/Process"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-red-950 text-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

