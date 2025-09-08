import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

export default function HomePage({ onNewCardOpen, onBrowseOpen }) {
  console.log('HomePage props - onNewCardOpen:', !!onNewCardOpen);
  console.log('HomePage props - onBrowseOpen:', !!onBrowseOpen);

  return (
    <div>
      <Header onNewCardOpen={onNewCardOpen} />
      <Main onBrowseOpen={onBrowseOpen} />
    </div>
  );
}