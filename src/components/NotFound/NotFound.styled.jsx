import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #eaeef6;
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 8rem;
  color: #94a6be;
  margin: 0;
  animation: ${fadeIn} 1s ease-out;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: #000000;
  margin: 1rem 0;
  max-width: 600px;
  animation: ${fadeIn} 1.5s ease-out;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HomeButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: #565eef;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  animation: ${fadeIn} 2s ease-out;

  &:hover {
    background-color: #33399b;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

export const DecorativeCircle = styled.div`
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #3498db 0%, transparent 70%);
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left: 10%;
  animation: ${pulse} 3s infinite ease-in-out;
  z-index: -1;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;