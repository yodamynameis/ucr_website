import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import KnowledgeHub from './pages/KnowledgeHub';
//  import Projects from './pages/Projects';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost'; 
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden relative">
        <ParticleBackground />
        <Navbar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/*   <Route path="/projects" element={<Projects />} /> add if necessary */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />  
            <Route path="/joinus" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* ✅ Add this route for blog detail pages */}
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>

        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
