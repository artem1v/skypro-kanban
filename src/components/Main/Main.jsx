import React, { useState, useEffect } from "react";
import Column from "./Column/Column";
import Loader from "../CardLoader/Loader";
import CardLoader from "../CardLoader/CardLoader";
import { cardsData } from "../../data";
import {
  MainContainer,
  MainColumnsContainer,
  MainColumnWrapper,
  LoadingContainer,
  ColumnTitle,
} from "./Main.styled";

export default function Main({ onBrowseOpen }) {
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
    "Готово",
  ];

  if (isLoading) {
    return (
      <MainContainer>
        <div className="container">
          <MainColumnsContainer>
            {columnStatuses.map((status, index) => (
              <MainColumnWrapper key={index}>
                <ColumnTitle>
                  <p>{status}</p>
                </ColumnTitle>
                <div className="cards">
                  {[...Array(3)].map((_, i) => (
                    <CardLoader key={i} />
                  ))}
                </div>
              </MainColumnWrapper>
            ))}
          </MainColumnsContainer>
        </div>
        <Loader />
      </MainContainer>
    );
  }

return (
  <MainContainer>
    <div className="container">
      <MainColumnsContainer>
        {columnStatuses.map((status) => {
          const filteredCards = cards.filter(card => card.status === status);
          return (
            <MainColumnWrapper key={status}>
              <Column 
                title={status}
                cards={filteredCards}
                isEmpty={filteredCards.length === 0}
                onBrowseOpen={onBrowseOpen}
              />
            </MainColumnWrapper>
          );
        })}
      </MainColumnsContainer>
    </div>
  </MainContainer>
);
}
