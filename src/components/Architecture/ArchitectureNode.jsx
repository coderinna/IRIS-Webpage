// src/components/Architecture/ArchitectureNode.jsx

import './ArchitectureNode.css';

function ArchitectureNode({
  name,
  type,
  description,
  variant = 'default'
}) {
  return (
    <div className={`architecture-node architecture-node--${variant}`}>
      <span className="architecture-node__type">
        {type}
      </span>

      <strong className="architecture-node__name">
        {name}
      </strong>

      {description && (
        <span className="architecture-node__description">
          {description}
        </span>
      )}
    </div>
  );
}

export default ArchitectureNode;