import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import FeaturesGrid from './components/home/FeaturesGrid';
import EthicalAI from './components/home/EthicalAI';
import UserPersonas from './components/home/UserPersonas';
import InAction from './components/home/InAction';
import Statistics from './components/home/Statistics';
import Testimonials from './components/home/Testimonials';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#151b22] flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturesGrid />
                  <EthicalAI />
                  <UserPersonas />
                  <InAction />
                  <Statistics />
                  <Testimonials />
                </>
              }
            />
            {/* We can add more routes for other pages later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
