import React from 'react';
import './CardLoader.css';

export default function CardLoader() {
  return (
    <div className="card-loader">
      <div className="card-loader__header">
        <div className="card-loader__theme"></div>
        <div className="card-loader__actions"></div>
      </div>
      <div className="card-loader__content">
        <div className="card-loader__title"></div>
        <div className="card-loader__date"></div>
      </div>
    </div>
  );
}
