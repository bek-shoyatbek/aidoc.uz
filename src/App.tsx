import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Templates from './components/Templates'
import Footer from './components/Footer'
import './i18n/i18n' // Import i18n configuration

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
              </>
            } />
            <Route path="/templates" element={<Templates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
