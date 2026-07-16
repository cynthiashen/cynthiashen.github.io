import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Books from './pages/Books'
import Cycling from './pages/Cycling'
import Food from './pages/Food'
import Yarn from './pages/Yarn'
import Cat from './pages/Cat'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interests/books" element={<Books />} />
          <Route path="/interests/cycling" element={<Cycling />} />
          <Route path="/interests/food" element={<Food />} />
          <Route path="/interests/knitting" element={<Yarn />} />
          <Route path="/pancake" element={<Cat />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
