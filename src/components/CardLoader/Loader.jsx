import React from 'react';
import { DivOverlay, DivSpinner } from './Loader';

export default function Loader() {
  return (
    <DivOverlay>
      <DivSpinner></DivSpinner>
    </DivOverlay>
  );
}
