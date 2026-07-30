import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Segments from './components/Segments'
import About from './components/About'
import Differentials from './components/Differentials'
import ProductLines from './components/ProductLines'
import Catalog from './components/Catalog'
import HowItWorks from './components/HowItWorks'
import ProductQuiz from './components/ProductQuiz'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SplashScreen from './components/SplashScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const handleSplashFinish = useCallback(() => setIsLoading(false), [])

  return (
    <>
      {isLoading && <SplashScreen onFinish={handleSplashFinish} />}
      <Navbar />
      <main>
        <Hero />
        <Segments />
        <About />
        <Differentials />
        <ProductLines />
        <Catalog />
        <HowItWorks />
        <ProductQuiz />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

