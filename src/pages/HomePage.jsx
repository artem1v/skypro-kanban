import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { HomeContainer } from './HomePage.styled';

export default function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <Main />
    </HomeContainer>
  );
}