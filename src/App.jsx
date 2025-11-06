import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Apps from './pages/Apps'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Research from './pages/Research'
import Contact from './pages/Contact'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/privacy/:appName" element={<PrivacyPolicy />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  )
}

export default App
