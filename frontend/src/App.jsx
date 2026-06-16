import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

import './css/base.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '/index':
      case '/index.html':
        return <Home navigate={navigate} />;
      case '/about':
      case '/about.html':
        return <About navigate={navigate} />;
      case '/products':
      case '/products.html':
        return <Products navigate={navigate} />;
      case '/solutions':
      case '/solutions.html':
        return <Solutions navigate={navigate} />;
      case '/contact':
      case '/contact.html':
        return <Contact navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <>
      <Header currentPath={currentPath} navigate={navigate} />
      <main style={{ minHeight: '80svh' }}>
        {renderPage()}
      </main>
      <Footer currentPath={currentPath} navigate={navigate} />
    </>
  );
}

export default App;
