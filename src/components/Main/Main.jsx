import React, { useState, useEffect } from 'react';
import Column from './Column/Column';
import Loader from '../CardLoader/Loader';
import CardLoader from '../CardLoader/CardLoader';
import { cardsData } from '../../data';
import './Main.css';

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCards(cardsData);
      setIsLoading(false);
    }, 1500);
  }, []);

  const columnStatuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово"
  ];

  if (isLoading) {
    return (
      <div className="main">
        <div className="container">
          <div className="main__columns-container">
            {columnStatuses.map((status, index) => (
              <div key={index} className="main__column-wrapper">
                <div className="column__title">
                  <p>{status}</p>
                </div>
                <div className="cards">
                  {[...Array(3)].map((_, i) => (
                    <CardLoader key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Loader />
      </div>
    );
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__columns-container">
          {columnStatuses.map((status) => {
            const filteredCards = cards.filter(card => card.status === status);
            return (
              <div key={status} className="main__column-wrapper">
                <Column 
                  title={status}
                  cards={filteredCards}
                  isEmpty={filteredCards.length === 0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}