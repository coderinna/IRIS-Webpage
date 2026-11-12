import { lazy, Suspense, useState, useEffect } from 'react';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const Architecture = lazy(() => import('./components/Architecture/Architecture.jsx'));
const Protocol = lazy(() => import('./components/Protocol/Protocol.jsx'));
const FeatureGrid = lazy(() => import('./components/FeatureGrid/FeatureGrid'));
const ProjectImages = lazy(() => import('./components/ProjectImages/ProjectImages.jsx'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Licence = lazy(() => import('./components/Licence/Licence.jsx'));
const Sanasto = lazy(() => import('./components/Sanasto/Sanasto.jsx'));
const Footer2 = lazy(() => import('./components/Footer/Footer2.jsx'));

const Documentation = lazy(() =>
  import('./components/Documentation/Documentation.jsx')
);

import './App.css';


function isDocumentationOpen() {
  return window.location.hash.startsWith('#documentation');
}


function App() {

  const [isDocumentSectionOpen, setIsDocumentSectionOpen] = useState(
    () => isDocumentationOpen()
  );

  useEffect(() => {
    const handleHashChange = () => {
      setIsDocumentSectionOpen(isDocumentationOpen());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div id="top" className="app">

      <Suspense fallback={null}>

        <Navbar
          isDocumentSectionOpen={isDocumentSectionOpen}
          setIsDocumentSectionOpen={setIsDocumentSectionOpen}
        />

        <main>
          {isDocumentSectionOpen ? (
            <Documentation
            />
          ) : (
            <>
              <Hero />
              <FeatureGrid />
              <Architecture />
              <Protocol />
              <ProjectImages />
              <Sanasto />
              <Licence />
            </>
          )}
        </main>

        {!isDocumentSectionOpen && (
          <>
            <Footer />
            <Footer2 />
          </>
        )}

      </Suspense>

    </div>
  );
}

export default App;