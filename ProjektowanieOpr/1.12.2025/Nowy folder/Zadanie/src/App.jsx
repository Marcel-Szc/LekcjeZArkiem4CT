//------------------------MENU PRZYKŁAD------------------------
/*
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ONas() {
  return <h1>Strona O nas</h1>;
}
function Kontakt() {
  return <h1>Strona Kontakt</h1>;
}
function Aktualnosci() {
  return <h1>Strona Aktualności</h1>;
}
export default function App() {
  return (
    <>
      <Router>
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
          <Link to="/onas">O nas</Link>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/aktualnosci">Aktualności</Link>
        </nav>


        <Routes>
          <Route path="/onas" element={<ONas/>} />
          <Route path="/kontakt" element={<Kontakt/>} />
          <Route path="/aktualnosci" element={<Aktualnosci/>} />
        </Routes>
      </Router>
    </>
  );
}
*/
//------------------------MENU ZADANIE------------------------
/*

import './App.css'

import React, { useState, useEffect, createContext, useContext } from 'react';

const AppContext = createContext();

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext musi być używany wewnątrz AppProvider');
  }
  return context;
};

function Header() {
  const { darkMode, toggleDarkMode, currentPage, setCurrentPage } = useAppContext();

  const menuItems = [
    { id: 'home', label: 'Strona Główna' },
    { id: 'peaks', label: 'Szczyty' },
    { id: 'trails', label: 'Szlaki' },
    { id: 'fauna', label: 'Fauna' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <header className={darkMode ? 'dark' : ''}>
      <div className="header-content">
        <nav>
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={currentPage === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Home() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    setVisitCount(prev => prev + 1);
  }, []);

  return (
    <div className="page home-page">
      <div className="hero">
        <h2>Witaj w Tatrach</h2>
        <p className="hero-text">
          Tatry to najwyższe góry w Polsce i na Słowacji, będące częścią Karpat. 
          Zapraszamy do odkrycia ich niepowtarzalnego uroku!
        </p>
      </div>
      <div className="info-cards">
        <div className="card">
          <h3>Lokalizacja</h3>
          <p>Południowa Polska, granica ze Słowacją</p>
        </div>
        <div className="card">
          <h3>Najwyższy szczyt</h3>
          <p>Rysy - 2499 m n.p.m.</p>
        </div>
        <div className="card">
          <h3>Park Narodowy</h3>
          <p>Tatrzański Park Narodowy - od 1954 roku</p>
        </div>
      </div>
      <p className="visit-counter">Odwiedziny tej strony: {visitCount}</p>
    </div>
  );
}

function Peaks() {
  const [peaks] = useState([
    { name: 'Rysy', height: 2499, difficulty: 'Trudny' },
    { name: 'Giewont', height: 1895, difficulty: 'Średni' },
    { name: 'Kasprowy Wierch', height: 1987, difficulty: 'Łatwy' },
    { name: 'Świnica', height: 2301, difficulty: 'Trudny' },
    { name: 'Kozi Wierch', height: 2291, difficulty: 'Bardzo trudny' }
  ]);

  return (
    <div className="page">
      <h2>Najważniejsze Szczyty Tatr</h2>
      <div className="peaks-grid">
        {peaks.map((peak, index) => (
          <div key={index} className="peak-card">
            <h3>{peak.name}</h3>
            <p className="height">{peak.height} m n.p.m.</p>
            <p className="difficulty">Trudność: <span>{peak.difficulty}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Trails() {
  const [selectedTrail, setSelectedTrail] = useState(null);
  const trails = [
    { id: 1, name: 'Do Morskiego Oka', time: '2h', distance: '9 km', color: 'green' },
    { id: 2, name: 'Na Giewont', time: '4h', distance: '8 km', color: 'red' },
    { id: 3, name: 'Dolina PięciuStawów', time: '6h', distance: '18 km', color: 'blue' },
    { id: 4, name: 'Dolina Kościeliska', time: '3h', distance: '12 km', color: 'green' }
  ];

  return (
    <div className="page">
      <h2>Popularne Szlaki Turystyczne</h2>
      <div className="trails-container">
        {trails.map(trail => (
          <div 
            key={trail.id} 
            className={`trail-item ${selectedTrail === trail.id ? 'selected' : ''}`}
            onClick={() => setSelectedTrail(trail.id)}
          >
            <div className={`trail-marker ${trail.color}`}></div>
            <div className="trail-info">
              <h3>{trail.name}</h3>
              <p>⏱️ Czas: {trail.time} | 📏 Dystans: {trail.distance}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedTrail && (
        <div className="trail-details">
          <p>Szlak wybrany! Zobacz szczegóły w biurze TPN.</p>
        </div>
      )}
    </div>
  );
}

function Fauna() {
  const [animals] = useState([
    { name: 'Kozica',  desc: 'Symbol Tatr' },
    { name: 'Świstak',  desc: 'Gwiżdżący mieszkaniec hal' },
    { name: 'Niedźwiedź brunatny',  desc: 'Największy drapieżnik' },
    { name: 'Orzeł przedni', desc: 'Król tatrzańskich szczytów' }
  ]);

  useEffect(() => {
    console.log('Fauna component mounted');
  }, []);

  return (
    <div className="page">
      <h2>Fauna Tatr</h2>
      <p className="intro-text">
        Tatry są domem dla wielu unikalnych gatunków zwierząt, chronionych w ramach Tatrzańskiego Parku Narodowego.
      </p>
      <div className="fauna-grid">
        {animals.map((animal, index) => (
          <div key={index} className="animal-card">
            <div className="animal-icon">{animal.icon}</div>
            <h3>{animal.name}</h3>
            <p>{animal.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  const [activeImg, setActiveImg] = useState(0);
  const images = [
    { title: 'Morskie Oko', desc: 'Najpiękniejsze jezioro w Tatrach' },
    { title: 'Wschód na Rysach', desc: 'Magiczny moment' },
    { title: 'Dolina Gąsienicowa', desc: 'Zimowa panorama' },
    { title: 'Krokusy na Hali', desc: 'Wiosenne przebudzenie' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="page">
      <h2>Galeria Tatr</h2>
      <div className="gallery-container">
        <div className="main-image">
          <div className="image-placeholder">
            <h3>{images[activeImg].title}</h3>
            <p>{images[activeImg].desc}</p>
          </div>
        </div>
        <div className="thumbnails">
          {images.map((img, index) => (
            <div 
              key={index}
              className={`thumbnail ${activeImg === index ? 'active' : ''}`}
              onClick={() => setActiveImg(index)}
            >
              {img.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="page">
      <h2>Kontakt</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Tatrzański Park Narodowy</h3>
          <p>ul. Kuźnice 1, 34-500 Zakopane</p>
          <p>Tel: +48 18 20 23 200</p>
          <p>Email: sekretariat@tpn.pl</p>
          <p>www.tpn.pl</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const { darkMode } = useAppContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={darkMode ? 'dark' : ''}>
      <div className="footer-content">
        <p>&copy; {currentYear} NT Tatr. please speed I need this</p>
        <p>My mom is kinda homeless</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'peaks': return <Peaks />;
      case 'trails': return <Trails />;
      case 'fauna': return <Fauna />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode, currentPage, setCurrentPage }}>
      <div className="app-container">
        <Header />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

*/
//------------------------useContext PRZYKŁAD1------------------------
/*
  import React from 'react';
  import Informacja from './components/Informacja';

  export const NazwaMotywu = React.createContext('ciemny');

  export default function App() {
    return (
      <NazwaMotywu.Provider value="ciemny">
        <Informacja />
      </NazwaMotywu.Provider>
    );
  }
*/
//------------------------useContext PRZYKŁAD1------------------------
/*
import React from 'react';
import Informacja from './components/Informacja2';

export const NazwaMotywu = React.createContext('ciemny');

export default function App() {
  return (
    <NazwaMotywu.Provider value={{stronamocy: "ciemny"}}>
      <Informacja />
    </NazwaMotywu.Provider>
  );
}
*/
import { useState, createContext } from 'react'
import React from 'react'
export const ThemeContext = React.createContext();
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  const [motyw, setMotyw] = useState("czerwony")

  return (
    <>
      <ThemeContext.Provider value={{motyw,setMotyw}}>
        <Header/>
        <Main/>
        <Footer/>
      </ThemeContext.Provider>
    </>
  );
}

export default App
