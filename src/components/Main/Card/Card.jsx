import React from 'react';

export default function Card({ title, theme, date }) {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme _${theme}`}>
            <p className={`_${theme}`}>{theme}</p>
          </div>
          <a href="#popBrowse">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <div className="card__date">
            <svg>...</svg>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}