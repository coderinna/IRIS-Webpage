import { useState } from 'react';

import DocumentationHeader from './Header/Header.jsx';
import DocumentationSidebar from './Sidebar/Sidebar.jsx';
import DocumentationContent from './Content/Content.jsx';

import './css/Documentation.css';

function Documentation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="iris-documentation">

      <DocumentationHeader />

      <div className="iris-documentation-layout">

        <DocumentationSidebar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <main className="iris-documentation-main">
          <DocumentationContent />
        </main>

      </div>

    </section>
  );
}

export default Documentation;