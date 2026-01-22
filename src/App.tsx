import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-background min-h-screen text-white font-sans selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}

export default App