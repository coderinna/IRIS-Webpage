
import React from 'react';
import './IrisLicense.css';

const IrisLicense = () => {
  return (
    <section id="licence">
      <div className="iris-license">
        <div className="iris-license__header">
          <span className="iris-license__icon">📃</span>
          <h2 className="iris-license__title">LICENCE</h2>
          <span className="iris-license__badge">Proprietary License</span>
        </div>

        <div className="iris-license__body">
          <div className="iris-license__terms">
            <h2>Coderinna Proprietary License 1.0</h2>

            <p>
              The IRIS Webpage and all associated source code, documentation,
              assets, designs, and related materials are proprietary software
              owned by Coderinna.
            </p>

            <p>
              The source code may be publicly visible for transparency and
              project documentation, but public visibility does not grant
              permission to copy, modify, distribute, sublicense, sell, or
              create derivative works from the project.
            </p>

            <div className="iris-license__notice">
              <strong>RESTRICTION NOTICE:</strong>{' '}
              Public access to the repository does not constitute a license
              to use the source code. Unauthorized copying, mirroring,
              modification, redistribution, sublicensing, commercial use,
              or creation of derivative works is prohibited. All rights not
              expressly granted are reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IrisLicense;
