import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewsArticle from './pages/NewsArticle';
import AllNews from './pages/AllNews';

function App() {
  return (
    <Router>
      <main className="bg-background min-h-screen text-white font-sans selection:bg-accent selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<AllNews />} />
          <Route path="/news/:id" element={<NewsArticle />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App