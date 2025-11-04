import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyAI } from './components/WhyAI';
import { About } from './components/About';
import { Process } from './components/Process';
import { UseCases } from './components/UseCases';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { GridBackground } from './components/GridBackground';
import WelcomePage from './components/WelcomePage';

const MainLayout = () => {
  const sections = [
    { id: 'inicio', name: 'Inicio' },
    { id: 'beneficios', name: 'Beneficios' },
    { id: 'nosotros', name: 'Nosotros' },
    { id: 'proceso', name: 'Proceso' },
    { id: 'casos-de-uso', name: 'Casos de Uso' },
    { id: 'contacto', name: 'Contacto' },
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden relative">
      <Header />
      <ScrollProgress sections={sections} />
      <main className="relative z-10">
        <section id="inicio"><Hero /></section>

        <GridBackground>
          <section id="beneficios"><WhyAI /></section>
          <section id="nosotros"><About /></section>
          <section id="proceso"><Process /></section>
          <section id="casos-de-uso"><UseCases /></section>
        </GridBackground>
        
        <section id="contacto"><CTA /></section>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/welcome/:nombre" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;