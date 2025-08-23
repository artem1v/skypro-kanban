import React from 'react';
import {
  CardLoaderItem,
  CardLoaderContainer,
  CardLoaderGroup,
  CardLoaderTheme,
  CardLoaderButton,
  CardLoaderContent,
  CardLoaderTitle,
  CardLoaderDate
} from './CardLoader.styled';

export default function CardLoader() {
  return (
    <CardLoaderItem>
      <CardLoaderContainer>
        <CardLoaderGroup>
          <CardLoaderTheme />
          <CardLoaderButton>
            <div></div>
            <div></div>
            <div></div>
          </CardLoaderButton>
        </CardLoaderGroup>
        <CardLoaderContent>
          <CardLoaderTitle />
          <CardLoaderDate>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#e0e0e0" strokeWidth="0.8" strokeLinejoin="round"/>
              <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#e0e0e0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div></div>
          </CardLoaderDate>
        </CardLoaderContent>
      </CardLoaderContainer>
    </CardLoaderItem>
  );
}
