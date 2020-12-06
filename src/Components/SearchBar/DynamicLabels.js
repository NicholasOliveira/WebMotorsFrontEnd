/* eslint react/prop-types: 0 */
import React from 'react';

export function LabelMarca({ makes, searchModel }) {
  return (
    <label htmlFor="Marca">
      <span>Marca:</span>
      <select name="Marca" id="Marca" onChange={searchModel}>
        <option value="">Todas</option>
        {makes.map((make) => (
          <option key={make.ID} value={make.ID}>
            {make.Name}
          </option>
        ))}
      </select>
    </label>
  );
}

export function LabelModel({ models, searchVersion }) {
  return (
    <label htmlFor="models" style={{ marginRight: 0 }}>
      <span>Modelo:</span>
      <select name="models" onChange={searchVersion}>
        <option value="">Todos</option>
        {models.map((model) => (
          <option key={model.ID} value={model.ID}>
            {model.Name}
          </option>
        ))}
      </select>
    </label>
  );
}

export function LabelVersion({ versions }) {
  let ver = [];
  if (typeof versions !== 'undefined') {
    ver = versions;
  }
  return (
    <label htmlFor="versions" style={{ marginRight: 0 }}>
      <span>Versão:</span>
      <select name="versions">
        <option value="">Todas</option>
        {ver.map((version) => (
          <option key={version.ID} value={version.ID}>
            {version.Name}
          </option>
        ))}
      </select>
    </label>
  );
}
