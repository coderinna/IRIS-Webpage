
import { useState, useEffect } from 'react';

import Introduction from './Sections/Introduction/Introduction.jsx';
import Security from './Sections/Security/Security.jsx';

import './css/main.css';

const documentationSections = {
  introduction: Introduction,
  security: Security,
};

function DocumentationContent() {

  const [currentPath, setCurrentPath] = useState(() => {
    const query = window.location.hash.split('?')[1] || '';
    return new URLSearchParams(query).get('path') || 'introduction';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const query = window.location.hash.split('?')[1] || '';
      const params = new URLSearchParams(query);

      setCurrentPath(params.get('path') || 'introduction');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
