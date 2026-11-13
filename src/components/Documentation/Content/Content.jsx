import { useState, useEffect } from 'react';

import Introduction from './Sections/Introduction/Introduction.jsx';
import Security from './Sections/Security/Security.jsx';
import IRC from './Sections/IRC/main.jsx';
import IRISS2S from './Sections/IRIS-S2S/main.jsx';
import Architecture from './Sections/Architecture/main.jsx';

import './css/main.css';

const documentationSections = {
  introduction: Introduction,
  security: Security,
  irc: IRC,
  iris_s2s: IRISS2S,
  architecture: Architecture
};

function DocumentationContent() {
  const getHashParams = () => {
    const query = window.location.hash.split('?')[1] || '';
    return new URLSearchParams(query);
  };

  const [currentPath, setCurrentPath] = useState(() => {
    return getHashParams().get('path') || 'introduction';
  });

  const [currentSection, setCurrentSection] = useState(() => {
    return getHashParams().get('section') || '';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const params = getHashParams();

      setCurrentPath(params.get('path') || 'introduction');
      setCurrentSection(params.get('section') || '');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (!currentSection) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(currentSection)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [currentPath, currentSection]);

  const RenderComponent = documentationSections[currentPath];

  if (!RenderComponent) {
    return (
      <div className="documentation-not-found">
        Dokumentaatiota ei vielä tehty
      </div>
    );
  }

  return (
    <div className="documentation-content">
      <RenderComponent />
    </div>
  );
}

export default DocumentationContent;