import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Templates from './components/Templates'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import './i18n/i18n' // Import i18n configuration
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  // To get a Google Client ID:
  // 1. Go to https://console.cloud.google.com/
  // 2. Create a new project or select an existing one
  // 3. Navigate to APIs & Services > Credentials
  // 4. Create an OAuth 2.0 Client ID (Web application type)
  // 5. Add your domain to the authorized JavaScript origins
  // 6. Copy the Client ID and paste it below
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID"}>
      <AuthProvider>
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
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<UserProfile />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  )
}

export default App
