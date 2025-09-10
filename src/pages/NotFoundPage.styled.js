import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #F5F7FA;
  padding: 20px;
`;

export const NotFoundTitle = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: #565EEF;
  margin: 0 0 20px 0;
`;

export const NotFoundText = styled.p`
  font-size: 24px;
  color: #333;
  margin: 0 0 30px 0;
  text-align: center;
`;

export const NotFoundLink = styled.a`
  padding: 12px 24px;
  background: #565EEF;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background: #3d44b3;
  }
`;