import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

export default function HomePage({ onNewCardOpen, onOpenExit }) {
  return (
    <div>
      <Header 
        onNewCardOpen={onNewCardOpen}
        onOpenExit={onOpenExit}
      />
      <Main />
    </div>
  );
}